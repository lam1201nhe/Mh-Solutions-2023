import React from 'react'
import styles from "./productbox.module.scss"
import CenterBox from '../Centerbox'
import ProductList from '../ProductList'
import BlackTitle from '@/core/Blacktitle'

const ProductBox = ({items, className}) => {
  console.log(items)
  return (
    <div className={`${styles.home} ${className}`}>
        <BlackTitle content="Sản Phẩm" />
        <CenterBox>
          <ProductList items={items}/>
        </CenterBox>
    </div>
  )
}

export default ProductBox 