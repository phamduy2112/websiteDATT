// components/PageLinks.tsx
const PageLinks = () => {
    return (
      <div className="container mx-auto p-8 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
       
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Inner Pages</h2>
            <ul className="space-y-2 ">
              <li>404 Page</li>
              <li>Order Tracking</li>
              <li>Faq Page</li>
              <li>Coming Soon Page</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold">Other Shop Pages</h2>
            <ul className="space-y-2">
              <li>Cart Page</li>
              <li>Checkout Page</li>
              <li>Compare Page</li>
              <li>Wishlist Page</li>
            </ul>
          </div>
  
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Related Shop Pages</h2>
            <ul className="space-y-2">
              <li>Account Page</li>
              <li>Login & Register Page</li>
              <li>Empty Cart Page</li>
              <li>Thank You Page</li>
            </ul>
           
            <div className="w-full h-48 bg-gray-300 text-center flex items-center justify-center">
              <span className="text-gray-500">244x182</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default PageLinks;