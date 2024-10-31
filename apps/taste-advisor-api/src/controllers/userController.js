import { createNewUser, loginUser } from '../services/userService.js';

export const register = async (req, res) => {
  try {
    const result = await createNewUser(req.body);
    return res.status(200).json({ status: 'success', data: result });
  } catch (e) {
    return res.status(500).json({ status: 'error', data: e.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await loginUser(email, password);
    return res.status(200).json({ status: 'success', data: result });
  } catch (e) {
    return res.status(500).json({ status: 'error', data: e.message });
  }
};

export const auth = async (req, res) => {
  try {
    res.status(200).json({ status: 'success', data: req.user });
  } catch (e) {
    return res.status(500).json({ status: 'error', data: e.message });
  }
};
