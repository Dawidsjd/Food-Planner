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
  transform: 'scale(0.8)'
  }));