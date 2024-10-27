
function OrderTrack() {
  return (
    <div className="w-[600px] m-auto py-[2rem] shadow-lg bg-white">
        <div className="p-[2rem]">
            <p className="text-[.8rem]" style={{lineHeight:"1.2rem"}}>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
            <div>
                <form action="" className="mt-[2rem]">
                <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="order-id">
          Order ID
        </label>
        <input
          id="order-id"
          type="text"
          placeholder="Found in your order confirmation email."
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="billing-email">
          Billing email
        </label>
        <input
          id="billing-email"
          type="email"
          placeholder="Email you used during checkout."
          className="w-full  px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <button className="block text-center bg-[#266bf9] text-white py-3 px-[2rem] rounded-[2rem] text-[.9rem]">
              Track
            </button>
      
                </form>
            </div>
        </div>
    </div>
  )
}

export default OrderTrack
