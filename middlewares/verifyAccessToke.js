import { jwtDecrypt } from "jose";
import { genaretSecretKey } from "../config/joseSecret.js";

export const verifyAccessToken = async (req, res, next) => {
  try {
    const { accessToken } = req.cookies;
    const { uid } = req.query;

    if (!accessToken || !uid) {
      res.send("Unauthorized user", 401);
      return;
    }

    const secret = await genaretSecretKey();
    const { payload } = await jwtDecrypt(accessToken, secret);

    if (payload?.uid !== uid) {
      res.send("Unauthorized user", 401);
      return;
    }
    return next();
  } catch (err) {
    res.send("Unauthorized user", 401);
  }
};
