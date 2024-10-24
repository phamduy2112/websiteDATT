import success from '../../../public/images/cmpted_logo.png'
function OrderSuccess() {
  return (
    <div>
        <div>
            <div>
            <img className='w-[880px]' src={success} alt="" />

            </div>
            <p>Thank you for ordering in our store. You will receive a confirmation email shortly.</p>
            <button>Continue Shopping</button>
            <div>
                <h4>Call Us for Quick Order                </h4>
                <p>01 234 567 890</p>
            </div>
        </div>
        
    </div>
  )
}

export default OrderSuccess