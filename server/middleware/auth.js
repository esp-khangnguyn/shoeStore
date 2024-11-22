import jwt from "jsonwebtoken";
import fs from "fs";

const auth = async (req, res, next) => {
  try {
    if (!req.cookies.token) {
      return res.status(401).json({ message: "Session expired, please login again" });
    }
    const cookie = req.cookies.token;
    let decodedData;
    const publicKey = fs.readFileSync('./certs/public.pem', 'utf-8');
    decodedData = jwt.verify(cookie, publicKey, { algorithms: ['RS256'] });
    console.log("🚀 ~ auth ~ decodedData:", decodedData)
    if (decodedData) {
      req.userId = decodedData?._id;
      next();
    } else {
      return res.clearCookie("token");
    }
  } catch (error) {
    res.clearCookie("token");
    res.status(440).json({ message: "Sorry, you are not authorized" });
  }
};

const checkAdmin = async (req, res, next) => {
  try {
    if (!req.cookies.token) {
      return res.status(401).json({ message: "Session expired, please login again" });
    }
    const cookie = req.cookies.token;
    let decodedData;
    const publicKey = fs.readFileSync('./certs/public.pem', 'utf-8');
    decodedData = jwt.verify(cookie, publicKey, { algorithms: ['RS256'] });
    if (decodedData?.role === true) {
      req.userId = decodedData?._id;
      next();
    } else {
      res.status(440).json({ message: "Unauthorized Admin" });
    }
  } catch (error) {
    res.status(440).json({ message: error.message });
  }
};
export { auth, checkAdmin };
