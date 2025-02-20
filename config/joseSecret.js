import { createSecretKey } from "crypto";

export const genaretSecretKey = async () => {
  const key = await createSecretKey(
    Buffer.from(process.env.JOSE_SECRET, "utf-8")
  );
  return key;
};
