import Banner from "./componnent/Banner"
import FeatureSection from "./componnent/FeatureSection"
import ProductCard from "./componnent/ProductCart"
import BlogCard from "./componnent/Blog"
import "./css/Banner.css"
import FeaturedProduct from "./componnent/FeaturedProduct"
function TrangChu() {
  return (

    <div>
        <Banner></Banner>
        <div className="w-[80%] m-auto">
            <div className="flex justify-between">
            <div className="w-[49%] h-[15rem]">
                <img
                className="w-[100%] h-[100%]"
                src="https://cdn2.viettelstore.vn/images/Advertises/590x170-(1)_40038441101102024.png" alt="" />
            </div>
            <div className="w-[49%] h-[15rem]">
                <img 
                className="w-[100%] h-[100%]"

                src="https://cdn2.viettelstore.vn/images/Advertises/590x170-(1)_40038441101102024.png" alt="" />
            </div>
            </div>
          
        </div>
        <FeaturedProduct/>
        <div className="w-[80%] m-auto">
            <div className="flex justify-between mt-[1.2rem]">
            <div className="w-[33%] h-[15rem]">
                <img
                className="w-[100%] h-[100%]"
                src="https://cdn2.viettelstore.vn/images/Advertises/590x170-(1)_40038441101102024.png" alt="" />
            </div>
            <div className="w-[33%] h-[15rem]">
                <img 
                className="w-[100%] h-[100%]"

                src="https://cdn2.viettelstore.vn/images/Advertises/590x170-(1)_40038441101102024.png" alt="" />
            </div>
            <div className="w-[33%] h-[15rem]">
                <img 
                className="w-[100%] h-[100%]"

                src="https://cdn2.viettelstore.vn/images/Advertises/590x170-(1)_40038441101102024.png" alt="" />
            </div>
            </div>
          
        </div>
        <div className="w-[80%] m-auto">
            <h5 className="pt-4 pb-3 text-blue-500 text-center text-[1.2rem]">Những sản phẩm dành cho bạn</h5>
         <ProductCard/>
        </div>
       <div className="w-[100%] my-4">
        <img 
        className="w-[100%]"
        src="https://cdn.mobilecity.vn/mobilecity-vn/images/2023/10/w800/29-cu-cap-sac-xiaomi-tong-hop.jpg.webp" alt="" />
       </div>
 
        <BlogCard/>
        <FeatureSection/>
    </div>

)
}

export default TrangChu