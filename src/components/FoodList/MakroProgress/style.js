const styles = {

    RightAlignContainer: {
        position: 'absolute',
        top: '1em',
        right: '1em',
      },
      WidgetStatsContainer: {
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
      },
    StatsContainer: {
        position: 'relative',
        width: '90%',
        height: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: "rgba(34, 34, 34, 0.14)",
    backdropFilter: "blur(9.3px)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    borderRadius: '10px'
    },
    ProgressContainer: {
        position: 'relative',
        marginRight: '5em',
    },
    StatsElement: {
        display: 'flex',
        margin: '2em 0 2em 2em'
    },
    MakroContent: {
        marginLeft: '1.5em'
    },
    InfoProgressContainer: {
        margin: '1em'
    },
    ProgressIcon: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)', // Przesunięcie do środka
          },

  };
  
  export default styles;
  