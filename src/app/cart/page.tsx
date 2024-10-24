import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/cart.css";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
  return (
    <div className="2xl:w-[80%] mx-auto py-4 sxm:w-[95%] md:-[90%]">
      <h1 className="text-[1.4rem] font-semibold py-3">Your cart items</h1>
      <div className=" xl:flex justify-between">
        {/* Cart Items Table */}
        <div className="2xl:w-[70%] xl:w-[63%]">
          {/* laptop */}
          <div className="sxm:hidden md:inline">
      <table className="w-[100%] table-cart">
            <thead className="bg-[#266bf9] text-white h-[3rem] text-center">
              <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th >Unit Price</th>
                <th >Qty</th>
                <th>Subtotal</th>
                <th >Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="product-thumbnail sxm:w-[75px] sxm2:w-[100px] md:w-[150px]">
                  <a href="#">
                    <img
                      className="p-[1rem] max-w-[100%] ml-[15px]"
                      src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/product-image/1.webp"
                      alt="Product"
                    />
                  </a>
                </td>
                <td className="product-name sxm:text-[.8rem] sxm2:-[1rem]">
                  <a href="#">Modern sxmart Phone</a>
                </td>
                <td className="product-price-cart  ">
                  <span className="amount">$60.00</span>
                </td>
                <td className="product-quantity md:flex justify-center items-center h-[150px]">
                  <div className="text-[1rem] border border-black flex items-center w-[5.5rem] justify-between">
                    <div className="border px-1 border-r-[black] py-1 cursor-pointer">-</div>
                    <input
                      type="text"
                      value={1}
                      className="text-center focus:outline-none bg-transparent w-[100%] px-[.8rem] text-[.9rem]"
                      min={1}
                      max={100}
                    />
                    <div className="border px-1 border-l-[black] py-1 cursor-pointer">+</div>
                  </div>
                </td>
                <td className="product-subtotal text-red-500">$70.00</td>
                <td className="product-remove cursor-pointer sxm:hidden md:block">
                  <FontAwesomeIcon icon={faClose} className="w-4 h-4 m-auto" />
                </td>
              </tr>
            </tbody>
          </table>
          </div>
    
       {/* Mobile */}
       <table className="w-[100%] table-cart md:hidden">
            <thead className="bg-[#266bf9] text-white h-[3rem] text-center">
              <tr>
                <th>Image</th>
                <th>Product Name</th>
        
                <th>Subtotal</th>
             
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="product-thumbnail sxm:w-[75px] sxm2:w-[100px] md:w-[150px]">
                  <a href="#">
                    <img
                      className="p-[1rem] max-w-[100%] ml-[15px]"
                      src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/product-image/1.webp"
                      alt="Product"
                    />
                  </a>
                </td>
                <td className="product-name sxm:text-[.8rem] sxm2:-[1rem]">
                  <a href="#">Modern sxmart Phone</a>
                </td>
             
           
                <td className="product-subtotal text-red-500">$70.00</td>
               
              </tr>
            </tbody>
          </table>
          {/* Cart Buttons */}
          <div className="flex justify-between py-[1rem]">
            <button className="py-[.4rem] sxm:px-[1rem] sxm:text-[.8rem]  sxm2:px-[1.3rem] bg-white border border-[#266bf9] text-[#266bf9] text-[1rem] flex justify-center items-center transition-all hover:bg-[#266bf9] hover:text-white">
              Continue Shopping
            </button>
            <div className="flex gap-[1rem]">
              <button className="py-[.4rem] sxm:hidden md:block px-[1.3rem] border border-[#266bf9] text-[#266bf9] sxm2:text-[1rem] flex justify-center items-center transition-all hover:bg-[#266bf9] hover:text-white">
                Update Shopping Cart
              </button>
              <button className="py-[.4rem] sxm:px-[1rem] sxm:text-[.8rem]  sxm2:px-[1.3rem] bg-[#266bf9] text-white sxm2:text-[1rem] flex justify-center items-center transition-all hover:bg-[#0055ff]">
                Clear Shopping Cart
              </button>
            </div>
          </div>
        </div>

        {/* Cart Total Section */}
        <div className="xl:w-[35%] 2xl:w-[28%]">
          <div className="cart-tax border border-[#266bf9] shadow-sxm bg-white px-[2rem] py-[2rem] text-black">
            <h4 className="font-semibold text-[1rem]">Cart Total</h4>
            <h5 className="flex py-[1rem] justify-between">
              Total products <span className="font-semibold">$260.00</span>
            </h5>
            <div className="total-shipping">
              <h5>Total shipping</h5>
              <ul>
                <li className="flex justify-between">
                  <div>
                    <input type="checkbox" /> Standard
                  </div>
                  <span className="text-gray-500">$20.00</span>
                </li>
                <li className="flex justify-between">
                  <div>
                    <input type="checkbox" /> Express
                  </div>
                  <span className="text-gray-500">$30.00</span>
                </li>
              </ul>
                 {/* Coupon Section */}
          <div className="cart-tax  bg-white pt-[1rem] text-black">
            <div className="discount-code-wrapper">
              <h4 className="font-semibold mb-[.5rem] text-[1rem]">Use Coupon Code</h4>
      
              <form className="flex mb-[.5rem] justify-between">
  <input
    type="text"
    className="border w-[100%] border-[#266bf9] focus:outline-blue-800 py-[.5rem] px-3 h-[2.5rem]"  // Adjust the padding and height
    placeholder="Coupon code"
  />
  <button
    className="py-[.5rem] px-3 bg-[#266bf9] h-[2.5rem] ml-[.5rem] text-[white] hover:bg-[#266bf9] hover:text-white"
    type="submit"
  >
    Apply
  </button>
</form>
<div>
<h5 className="flex pb-[1rem] justify-between">
              Coupon <span className="font-semibold">0</span>
            </h5>
</div>
            </div>
          </div>
            </div>
            <h4 className="grand-total-title flex justify-between text-[1.1rem] pb-[2rem] font-semibold text-[#266bf9]">
              Grand Total <span>$260.00</span>
            </h4>
            <a href="checkout.html" className="block text-center bg-[#266bf9] text-white py-2 text-[.9rem]">
              Proceed to Checkout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
