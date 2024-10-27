import ProductItem from '@/app/components/ProductItem/ProductItem';
import React from 'react'

function ProductGrid() {
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
    <div className='flex justify-center'>
    <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[1rem]">
      
      {products.map((product) => (
       <ProductItem product={product} key={product.id}/>
      ))} 
    
        </div>
    </div>
 
  )
}

export default ProductGrid