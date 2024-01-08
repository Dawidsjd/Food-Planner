import { styled } from '@mui/system';

export const TitleContainer = styled('div')(({ theme }) => ({
  width: '90%',
  height: '80%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start', // Zmiana z 'center' na 'flex-start'
  alignItems: 'flex-start', // Zmiana z 'center' na 'flex-start'
  margin: 'auto',
  background: "rgba(34, 34, 34, 0.14)",
  backdropFilter: "blur(9.3px)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
}));

export const ContentContainer = styled('div')({
    margin: '2em'
});

export const PlanParagraph = styled('p')({
  fontSize: '1.5em'
});

export const MealHeading = styled('h1')({
    
    fontSize: '2.5em'
});

export const DateContainer = styled('div')({
    marginLeft: '2em',
    marginTop: '-1em',
  width: '40%',
  height: '40%',
  background: '#FFE8C2',
  boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
  borderRadius: '10px',
  padding: '1em',
  "& p:nth-child(1)": {
    color: '#6A8D73'
  },
  "& p:nth-child(2)": {
    display: 'flex',
    marginTop: '0.5em',
    color: '#6A8D73',
    fontSize: '1.5em',
    fontWeight: 'bold'
  },
});