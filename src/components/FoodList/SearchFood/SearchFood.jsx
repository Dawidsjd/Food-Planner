import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import CircularProgress from "@mui/material/CircularProgress";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import styles from "./style";
import globalTheme from "../../../globalTheme/globalTheme";
import { Search } from "@mui/icons-material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    background: "rgba(34, 34, 34, 0.14",
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiButton-textPrimary": {
    color: "#fff",
  },
  "& .MuiSvgIcon-root": {
    fill: "#fff",
  },
}));

const LoadingIndicator = ({ loading }) => {
  return (
    <div style={styles.LoadingIndicatorContainer}>
      {loading && <CircularProgress />}
    </div>
  );
};

const SearchFood = ({ onDragStart }) => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [fetchCount, setFetchCount] = useState(0);

  const handleClickOpen = (recipe) => {
    setSelectedRecipe(recipe);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    if (!searchClicked) return;

    const url = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes${
      query && `&q=${query}`
    }`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b04392eaa5msh0f05838fdb88036p19bf10jsn4ac20fbe4882",
        "X-RapidAPI-Host": "tasty.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setRecipes(data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setSearchClicked(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [query, fetchCount]);

  const handleSearch = () => {
    setFetchCount((prevCount) => prevCount + 1);
    setSearchClicked(true);
  };

  return (
    <div style={styles.RecipeSearchContainer}>
      {/* Wyszukiwarka jedzenia */}

      <div style={styles.RecipeSearchContent}>
        <div style={styles.SearchInputContainer}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search... (e.g. Chicken)"
            style={styles.SearchInput}
          />
          <button onClick={handleSearch} style={styles.SearchButton}>
            Search
          </button>
        </div>
        <LoadingIndicator loading={searchClicked} />
        <div style={styles.RecipeListContainer}>
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <div
                key={recipe.id}
                draggable
                onDragStart={() => onDragStart(recipe)}
              >
                <Card
                  sx={{ maxWidth: 345 }}
                  onClick={() => handleClickOpen(recipe)}
                  style={styles.RecipeCard}
                >
                  <CardActionArea>
                    {recipe.thumbnail_url && (
                      <CardMedia
                        component="img"
                        height="140"
                        image={recipe.thumbnail_url}
                        style={styles.RecipeCardMedia}
                      />
                    )}
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={{
                          fontSize: "1.2em",
                          lineHeight: "1.4",
                          fontWeight: "bold",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {recipe.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        style={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          maxHeight: "2.4em",
                        }}
                      >
                        {recipe.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            ))
          ) : (
            <Typography variant="body1">No results</Typography>
          )}
        </div>
        {selectedRecipe && (
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            maxWidth="md"
          >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
              {selectedRecipe.name}
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent
              dividers
              style={{ overflowY: "auto", maxHeight: "70vh" }}
            >
              {selectedRecipe.thumbnail_url && (
                <CardMedia
                  component="img"
                  height="300"
                  image={selectedRecipe.thumbnail_url}
                  alt={selectedRecipe.name}
                  style={{ marginBottom: "10px" }}
                />
              )}
              <Typography gutterBottom style={{ textAlign: "center" }}>
                <h3 style={{ textAlign: "center", margin: "5%" }}>
                  Description
                </h3>
                {selectedRecipe.description}
              </Typography>
              <h3 style={{ textAlign: "center", margin: "5%" }}>Video</h3>
              {selectedRecipe.original_video_url && (
                <div
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%",
                    height: 0,
                  }}
                >
                  <iframe
                    src={selectedRecipe.original_video_url}
                    title="Recipe Video"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              )}
              <h3 style={{ textAlign: "center", margin: "5%" }}>Ingredients</h3>
              {selectedRecipe.sections &&
                selectedRecipe.sections[0].components && (
                  <ul style={{ marginLeft: "10%" }}>
                    {selectedRecipe.sections[0].components.map(
                      (component, index) => (
                        <li key={index} style={{ margin: "5px" }}>
                          {component.raw_text}
                        </li>
                      )
                    )}
                  </ul>
                )}
              <h3 style={{ textAlign: "center", margin: "5%" }}>
                Instructions
              </h3>
              {selectedRecipe.instructions &&
                selectedRecipe.instructions.map((instruction, index) => (
                  <div key={index} style={{ textAlign: "center" }}>
                    <p>{instruction.display_text}</p>
                    {instruction.components && (
                      <ul>
                        {instruction.components.map((component, subIndex) => (
                          <li key={subIndex}>{component.raw_text}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                Close
              </Button>
            </DialogActions>
          </BootstrapDialog>
        )}
      </div>
    </div>
  );
};

export default SearchFood;
