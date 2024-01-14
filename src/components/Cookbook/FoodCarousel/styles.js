import { styled } from "@mui/system";

export const Divv = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '200px',
  height: '130px',
  background: '#86BF80',
  margin: 'auto',  // Wysrodkowanie horyzontalne
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',  // Wysrodkowanie pionowe
  justifyContent: 'center',  // Wysrodkowanie pionowe
  borderRadius: '10px',
  overflow: 'hidden',
  "& img": {
    borderRadius: '10px',
  },
  "& p": {
    whiteSpace: 'nowrap',  // Zapobiega przewijaniu tekstu do nowej linii
    overflow: 'hidden',   // Ukrywa nadmiarowy tekst
    textOverflow: 'ellipsis',  // Dodaje trzy kropki na końcu tekstu
    margin: '0',   // Usuwa marginesy dla elementu p
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
    "& input":{
      marginLeft: '0.5em',
      border: 'none',
      outline: 'none',
      background: '#D9D9D9',
      width: '100%',
      height: '100%'
    }
  }));

  export const CarouselTitle = styled('div')(({ theme }) => ({
    position: 'relative',
    margin: '0 0 2.5% 5%',

  }));

  export const CategorieTitle = styled('div')(({ theme }) => ({
    position: 'relative',
    margin: '5% 0 2.5% 5%',
  }));

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
  }));
