import { styled } from '@mui/system';

export const GeneratedBox = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#9F8BE8',
  backdropFilter: "blur(9.3px)",
  color: "#111",
  borderRadius: "8px",
  "&:hover": {
  boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
},
  width: "100%",
  height: "7em",
  marginBottom: "2em",
  transition: '0.3s'
}));

export const DraggedRecipeName = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',  // Ustawia obrazek na środku pionowo
  "& img": {
    marginRight: '1em',  // Dla odstępu między obrazkiem a tekstem
    height: '100%',  // Ustawia obrazek na pełną wysokość
    objectFit: 'cover',  // Zapewnia, że obrazek wypełnia całą wysokość
    borderRadius: '8px',  // Opcjonalne zaokrąglenie rogów obrazka
  },
  height: '7em'
}));

export const ParagraphException = styled('p')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  fontSize: '0.8em'
}));

export const MakroColumn = styled('div')(({ theme }) => ({
  "& span": {
    fontWeight: 'bold', 
  }
   
}));

