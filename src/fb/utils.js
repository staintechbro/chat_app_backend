// import jwt from "jsonwebtoken";

// export const generateToken = (userId, res) => {
//   const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
//     expiresIn: "7d",
//   });

//   res.cookie("jwt", token, {
//     maxAge: 7 * 24 * 60 * 60 * 1000, // MS
//     httpOnly: true, // prevent XSS attacks cross-site scripting attacks
//     sameSite: "strict", // CSRF attacks cross-site request forgery attacks
//     secure: process.env.NODE_ENV !== "development",
//   });

//   return token;
// };

// import jwt from "jsonwebtoken";

// /**
//  * Generate a JWT token for a user and set it as an HTTP-only cookie on the response.
//  * @param {string} userId - The ID of the user to encode in the JWT.
//  * @param {object} res - Express response object to set the cookie.
//  * @returns {string} - The generated JWT token.
//  */
// export const generateToken = (userId, res) => {
//   const token = jwt.sign(
//     { userId }, // Payload
//     process.env.JWT_SECRET, // Secret key from env variables
//     { expiresIn: "7d" } // Token expiration duration
//   );

//   // Set token as an HTTP-only cookie
//   res.cookie("jwt", token, {
//     maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
//     httpOnly: true, // Helps prevent XSS attacks
//     sameSite: "strict", // Helps prevent CSRF attacks
//     secure: process.env.NODE_ENV !== "development", // Send cookie over HTTPS only in production
//   });

//   return token;
// };

import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign(
    { userId },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });

  return token;
};