import { Input } from "@mui/material";
import { styled } from "@mui/system";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

const baseInputStyles = {
  background: "#D9D9D9",
  padding: "5px",
  fontSize: "16px",
  outline: 'none',
  border: 'none',
};

const baseContentStyles = {
  background: "#D9D9D9",
  borderRadius: '15px',
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export const IngredientsContainer = styled("section")({
  width: "450px",
  height: "658px",
  '@media (max-width: 768px)': {
    width: "100%",
  },
});

export const BarSection = styled("section")({
  width: "100%",
  display: "flex",
  justifyContent: "space-between", 
  margin: "15px 0px",
  alignItems: "center",
  input: {
    ...baseInputStyles,
    fontSize: "16px",
    '@media (max-width: 768px)': {
      fontSize: "14px",
    },
  },
  div: {
    ...baseInputStyles,
    borderRadius: '15px',
    alignItems: "center",
    display: "flex",
  },
  '@media (max-width: 768px)': {
    flexDirection: 'column',
  },
});

export const ContainerProductList = styled("div")({
  background: "#fff",
  borderRadius: "25px",
  height: "73%",
});

export const WrapperInputs = styled("div")({
  padding: "25px",
});

export const WrapperContent = styled("div")({
  ...baseContentStyles,
  margin: "15px 0px",
  input: {
    ...baseInputStyles,
    fontSize: "18px",
    marginLeft: "10px",
    '@media (max-width: 768px)': {
      fontSize: "16px",
    },
  },
  div: {
    ...baseContentStyles.div,
    marginRight: "10px",
    marginTop: "5px",
  },
});

export const StyledDeleteIcon = styled(DeleteIcon)({
  color: '#f21332',
});

export const AddPlus = styled(AddIcon)({
  color: '#fff',
  fontSize: "60px",
});

export const StyledPlusIcon = styled("div")({
  background: "#9F8BE8 !important",
  padding: "10px 10px 8px 10px !important",
  borderRadius: "50% !important",
  marginTop: "10px",
});

export const StyledSearchIcon = styled(SearchIcon)({
  marginLeft: "5px",
  borderRight: "2px solid #95a5a6",
});
