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

    [theme.breakpoints.down("680")]: {
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'baseline'
    },
}));

export const ContentContainer = styled('div')({
    margin: '2em'
});

export const PlanParagraph = styled('p')(({ theme }) => ({
  fontSize: '1.5em',
  

  [theme.breakpoints.down("1433")]: {
    fontSize: '1em',
  },
}));

export const MealHeading = styled('h1')(({ theme }) => ({
    
    fontSize: '2.5em',

    [theme.breakpoints.down("1433")]: {
      fontSize: '1.5em',
    },
  }));

export const DateContainer = styled('p')(({ theme }) => ({
    marginLeft: '2em',
    marginTop: '-1em',
  width: '40%',
  height: '40%',
  background: '#FFE8C2',
  boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
  borderRadius: '10px',
  padding: '1em',
  "& p:nth-child(1)": {
    color: '#6A8D73',

    [theme.breakpoints.down("1433")]: {
      fontSize: '0.6em',
    },
    
  },
  "& p:nth-child(2)": {
    display: 'flex',
    marginTop: '0.5em',
    color: '#6A8D73',
    fontSize: '1.5em',
    fontWeight: 'bold',

    [theme.breakpoints.down("1433")]: {
      fontSize: '0.7em',
    },
  },
  [theme.breakpoints.down("1433")]: {
    marginTop: '-1.6em'
  },
}));