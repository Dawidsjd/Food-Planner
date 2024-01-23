import { styled } from "@mui/system";

export const SearchCookBook = styled('div')(({ theme }) => ({
    position: 'relative',
    margin: '2.5% 0 5% 5%',
    color: '#726B6B',
    background: '#D9D9D9',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '10px',
    padding: '0.7em',
    width: '60%',
    "& input": {
      marginLeft: '0.5em',
      border: 'none',
      outline: 'none',
      background: '#D9D9D9',
      width: '100%',
      height: '100%',
    },
    [theme.breakpoints.down("679.95")]: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }));