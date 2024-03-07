// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import nodemailer from "nodemailer";
// import Input from "@/components/Input";
// import Link from "next/link";
// import Dialog from "@/components/Dialog";

// const ForgotPasswordModal = ({ open, onClose }) => {
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [enteredOtp, setEnteredOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const router = useRouter();

//   const sendOtp = async () => {
//     const transporter = nodemailer.createTransport({
//       service: "Gmail",
//       auth: {
//         user: "petrack.help@gmail.com",
//         pass: "password@123",
//       },
//     });

//     const generatedOtp = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit OTP
//     setOtp(generatedOtp);

//     try {
//       await transporter.sendMail({
//         from: "petrack.help@gmail.com",
//         to: email,
//         subject: "Password Reset OTP",
//         text: `Your OTP for password reset is: ${generatedOtp}. Now, you may visit the site and reset your password after entering this OTP.`,
//       });
//       console.log("OTP sent successfully!");
//       setOtpSent(true);
//     } catch (error) {
//       console.error("Error sending OTP:", error);
//     }
//   };

//   const verifyOtp = () => {
//     if (otp === enteredOtp) {
//       console.log("OTP matched!");
//       // Allow the user to reset their password
//       // Redirect to the reset password page or perform the password reset action
//       router.push("/reset-password");
//     } else {
//       console.log("OTP mismatch!");
//       // Display error message or handle OTP mismatch case
//     }
//   };

//   return (
//     <Dialog open={open} onClose={onClose}>
//       {!otpSent ? (
//         <>
//           <Input
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <button onClick={sendOtp}>Send OTP</button>
//         </>
//       ) : (
//         <>
//           <Input
//             placeholder="Enter OTP"
//             value={enteredOtp}
//             onChange={(e) => setEnteredOtp(e.target.value)}
//           />
//           <button onClick={verifyOtp}>Verify OTP</button>
//           {otpMismatch && <p>Incorrect OTP, please try again.</p>}
//         </>
//       )}
//       <Link href="/register">Create an account</Link>
//     </Dialog>
//   );
// };

// export default ForgotPasswordModal;
