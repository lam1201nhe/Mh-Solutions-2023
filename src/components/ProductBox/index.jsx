import React from 'react'
import styles from "./productbox.module.scss"
import CenterBox from '../Centerbox'
import ProductList from '../ProductList'
import BlackTitle from '@/core/Blacktitle'

const ProductBox = ({items}) => {
  console.log(items)
  return (
    <div className={styles.home}>
        <BlackTitle content="Sản Phẩm" />
        <CenterBox>
          <ProductList items={items}/>
        </CenterBox>
    </div>
  )
}

export default ProductBox 