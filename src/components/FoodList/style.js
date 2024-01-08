import { styled } from '@mui/system';

export const TopLeftContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '50%',
  height: '40%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // Dodaj dodatkowe style według potrzeb
}));

export const TopRightContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  width: '50%',
  height: '40%',
  // Dodaj dodatkowe style według potrzeb
}));

export const BottomLeftContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '50%',
  height: '60%',
  // Dodaj dodatkowe style według potrzeb
}));

export const BottomRightContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  right: 0,
  width: '50%',
  height: '60%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  marginTop: '10px',
  // Dodaj dodatkowe style według potrzeb
}));

export const ScrollMealsContainer = styled('div')(({ theme }) => ({
  width: '50%',
  overflowY: 'auto',
  margin: '5%',
  // Dodaj dodatkowe style według potrzeb
}));
