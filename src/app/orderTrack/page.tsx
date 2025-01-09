import Link from 'next/link'

function OrderTrack() {
  return (
    <>
      {/* Breadcrumb Area */}
      <div className="breadcrumb-area relative bg-gray-300 min-h-[35vh]" style={{ borderRadius: '20px' }}>
        <div className="text-left container m-auto">
          <div className='absolute top-[30%] left-1/2 transform -translate-x-1/2 z-[10] text-center'>
            <h2 className='text-[3rem] font-semibold'>Order Tracking</h2>
            <div className="flex gap-6 justify-center items-center max-w-full text-[1rem] leading-none uppercase whitespace-nowrap">
              <Link href="/" className="text-black hover:text-blue-600">Home</Link>
              <div className="text-blue-600"> // OrderTrack</div>
            </div>
          </div>
          <div className="absolute top-[30%] left-[40%] z-0 text-gray-400 text-8xl font-thin ">
            1920x406
          </div>
        </div>
      </div>

      {/* Existing Order Track Code */}
      <div className="w-[600px] m-auto py-[2rem] shadow-lg bg-white my-8">
        <div className="p-[2rem]">
          <p className="text-[.8rem]" style={{ lineHeight: "1.2rem" }}>
            To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.
          </p>
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
                  className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-transparent"
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
                  className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-transparent"
                />
              </div>
              <button className="block text-center bg-black hover:bg-[#266bf9] text-white py-3 px-8 rounded-full text-[1.1rem]">
                TRACK
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderTrack