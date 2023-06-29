// adminController.js

const Admin = require('../models/Admin-info');

const createAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingAdmin = await Admin.findOne();
    if (!existingAdmin) {
      const admin = new Admin({
        email: email,
        password: password,
      });
      await admin.save();
      console.log('Admin created successfully');
      res.status(200).json({ message: 'Admin created successfully' });
    } else {
      console.log('Admin already exists');
      res.status(400).json({ message: 'Admin already exists' });
    }
  } catch (error) {
    console.error('Error creating admin:', error);
    res.status(500).json({ error: 'Error creating admin' });
  }
};

module.exports = {
  createAdmin,
};
