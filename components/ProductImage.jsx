import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ProductNote from './ProductNote'
import MobileCarousel from './MobileCarousel'

const ProductImage = ({ detail }) => {
    const [width, setWidth] = useState();
    const breakpoint = 800;
    useEffect(() => {
        setWidth(window.innerWidth)
    })

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth), false);
    })
    return width < breakpoint ? (<div><MobileCarousel detail={detail} /></div>) : (
        <div className='hidden p-3 w-[50%] md:flex flex-col flex-1 left-[300px] relative items-center'>
            <div className='h-96 w-96 relative min-w-[300px]'>
                <Image src={detail.urls.regular} layout='fill' className='rounded-md' objectFit='cover' alt='regular model' />
            </div>
            <div className='flex gap-1 p-2' >
                <div className='relative h-[200px] w-[200px]'>
                    <Image src={detail.urls.small} layout='fill' objectFit='cover' className='rounded-md' alt='small model' />
                </div>
                <div className='relative h-[200px] w-[200px]'>
                    <Image src={detail.urls.small} layout='fill' objectFit='cover' className='rounded-md' alt='small model' />
                </div>
            </div>
            <div className='h-96 w-96 relative min-w-[300px] p-1'>
                <Image src={detail.urls.raw} layout='fill' className='rounded-md' objectFit='cover' alt='regular model' />
            </div>
            <div className='h-96 w-96 relative min-w-[300px] top-2'>
                <Image src={detail.urls.raw} layout='fill' className='rounded-md' objectFit='cover' alt='regular model' />
            </div>
            <ProductNote />
        </div>
    )
}

export default ProductImage