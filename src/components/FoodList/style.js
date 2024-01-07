const styles = {
    LeftTop: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "50%", // 50% szerokości, aby zajmować lewą połowę ekranu
      height: "40%", // 50% wysokości, aby zajmować górną połowę ekranu
      backgroundColor: "blue", // Dostosuj kolor
    },
  
    RightTop: {
      position: "absolute",
      top: 0,
      right: 0,
      width: "50%", // 50% szerokości, aby zajmować prawą połowę ekranu
      height: "40%", // 50% wysokości, aby zajmować górną połowę ekranu
      border: '1px solid' // Dostosuj kolor
    },
  
    LeftBottom: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "45%", // 50% szerokości, aby zajmować lewą połowę ekranu
      height: "60%", // 50% wysokości, aby zajmować dolną połowę ekranu
      
    },
  
    RightBottom: {
      position: "absolute",
      bottom: 0,
      right: 0,
      width: "55%", // 50% szerokości, aby zajmować prawą połowę ekranu
      height: "60%", // 50% wysokości, aby zajmować dolną połowę ekranu
      // backgroundColor: "yellow", // Dostosuj kolor
      display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end', // Ustawia komponenty wewnątrz na końcu kontenera (po prawej stronie)
    marginTop: '10px', // Dla odstępu od góry
    },
    ScrollMealsContainer: {
      width: "50%",
      overflowY: 'auto',
      margin: "5%"
    }

    
  };
  
  export default styles;
  