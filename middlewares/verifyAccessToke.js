export const verifyAccessToken = async (req, res, next) => {
  try {
    const { accessToken } = req.cookies;
    console.log(accessToken);
  } catch (err) {}
};
