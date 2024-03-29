import { styled } from "@mui/material/styles";
import globalTheme from '../../../globalTheme/globalTheme';

export const RightAlignContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '1em',
  right: '1em',
}));

export const WidgetStatsContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StatsContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '90%',
  height: '80%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: "rgba(34, 34, 34, 0.14)",
  backdropFilter: "blur(9.3px)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  borderRadius: '10px',
  [theme.breakpoints.down("1498")]: {
    flexDirection: 'column'
  },
}));

export const ProgressContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  marginRight: '5em',
  [theme.breakpoints.down("2070")]: {
    marginRight: '2.5em',
  },
  [theme.breakpoints.down("2012")]: {
    marginRight: '1.5em',
    transform: 'scale(0.8)'
  },
  [theme.breakpoints.down("1605")]: {
    marginRight: '0em',
    transform: 'scale(0.7)'
  },
  [theme.breakpoints.down("1498")]: {
    transform: 'scale(0.6)',
    
    margin: '1em 0 0 0'
  },
  
  
}));

export const StatsElement = styled('div')(({ theme }) => ({
  display: 'flex',
  margin: '2em 0 2em 2em',
  
}));

export const MakroContent = styled('div')(({ theme }) => ({
  marginLeft: '1.5em',
  [theme.breakpoints.down("1498")]: {
    marginLeft: '0',
    marginRight: '6em',
    textAlign: 'center'
  },
}));

export const InfoProgressContainer = styled('div')(({ theme }) => ({
  margin: '1em',
  [theme.breakpoints.down("1498")]: {
    display: 'flex',
    margin: '0',
    height: '30%',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
    "& img": {
        display: 'none'
      },
  },
  [theme.breakpoints.down("1884")]: {
    transform: 'scale(0.8)',
    marginRight: '-1em'
  },
  [theme.breakpoints.down("1703")]: {
    transform: 'scale(0.8)',
    marginRight: '-2em'
  },
  [theme.breakpoints.down("1623")]: {
    transform: 'scale(0.7)',
    marginRight: '-2em'
  },
}));

export const ProgressIcon = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}));
