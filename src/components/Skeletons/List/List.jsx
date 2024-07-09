import React from 'react';
import styles from "./List.module.css"
import { Skeleton } from '@chakra-ui/react'

const List = () => {
  return (
    <div className={styles.content}>
      {
        [0,1,2,3,4,5,6,7,8].map(skelet => 
          <Skeleton key={skelet} height='348px' width='260px' />
        )
      }
    </div>
  )
}

export default List