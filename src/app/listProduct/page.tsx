'use client';
import ProductGrid from "./component/ProductGrid";
import { FiList } from "react-icons/fi";
import { BsFillGrid3X2GapFill } from "react-icons/bs";
import ProductList from "./component/ProductList";
import { useState } from "react";

function ListProduct() {
    const [grid, setGrid] = useState(true); // true for grid view, false for list view

    return (
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
                    {grid ? <ProductGrid /> : <ProductList />}
                </div>
            </div>
        </div>
    );
}

export default ListProduct;
