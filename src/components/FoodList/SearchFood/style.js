import background from '../../../assets/majkidzordan.jpg'
import globalTheme from '../../../globalTheme/globalTheme'

const tileStyles = {
  backgroundColor: "rgba(34, 34, 34, 0.1)",
  backdropFilter: "blur(9.3px)",
  color: "#fff",
  borderRadius: "8px",
  "&:hover": {
    boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
  },
};

const styles = {
  RecipeSearchContainer: {
    // backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  RecipeSearchContent: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "16px",
    maxWidth: "100%",
    maxHeight: "100%",
    padding: "20px",
    background: "rgba(34, 34, 34, 0.14)",
    backdropFilter: "blur(9.3px)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  },
  SearchInputContainer: {
    display: "flex",
    margin: "20px",
  },
  SearchInput: {
    width: "100%",
    padding: "8px",
    border: "none",
    outline: "none",
  },
  SearchButton: {
    padding: "10px 20px",
    fontSize: "1em",
    fontWeight: "bold",
    background: globalTheme.palette.primary.main,
    color: "#fff",
    border: "none",
    borderTopRightRadius: "8px",
    borderBottomRightRadius: "8px",
    cursor: "pointer",
  },
  LoadingIndicatorContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  RecipeListContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "center",
    maxHeight: "30vh",
    overflowY: "auto",
  },
  RecipeCard: {
    maxWidth: 245,
    ...tileStyles,
  },
  RecipeCardMedia: {
    height: "140px",
  },
};

export default styles;
