import User from "../models/user.js";


export const getallUsers= async (req, res) => {
  try {
    const users = await User.find();
    const baseUrl = `${req.protocol}://${req.get('host')}`;

    const usersWithImages = users.map((user) => ({
      ...user._doc,
      images: user.images.map((image) => `${baseUrl}/${image.replace(/\\/g, '/').split('/').map(encodeURIComponent).join('/')}`),
    }));

    res.json(usersWithImages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users.' });
  }
};
