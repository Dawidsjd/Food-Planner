import { Input } from "@mui/material";
import { styled } from "@mui/system";


export const DishesWrapper = styled("div")({
  backgroundColor: "#FFFFFF",
  padding: "20px",
  borderRadius: "8px",
});

export const IngredientsContainer = styled("section")({
    width: "800px",
    height: "618px",
});

export const WrapperInputs = styled("div")({
    padding: "25px",
});

export const WrapperContent = styled("div")({
    margin: "15px 0px",
    background: "#F5F3F3",
    borderRadius: '15px',
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "165px",
    width: "630px",
    border: "2px solid grey",
        "input":{
        background: "#F5F3F3",
        padding: "10px",
        fontSize: "18px",
        outline: 'none',
        border: 'none',
        borderRadius: '15px',
        marginLeft: "90px",
        
    },
});

export const HeadingContainer = styled("div")({
  marginLeft: "30px",
  marginTop: "40px",
});