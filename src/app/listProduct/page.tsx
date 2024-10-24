'use client';
import ProductGrid from "./component/ProductGrid";
import { FiList } from "react-icons/fi";
import { BsFillGrid3X2GapFill } from "react-icons/bs";
import ProductList from "./component/ProductList";
import { useState } from "react";

function ListProduct() {
    const [grid, setGrid] = useState(true); // true for grid view, false for list view

    const toggleView = () => {
        setGrid(prev => !prev);
    };

    return (
        <div className="w-[80%] m-auto py-[1rem]">
            <div className="flex gap-[1.5rem]">
                <div className="w-[25%] h-[30rem] border border-gray-300 rounded-lg shadow-md p-4 bg-white">
                    <h4 className="text-black font-semibold text-[1.2rem] pb-2 border-b border-gray-200">Danh Mục</h4>
                    <ul className="text-[.9rem]">
                        {['Điện thoại', 'Laptop', 'Tablet', 'Tai nghe'].map((item, index) => (
                            <li key={index} className="py-2 hover:text-blue-600 cursor-pointer transition-colors">
                                {item}
                            </li>
                        ))}
                    </ul>
                    <h4 className="text-black font-semibold text-[1.2rem] pt-4 pb-2 border-b border-gray-200">Giá</h4>
                    <div className="flex flex-col text-[.9rem]">
                        {[
                            'Dưới 1.000.000 VND',
                            '1.000.000 - 2.000.000 VND',
                            '2.000.000 - 5.000.000 VND',
                            'Trên 5.000.000 VND'
                        ].map((priceRange, index) => (
                            <label key={index} className="py-2 flex items-center hover:text-blue-600 cursor-pointer transition-colors">
                                <input type="checkbox" className="mr-2" /> {priceRange}
                            </label>
                        ))}
                    </div>
                </div>
                <div className="w-[74%]">
                    <div className="flex gap-[1rem] text-[1.5rem] items-center justify-center mb-4">
                        <div 
                            className={`border border-gray-300 rounded-lg p-[.5rem] cursor-pointer transition-all ${grid ? 'bg-blue-500 text-white' : 'hover:bg-blue-200'}`}
                            onClick={() => setGrid(true)}
                        >
                            <BsFillGrid3X2GapFill />
                        </div>
                        <div 
                            className={`border border-gray-300 rounded-lg p-[.5rem] cursor-pointer transition-all ${!grid ? 'bg-blue-500 text-white' : 'hover:bg-blue-200'}`}
                            onClick={() => setGrid(false)}
                        >
                            <FiList />
                        </div>
                    </div>
                    {grid ? <ProductGrid /> : <ProductList />}
                </div>
            </div>
        </div>
    );
}

export default ListProduct;
