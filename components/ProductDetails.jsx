import React from 'react'
import ProductImage from '../components/ProductImage'
import ProductTabs from '../components/ProductTabs'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { getProductDetails } from '../redux/productSlice'
import ProductCard from './ProductCard'
const ProductDetailsComp = ({ products, addToCart }) => {
    const productDetail = products[0];

    if (!productDetail) {
        return (
            <div className=" p-3 w-[50%] flex flex-col flex-1 left-[300px] absolute">
                Loading ......
            </div>
        )
    }

    return (
        <div className='flex flex-col md:flex gap-1 '>
            <ProductTabs />
            <ProductImage detail={productDetail} />
            <ProductCard detail={productDetail} addToCart={addToCart} />
        </div>
    )
}
export const ProductDetails = React.memo(ProductDetailsComp)
export default ProductDetails


