import { Input } from "@mui/material";
import { styled } from "@mui/system";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

export const IngredientsContainer = styled("section")({
    width: "450px",
    height: "658px",
});

export const BarSection = styled("section")({
    width: "100%",
    display: "flex",
    justifyContent: "space-between", 
    margin: "15px 0px",
    alignItems: "center",
    "input":{
    background: "#D9D9D9",
    padding: "5px",
    fontSize: "16px",
    outline: 'none',
    border: 'none',
    },
    "div":{
    background: "#D9D9D9",
    padding: "5px",
    borderRadius: '15px',
    alignItems: "center",
    display: "flex",
    },
});

export const ContainerProductList = styled("div")({
    background: "#fff",
    borderRadius: "25px",
    height: "500px",
});

export const WrapperInputs = styled("div")({
    padding: "25px",
});

export const WrapperContent = styled("div")({
    margin: "15px 0px",
    background: "#D9D9D9",
    borderRadius: '15px',
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "input":{
        background: "#D9D9D9",
        padding: "10px",
        fontSize: "18px",
        outline: 'none',
        border: 'none',
        borderRadius: '15px',
        marginLeft: "10px",
        
    },
    "div": {
        marginRight: "10px",
        marginTop: "5px",
    }
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
});

export const StyledSearchIcon = styled(SearchIcon)({
    marginLeft: "5px",
    borderRight: "2px solid #95a5a6",
});