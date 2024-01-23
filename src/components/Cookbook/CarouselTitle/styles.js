import { styled } from "@mui/system";

export const CarouselTitle = styled('div')(({ theme }) => ({
    position: 'relative',
    margin: '0 0 2.5% 5%',
    [theme.breakpoints.down("679.95")]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      margin: "0 0 2.5% 0",
    },
  }));