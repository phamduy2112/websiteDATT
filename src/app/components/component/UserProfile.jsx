import React, { useState } from 'react';

const AccountSettings = () => {
//   const [currentPassword, setCurrentPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handlePasswordChange = (e) => {
//     const { name, value } = e.target;
//     switch (name) {
//       case 'currentPassword':
//         setCurrentPassword(value);
//         break;
//       case 'newPassword':
//         setNewPassword(value);
//         break;
//       case 'confirmPassword':
//         setConfirmPassword(value);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Validate and update password
//     console.log('Updating password:', {
//       currentPassword,
//       newPassword,
//       confirmPassword,
//     });
//     // Reset form fields
//     setCurrentPassword('');
//     setNewPassword('');
//     setConfirmPassword('');
//   };

//   return (
//     <div>
//       <h2>Account Settings</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="currentPassword">Current Password:</label>
//           <input
//             type="password"
//             id="currentPassword"
//             name="currentPassword"
//             value={currentPassword}
//             onChange={handlePasswordChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="newPassword">New Password:</label>
//           <input
//             type="password"
//             id="newPassword"
//             name="newPassword"
//             value={newPassword}
//             onChange={handlePasswordChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="confirmPassword">Confirm Password:</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             value={confirmPassword}
//             onChange={handlePasswordChange}
//           />
//         </div>
//         <button type="submit">Update Password</button>
//       </form>
//     </div>
//   );
};

export default AccountSettings;