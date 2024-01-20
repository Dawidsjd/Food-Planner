import { Input } from "@mui/material";
import { styled } from "@mui/system";


export const DishesWrapper = styled("div")({
  backgroundColor: "#FFFFFF",
  padding: "20px",
  borderRadius: "8px",
});

export const MatchingDishesContainer = styled("section")({
    width: "100%",
    height: "618px",
    marginLeft: '30px'
});

export const WrapperInputs = styled("div")({
    padding: "25px",
});

export const WrapperContent = styled("div")({
    padding: '12px 10px',
    margin: '15px 0px',
    background: "#F5F3F3",
    borderRadius: '15px',
    display: "flex",
    justifyContent: "",
    alignItems: "center",
    height: "165px",
    width: "95%",
    boxShadow: '0px 4px 4px 0px #D9D9D9',
    
});

export const WrapperImage = styled("div")({
  width: "150px",
  height: '100%',
  'img': {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
  }
});

export const HeadingContainer = styled("div")({
  marginTop: "40px",
});

export const WrapperContentText = styled("div")({
  height: '100%',
  marginRight: '0 15px',
  padding: '5px',
  'h2': {
    paddingBottom: '5px'
  }
});

export const SectionListDishes = styled("div")({
  width: '95%',
  height: '90%',
  display: 'flex',
  padding: '5px',
  position: '',
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
      width: '20px',
  },
  '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 5px grey',
      borderRadius: '10px',
  },
  '&::-webkit-scrollbar-thumb': {
      background: '#86BF80',
      borderRadius: '10px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
      background: '#78b072',
  },
});