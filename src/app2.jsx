// import { useRef, useState } from "react";

// function PasswordCopy() {
//   const passwordRef = useRef(null);
//   const [showPopup, setShowPopup] = useState(false);

//   const copyPassword = () => {
//     const password = passwordRef.current.value;

//     navigator.clipboard.writeText(password).then(() => {
//       setShowPopup(true);

//       // 2 سیکنڈ بعد popup خود ختم
//       setTimeout(() => {
//         setShowPopup(false);
//       }, 2000);
//     });
//   };

//   return (
//     <div style={{ padding: "40px", position: "relative" }}>
//       <input
//         type="text"
//         ref={passwordRef}
//         value="MySecret@123"
//         readOnly
//         style={{ padding: "10px", width: "200px" }}
//       />

//       <button
//         onClick={copyPassword}
//         style={{ marginLeft: "10px", padding: "10px" }}
//       >
//         Copy
//       </button>

//       {/* Popup */}
//       {showPopup && (
//         <div
//           style={{
//             position: "absolute",
//             top: "-10px",
//             right: "0",
//             background: "#000",
//             color: "#fff",
//             padding: "8px 14px",
//             borderRadius: "6px",
//             fontSize: "14px",
//           }}
//         >
//           ✅ Copied!
//         </div>
//       )}
//     </div>
//   );
// }

// export default PasswordCopy;
