import ProductItem from '@/app/components/ProductItem/ProductItem';
import React from 'react'

function FeaturedProduct() {
    const products = [
        {
          id: 1,
          image: "https://via.placeholder.com/270x274",
          name: "Modern Smart Phone",
          price: "$38.50",
          sale: "Sale 10%",
          status: "New",
          category: "Accessories",
        },
        {
          id: 2,
          image: "https://via.placeholder.com/270x274",
          name: "Bluetooth Headphone",
          price: "$38.50",
          sale: "Sale 10%",
          status: "Sale",
          category: "Accessories",
        },
        {
          id: 3,
          image: "https://via.placeholder.com/270x274",
          name: "Smart Music Box",
          price: "$38.50",
          sale: "Sale",
          status: "New",
          category: "Accessories",
        },
        {
          id: 4,
          image: "https://via.placeholder.com/270x274",
          name: "Air Pods 256K Black",
          price: "$38.50",
          sale: "Sale",
          status: "New",
          category: "Accessories",
        },
        {
          id: 5,
          image: "https://via.placeholder.com/270x274",
          name: "Air Pods 256K Black",
          price: "$38.50",
          sale: "Sale",
          status: "New",
          category: "Accessories",
        },
        {
          id: 1,
          image: "https://via.placeholder.com/270x274",
          name: "Modern Smart Phone",
          price: "$38.50",
          sale: "Sale 10%",
          status: "New",
          category: "Accessories",
        },
        {
          id: 2,
          image: "https://via.placeholder.com/270x274",
          name: "Bluetooth Headphone",
          price: "$38.50",
          sale: "Sale 10%",
          status: "Sale",
          category: "Accessories",
        },
        {
          id: 3,
          image: "https://via.placeholder.com/270x274",
          name: "Smart Music Box",
          price: "$38.50",
          sale: "Sale",
          status: "New",
          category: "Accessories",
        },
        {
          id: 4,
          image: "https://via.placeholder.com/270x274",
          name: "Air Pods 256K Black",
          price: "$38.50",
          sale: "Sale",
          status: "New",
          category: "Accessories",
        },
        {
          id: 5,
          image: "https://via.placeholder.com/270x274",
          name: "Air Pods 256K Black",
          price: "$38.50",
          sale: "Sale",
          status: "New",
          category: "Accessories",
        },
      ];
  return (
    <div className='w-[80%] m-auto'>
        <div className='flex flex-col justify-center items-center pb-[1rem]'>
        <h4 className='pt-[1.2rem] text-[1.5rem]'>Featured Products</h4>
        <div className='flex gap-[1rem]'>
            <p>Hot</p>
            <p>New</p>
            <p>Discount</p>
        </div>
        </div>
        <div className='grid grid-cols-5 gap-[1rem]'>
 
 {products.map((product) => (
  <ProductItem product={product} key={product.id}/>
 ))}

   </div>
    
    </div>
  )
}

export default FeaturedProduct