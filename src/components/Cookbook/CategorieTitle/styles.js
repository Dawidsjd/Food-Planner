import { styled } from "@mui/system";

export const CategorieTitle = styled('div')(({ theme }) => ({
    position: 'relative',
    margin: '5% 0 2.5% 5%',
    [theme.breakpoints.down("679.95")]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      margin: "5% 0 2.5% 0",
    },
  }));