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
                <div className="breadcrumb-area relative bg-gray-300 min-h-[35vh]" style={{ borderRadius: '20px' }}>
      <div className="text-left container  m-auto">
       <div className='absolute top-[30%] left-[40%] z-[10]'>
        <h2 className='text-center text-[3rem] font-semibold'>Blog Single
        </h2>
        <div className="flex gap-6 self-center max-w-full text-[1rem] leading-none uppercase whitespace-nowrap w-[172px]">
            <Link href="/" className="text-black hover:text-blue-600">Home</Link>
            <div className="grow shrink text-blue-600 w-[92px]"> // ListProduct</div>
          </div>
       </div>
       
        <div className="absolute top-[30%] left-[40%] z-0 text-gray-400 text-8xl font-thin ">
          1920x406
        </div>
      </div>
      </div>
         <div className="w-full min-h-screen px-4 py-6 md:px-8 lg:px-0 lg:w-[90%] xl:w-[80%] mx-auto">
       
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Sidebar */}
                <div className="w-full lg:w-[15rem] 2xl:w-[20rem] h-[30rem] bg-white rounded-xl  shadow-md p-4">
                    <h4 className="text-black font-semibold text-lg pb-2 border-b border-gray-200">Danh Mục</h4>
                    <ul className="text-sm">
                        {['Điện thoại', 'Laptop', 'Tablet', 'Tai nghe'].map((item, index) => (
                           <li key={index} className="py-2.5 hover:text-blue-600 cursor-pointer transition-colors">
                           {item}
                       </li>
                        ))}
                    </ul>
                    <h4 className="text-black font-semibold text-lg pt-4 pb-2 border-b border-gray-200">Giá</h4>
                    <div className="flex flex-col text-sm">
                        {[
                            'Dưới 1.000.000 VND',
                            '1.000.000 - 2.000.000 VND',
                            '2.000.000 - 5.000.000 VND',
                            'Trên 5.000.000 VND'
                        ].map((priceRange, index) => (
                            <label key={index} className="py-2.5 flex items-center hover:text-blue-600 cursor-pointer transition-colors">
                            <input type="checkbox" className="mr-3 w-4 h-4" /> {priceRange}
                        </label>
                        ))}
                    </div>
                </div>
                
                {/* Product area */}
                <div className="flex-1">
                    {/* Toggle View */}
                    <div className="flex gap-4 text-xl items-center justify-center mb-6">
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
                    {/* Product Display */}
                    {grid ? <ProductGrid products={products?.data}/> : <ProductList products={products?.data}/>}
                </div>
            </div>
        </div>   
        </div>
        
    );
}

export default ListProduct;
