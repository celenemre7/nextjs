import React from 'react'
import styles from './styles.modules.css'
function Skeleton({width, height}) {
  return (
    <div className={styles.skeleton} style={{width, height}}>

    </div>
  )
}

export default Skeleton