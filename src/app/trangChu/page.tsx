import Banner from "./componnent/Banner"
import FeatureSection from "./componnent/FeatureSection"
import ProductCard from "./componnent/ProductCart"
import BlogCard from "./componnent/Blog"
import "./css/Banner.css"
import FeaturedProduct from "./componnent/FeaturedProduct"
import BannerCard from "./componnent/BannerCard"
import BannerCard2 from "./componnent/BannerCard2"
import FeaturedOffers from "./componnent/ProductFeature"
function TrangChu() {
  const products = [
    {
      timer: "End: 0 : 00 : 00",
      oldPrice: "$48.50",
      newPrice: "$38.50",
      name: "Ladies Smart Watch",
      predecessor: "None",
      supportType: "Neutral",
      cushioning: "High Energizing",
      totalWeight: "300gm",
    },
    {
      timer: "End: 1 : 20 : 15",
      oldPrice: "$60.00",
      newPrice: "$50.00",
      name: "Men's Fitness Watch",
      predecessor: "V1",
      supportType: "Enhanced",
      cushioning: "Medium",
      totalWeight: "280gm",
    },
  ];

  return (

    <div>
        <Banner></Banner>
        <div className="2xl:w-[80%] mx-auto sxm:w-[95%] md:-[90%]">
        <div className="flex gap-4 justify-center py-[2rem]">
        <div className="sxm:w-[90%] md:w-[40%] h-[255px]">
        <BannerCard title="Speaker" price="69.00" buttonColor="bg-black" />

      </div>
      <div className="sxm:w-[90%] md:w-[40%] h-[255px]">
      <BannerCard title="Speaker" price="69.00" buttonColor="bg-black" />

      </div>
    </div>
          
          
        </div>
  
        <div className="2xl:w-[80%] m-auto py-4 sxm:w-[95%] md:-[90%]">
            <h5 className="pt-4 pb-1 text-black font-semibold text-center text-[1.6rem]">New Products</h5>
            <p className="text-center text-[1rem] text-gray-500 pb-3">There are many variations of passages of lorem ipsum availble</p>
         <ProductCard/>
        </div>

        <div className="2xl:w-[80%] m-auto py-4 sxm:w-[95%] md:w-[90%]">
        <div className="flex gap-4 justify-center mt-8 flex-wrap">
        <div className="sxm:w-[90%] md:w-[40%] h-[500px]">
        <BannerCard2
        title="Smart Watch For Your Hand"
        price="69.00"
        buttonColor="bg-blue-500"
      />
          </div>
          <div className="sxm:w-[90%] md:w-[40%] h-[500px]">
          <BannerCard2
        title="Smart Watch For Your Hand"
        price="69.00"
        buttonColor="bg-blue-500"
      />
          </div>
    
    
    </div>
    <FeaturedOffers products={products} /> 

       </div>
        <div className="bg-gray-300 w-full h-[456px] flex flex-col justify-center items-center text-center">
      <h1 className="text-white text-3xl font-light">Smart Fashion</h1>
      <h2 className="text-white text-5xl font-bold mt-2">With Smart Devices</h2>
      <div className="text-gray-700 text-6xl font-bold mt-4">1920x456</div>
      <button className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded hover:bg-blue-600">
        Shop All Devices
      </button>
    </div>
        <BlogCard/>
        <FeatureSection/>
           </div>


)
}

export default TrangChu