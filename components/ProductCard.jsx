import React from 'react'
import Image from 'next/image'
import ProductNote from './ProductNote'
import { FaArrowRight } from 'react-icons/fa'

const sizes = [{ id: 1, name: 'XS' },
{ id: 2, name: 'S' },
{ id: 3, name: 'M' },
{ id: 4, name: 'L' },
{ id: 5, name: 'XXL' }]

const ProductCardComp = ({ detail, addToCart }) => {
    const [size, setSize] = React.useState(sizes[0])

    return (
        <div className='flex flex-col ml-auto mr-auto p-3 min-h-screen md:w-[25%]  md:fixed right-0 top-12'>
            {/* product name and description */}
            <div className='w-[288px] h-[92px] static'>
                <h2 className='uppercase text-black text-5xl font-normal tracking-tighter'>JONATHAN SIMKHAI</h2>
            </div>
            <div className='static w-[254px] h-[52px] mt-2'>
                <p className='font-normal  text-sm '>Lurex Linen Viscose Jacket in Conchiglia</p>
                <h2 className='font-bold mt-2 text-sm uppercase'>$225</h2>
            </div>
            {/* product color and product image */}
            <div className='flex-col py-2'>
                <div>
                    <p className='uppercase font-bold text-sm text-black'>Color <span className='text-gray-700 uppercase text-sm font-normal leading-none'>Conchiglia</span></p>
                </div>
                <div className='flex p-1 gap-3 '>
                    <div className="relative h-20 w-16">
                        <Image src={detail.urls.thumb} layout="fill" objectFit='contain' className='border-2 border-black' />
                    </div>
                    <div className="relative h-20 w-16">
                        <Image src={detail.urls.thumb} layout="fill" objectFit='contain' />
                    </div>
                </div>
            </div>
            {/* product size */}
            <div className='flex-col'>
                <div >
                    <p className='uppercase font-bold text-sm text-black'>Size {size.name}</p>
                </div>
                <div className='mt-1  py-2'>
                    {sizes.map((item, index) => (
                        <button onClick={() => setSize(item)} key={index} className={`${item.id === size.id && 'bg-black text-white'} w-[70px] h-[30px] bg-white text-black rounded-xl border-solid border-2 border-black-200 `}>
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>
            {/* add to cart button*/}
            <div className='flex items-center justify-center px-5 bg-black rounded-full text-white box-border text-sm py-3 mt-2 cursor-pointer'>
                <button className='uppercase' onClick={addToCart}>Add to bag </button>
                <FaArrowRight className='ml-[10px]' />
            </div>
            {/* offers and aditional info */}
            <div className='flex flex-col mt-3 '>
                <p className='font-normal  text-sm'>Get 4 interest-free payments of $196.25 with Klarna LEARN MORE</p>
                <p className='font-normal  text-sm mt-3'>Speak to a Personal Stylist CHAT NOW</p>
            </div>
            <div className='md:hidden '>
                <ProductNote />
            </div>
        </div>
    )
}

export const ProductCard = React.memo(ProductCardComp)
export default ProductCard