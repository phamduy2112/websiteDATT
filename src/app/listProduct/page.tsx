'use client';
import ProductGrid from "./component/ProductGrid";
import { FiList } from "react-icons/fi";
import { BsFillGrid3X2GapFill } from "react-icons/bs";
import ProductList from "./component/ProductList";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { getProductApi } from "../trangChu/api/product.api";
import { productAtom } from "@/atoms/productAtom";
import Link from "next/link";
import DropdownSelect from "./component/Select";

function ListProduct() {
  
    const [grid, setGrid] = useState(true); // true for grid view, false for list view
 const [products, setProducts] = useRecoilState(productAtom);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await getProductApi();
        setProducts(res.data || []);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Không thể tải sản phẩm. Vui lòng thử lại!");
      } finally {
        setLoading(false);
      }
    };

    if (products.length === 0) {
      fetchProducts();
    }
  }, [products.length, setProducts]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="spinner border-4 border-blue-500 border-t-transparent rounded-full w-12 h-12 animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-600 py-4">{error}</div>;
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-4">
        <p>Không có sản phẩm nào!</p>
      </div>
    );
  }
    return (
        <div>
        <div className="breadcrumb-area relative bg-gray-300 sm:min-h-[35vh] sxm:min-h-[30vh]">
  <div className="text-left">
    {/* Nội dung chính */}
    <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 z-10 text-center px-4">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">List Product</h2>
      <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base leading-none uppercase whitespace-nowrap mt-4">
        <Link href="/" className="text-black hover:text-blue-600">
          Home
        </Link>
        <div className="text-blue-600">/ List Product</div>
      </div>
    </div>

    {/* Text nền lớn */}
    <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 z-0 text-gray-400 text-5xl md:text-7xl lg:text-8xl font-thin">
      1920x406
    </div>
  </div>
</div>

         <div className="container">
       
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Sidebar */}
      <div className="w-64 bg-white p-4 rounded-lg shadow sxm:hidden lg:inline-block">
  {/* Categories */}
  <div className="mb-6">
    <h3 className="text-[1rem] font-semibold mb-3">Top Categories</h3>
    <ul className="space-y-2">
      <li className="flex items-center
      text-[.9rem]
       text-gray-400 hover:text-blue-600 cursor-pointer "
       
       >
        <span>All</span>
    (65)
      </li>
      <li className="flex items-center
      text-[.9rem]
       text-gray-400 hover:text-blue-600 cursor-pointer">
        <span>Computer</span>
       (12)
      </li>
      <li className="flex items-center
      text-[.9rem]
       text-gray-400 hover:text-blue-600 cursor-pointer">
        <span>Covid-19</span>
  (22)
      </li>
      {/* ... more categories ... */}
    </ul>
  </div>
  {/* Price Filter */}
  <div className="mb-6">
    <h3 className="text-[1rem] font-semibold mb-3">Price Filter</h3>
    <div className="px-2">
      <div className="text-sm text-gray-600 mb-2">$20 - $80</div>
      <input type="range" min={20} max={80} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
    </div>
  </div>
  {/* Color */}
  <div className="mb-6">
    <h3 className="text-[1rem] font-semibold mb-3">Color</h3>
    <div className="flex flex-wrap gap-2">
      <button className="w-6 h-6 rounded-full bg-green-500" />
      <button className="w-6 h-6 rounded-full bg-yellow-500" />
      <button className="w-6 h-6 rounded-full bg-orange-500" />
      <button className="w-6 h-6 rounded-full bg-red-500" />
      <button className="w-6 h-6 rounded-full bg-pink-500" />
      <button className="w-6 h-6 rounded-full bg-purple-500" />
      <button className="w-6 h-6 rounded-full bg-blue-500" />
      <button className="w-6 h-6 rounded-full bg-teal-500" />
    </div>
  </div>
  {/* Size */}
  <div className="mb-6">
    <h3 className="text-[1rem] font-semibold mb-3">Size</h3>
    <ul className="space-y-2">
      <li className="flex items-center
      text-[.9rem]
       text-gray-400 hover:text-blue-600 cursor-pointer">
        <span>All</span>
       (6)
      </li>
      <li className="flex items-center
      text-[.9rem]
       text-gray-400 hover:text-blue-600 cursor-pointer">
        <span>S</span>
       (12)
      </li>
      <li className="flex items-center
      text-[.9rem]
       text-gray-400 hover:text-blue-600 cursor-pointer">
        <span>M</span>
    (21)
      </li>
      {/* ... more sizes ... */}
    </ul>
  </div>
  {/* Brands */}
  <div className="mb-6">
    <h3 className="text-[1rem] font-semibold mb-3">Brands</h3>
    <ul className="space-y-2">
      <li className="flex items-center
      text-[.9rem]
       text-gray-400 hover:text-blue-600 cursor-pointer">
        <span>Lakmeeto</span>
       (65)
      </li>
      <li className="flex items-center
      text-[.9rem]
       text-gray-400 hover:text-blue-600 cursor-pointer">
        <span>Beautifill</span>
       (14)
      </li>
      {/* ... more brands ... */}
    </ul>
  </div>
</div>

                
                {/* Product area */}
                <div className="flex-1 mt-5">
                <div className="flex justify-between px-10 sxm:flex-col md:flex-row gap-3">
                <div className="w-[13rem] h-[2.5rem] border text-[.9rem] text-center flex justify-center items-center">
                    12 Product Found of 30
                  </div>
                  <div className="flex gap-4 text-xl items-center md:justify-center mb-6">
                        
                        <div 
                            className={`border border-gray-300 rounded-lg p-2.5 cursor-pointer transition-all ${grid ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
                            onClick={() => setGrid(true)}
                        >
                            <BsFillGrid3X2GapFill />
                        </div>
                        <div 
                            className={`border border-gray-300 rounded-lg p-2.5 cursor-pointer transition-all ${!grid ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
                            onClick={() => setGrid(false)}
                        >
                            <FiList />
                        </div>
                    </div>
                  <DropdownSelect/>
                </div>
                    {/* Toggle View */}
                 
                    {/* Product Display */}
                    {grid ? <ProductGrid products={products?.data}/> : <ProductList products={products?.data}/>}
                </div>
            </div>
        </div>   
        </div>
        
    );
}

export default ListProduct;
