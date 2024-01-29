import React, { useRef, useState } from 'react'
import { CategorieContainer, CategorieElement, DialogMedia } from './styles'
import Breakfast from '../../../assets/Breakfast.svg';
import Dietary from '../../../assets/Dietary.svg';
import Dinner from '../../../assets/Dinner.svg';
import Healthy from '../../../assets/Healthy.svg';
import WorldCuisine from '../../../assets/WorldCuisine.svg';
import Occasion from '../../../assets/Occasion.svg';
import Seasonal from '../../../assets/Seasonal.svg';
import Difficulty from '../../../assets/Difficulty.svg';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { Card, CardContent, CardMedia, Grow } from '@mui/material';


const categoriesData = [
    { id: 1, name: 'Breakfast', image: Breakfast },
    { id: 2, name: 'Dinner', image: Dinner },
    { id: 3, name: 'Healthy', image: Healthy },
    { id: 4, name: 'Dietary', image: Dietary },
    { id: 5, name: 'World Cuisine', image: WorldCuisine },
    { id: 6, name: 'Occasion', image: Occasion },
    { id: 7, name: 'Seasonal', image: Seasonal },
    { id: 8, name: 'Difficulty', image: Difficulty },
  ];

const CategorieSlider = () => {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [dialogRecipes, setDialogRecipes] = useState([]); 
  const [openDialog, setOpenDialog] = useState(false);
  const containerRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const [startX, setStartX] = useState(null);

  



    const handleMouseDown = (e) => {
        setScrolling(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
      };

      const handleMouseLeave = () => {
        setScrolling(false);
      };

      const handleMouseUp = () => {
        setScrolling(false);
      };

      const handleMouseMove = (e) => {
        if (!scrolling) return;
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // You can adjust the multiplier to control the scrolling speed
        containerRef.current.scrollLeft = scrollLeft - walk;
      };

      const handleCategoryClick = async (category) => {
        setSelectedCategory(category);
    
        // Fetch recipes for the selected category
        const url = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=${category.name.toLowerCase()}`;
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'b04392eaa5msh0f05838fdb88036p19bf10jsn4ac20fbe4882',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
          },
        };
    
        try {
          const response = await fetch(url, options);
          const data = await response.json();
          setDialogRecipes(data.results);
        } catch (error) {
          console.error('Error fetching recipes for category:', error);
          setDialogRecipes([]);
        }
    
        setOpenDialog(true);
      };

      const handleCloseDialog = () => {
        setOpenDialog(false);
      };

  return (
    <>
    <CategorieContainer
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {categoriesData.map((category) => (
          <CategorieElement
            key={category.id}
            onClick={() => handleCategoryClick(category)}
          >
            <img src={category.image} alt="" draggable="false" />
            <p>{category.name}</p>
          </CategorieElement>
        ))}
      </CategorieContainer>


            {/* DIALOG SECTION */}
      <Dialog
          open={openDialog}
          maxWidth="md"
          fullWidth={true}
          onClose={handleCloseDialog}
          PaperProps={{
            style: {
              width: '80%',
              maxWidth: 'none',
              height: '80%',
              maxHeight: 'none',
              backgroundColor: '#F4FDD9', 
            },
          }}
        >
          <DialogMedia>
            {selectedCategory ? <img src={selectedCategory.image}/>  : ''}
          </DialogMedia>
          <DialogTitle
            style={{
              textAlign: 'center',
              color: '#111',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '3px'
            }}
          >
            {selectedCategory ? selectedCategory.name : 'Category Name'}
          </DialogTitle>
          <DialogContent style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            {dialogRecipes.map((recipe, index) => (
              <Grow in key={recipe.id} timeout={350 * index}>
                <Card style={{ marginBottom: '10px', width: '15em', height: '14em', background: '#86BF80', color: '#111', textAlign: 'center' }}>
                  <CardMedia
                    component="img"
                    alt={recipe.name}
                    height="140"
                    image={recipe.thumbnail_url}
                  />
                  <CardContent>
                    <p>{recipe.name}</p>
                  </CardContent>
                </Card>
              </Grow>
            ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary" style={{ color: '#111' }}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      
    </>
  )
}

export default CategorieSlider