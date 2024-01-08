import { styled } from '@mui/system';

export const GeneratedBox = styled('div')(({ theme }) => ({
  backgroundColor: "rgba(34, 34, 34, 0.1)",
  backdropFilter: "blur(9.3px)",
  color: "#111",
  borderRadius: "8px",
  "&:hover": {
  boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
},
  width: "100%",
  height: "auto",
  marginBottom: "2em",
  padding: "2em",
  transition: '0.3s'
}));

export const DraggedRecipeName = styled('div')(({ theme }) => ({
  
}));
