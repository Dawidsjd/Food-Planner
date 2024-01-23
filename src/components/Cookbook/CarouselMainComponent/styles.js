import { styled } from "@mui/system";

export const Divv = styled('div')(({ theme }) => ({
    position: 'relative',
    width: '200px',
    height: '130px',
    background: '#86BF80',
    margin: 'auto',  
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',  
    justifyContent: 'center',  
    borderRadius: '10px',
    overflow: 'hidden',
    "& img": {
      borderRadius: '10px',
    },
    "& p": {
      whiteSpace: 'nowrap',  
      overflow: 'hidden',   
      textOverflow: 'ellipsis',  
      margin: '0',   
    },
  }));

  export const IconContainer = styled('div')(({ theme }) => ({
    position: "absolute",
  top: "0",
  right: "0",
  padding: "5px",
  transform: 'scale(0.8)',
  "& img": {
    borderRadius: '50px',
    boxShadow: '0 0 15px rgba(1,1,1,0.4)',
    cursor: 'pointer',
  }
  }));