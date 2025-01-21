import User from '../models/user.js'


export const createUser = async (req, res) => {
    try {
      const { name, socialMediaHandle } = req.body;
      const images = req.files.map((file) => file.path);    
  
      const user = new User({ name, socialMediaHandle, images });
      await user.save();
  
      return res.status(201).json({ message: 'User saved successfully',user });
    } catch (error) {
     return  res.status(500).json({ error: 'error submitting data.' });
    }
};





  