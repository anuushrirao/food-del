import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Get token from 'Bearer <token>' format
    if (!token) {
        return res.status(401).json({ success: false, message: "Not Authorized. Please log in again." });
    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id; // Add the user ID from the token to the request
        next(); // Continue to the next middleware or route handler
    } catch (error) {
        console.log(error);
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ success: false, message: "Session expired. Please log in again." });
        }
        res.status(401).json({ success: false, message: "Authentication failed!" });
    }
};

export default authMiddleware;
