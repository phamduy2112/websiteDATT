import React, { useState } from 'react';

const AddressManager = () => {
//   const [addresses, setAddresses] = useState([
//     {
//       id: 1,
//       name: 'Home',
//       address1: '123 Main St',
//       address2: 'Apt 456',
//       city: 'Anytown',
//       state: 'CA',
//       zip: '12345',
//       country: 'USA',
//     },
//     {
//       id: 2,
//       name: 'Work',
//       address1: '456 Oak Rd',
//       address2: 'Suite 789',
//       city: 'Othertown',
//       state: 'NY',
//       zip: '67890',
//       country: 'USA',
//     },
//   ]);

//   const handleAddAddress = () => {
//     const newAddress = {
//       id: addresses.length + 1,
//       name: 'New Address',
//       address1: '',
//       address2: '',
//       city: '',
//       state: '',
//       zip: '',
//       country: '',
//     };
//     setAddresses([...addresses, newAddress]);
//   };

//   const handleAddressChange = (index, field, value) => {
//     const updatedAddresses = [...addresses];
//     updatedAddresses[index][field] = value;
//     setAddresses(updatedAddresses);
//   };

//   const handleDeleteAddress = (id) => {
//     setAddresses(addresses.filter((address) => address.id !== id));
//   };

//   return (
//     <div>
//       <h2>Address Manager</h2>
//       <ul>
//         {addresses.map((address, index) => (
//           <li key={address.id}>
//             <h3>{address.name}</h3>
//             <p>{address.address1}</p>
//             <p>{address.address2}</p>
//             <p>
//               {address.city}, {address.state} {address.zip}
//             </p>
//             <p>{address.country}</p>
//             <button onClick={() => handleAddressChange(index, 'name', 'New Address')}>
//               Edit
//             </button>
//             <button onClick={() => handleDeleteAddress(address.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={handleAddAddress}>Add Address</button>
//     </div>
//   );
};

export default AddressManager;