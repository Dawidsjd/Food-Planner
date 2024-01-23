import { styled } from "@mui/system";

export const CategorieContainer = styled('div')(({ theme }) => ({
    position: 'relative',
    width: '100%',
    display: 'flex',
    overflowX: 'auto',
    "&::-webkit-scrollbar": {
      height: '8px',
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: 'rgba(34, 34, 34, 0.3)',
      borderRadius: '4px',
      
      "&:hover": {
        backgroundColor: 'rgba(34, 34, 34, 0.4)',
      },
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: 'rgba(34, 34, 34, 0.1)',
    },

    [theme.breakpoints.up("1526")]: {
      justifyContent: 'center'
    },
    [theme.breakpoints.down("679.95")]: {
      flexWrap: 'wrap',
      justifyContent: 'center',
  },
    
  }));

  export const CategorieElement = styled('div')(({ theme }) => ({
    position: 'relative',
    padding: '1em',
    background: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '5%',
    marginBottom: '10px',
    borderRadius: '15px',
    userSelect: 'none',
    "&:hover": {
      cursor: 'pointer'
    },
    ":last-child": {
      marginRight: '5%',
    },
    [theme.breakpoints.down("679.95")]: {
      ":last-child": {
        marginRight: '0%',
      },
  },
  }));

  export const DialogMedia = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: '2.5%',
    left: '2.5%',
    width: '2.5em',
    "& img":{
      width: '100%'
    }
    
  }));