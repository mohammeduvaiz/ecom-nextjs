import React from 'react'

const ProductNoteComp = () => {
    return (
        <div className='w-full md:w-[480px] flex flex-col mt-10 pb-10 '>
            <div className='flex mt-10 px-4 mx-auto my-auto'>
                <p className='uppercase underline font-normal text-sm p-2'>JONATHAN SIMKHAI</p>
                <p className='uppercase underline font-normal text-sm p-2'>BLAZERS</p>
                <p className='uppercase underline font-normal text-sm p-2'>VISCOSE</p>
            </div>
            <h1 className='uppercase font-bold text-sm text-center mt-4'> a note from the editor</h1>
            <p className='font-normal text-2xl text-center'>
                The Forte Lurex Linen Viscose Jacket in Mother of Pearl
                features lunar lavishness by night and by day: a blazer in a
                linen blend shot with lurex for a shimmering surface that
                shines like a star in the sky.
            </p>
            <p className='text-center text-sm'>
                -By <span className='uppercase underline font-normal text-sm'>minha shim</span> ,Fashion Editor
            </p>
        </div>
    )
}

export const ProductNote = React.memo(ProductNoteComp)
export default ProductNote