import ProductItem from '@/app/components/ProductItem/ProductItem';
import React from 'react'

function ProductGrid(props) {

  return (
    <div className='flex justify-center'>
    <div className="grid sm:grid-cols-2  xl:grid-cols-3  gap-[1rem]">
      
      {props.products.map((product) => (
       <ProductItem product={product} key={product.id}/>
      ))} 
    
        </div>
    </div>
 
  )
}

export default ProductGrid