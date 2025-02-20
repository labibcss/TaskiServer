import { EncryptJWT } from "jose";
import { genaretSecretKey } from "../../config/joseSecret.js";

export const createAccesToken = async (req, res) => {
  const user = req.body;

  if (!user) {
    return res.send({ error: "User not found" }, 401);
  }
  const secret = await genaretSecretKey();
  const payload = {
    email: user?.email,
    uid: user?.uid,
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
  };
  const accessToken = await new EncryptJWT(payload)
    .setProtectedHeader({ alg: "dir", enc: "A256GCM" })
    .setIssuedAt()
    .setExpirationTime("10m")
    .encrypt(secret);

  return res.cookie("accessToken", accessToken).send({ succes: true });
};
