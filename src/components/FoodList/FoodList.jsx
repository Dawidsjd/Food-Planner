import React from 'react'
import SearchFood from './SearchFood/SearchFood'
import styles from "./style";

const FoodList = () => {
  return (
    <>
      <div style={styles.LeftTop}></div>
      <div style={styles.RightTop}></div>
      <div style={styles.LeftBottom}>
        <SearchFood />
      </div>
      <div style={styles.RightBottom}></div>
      
    </>
  )
}

export default FoodList