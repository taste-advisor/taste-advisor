import {
  createNewUser,
  getUserData,
  loginUser,
  updateUser,
} from '../services/userService.js';

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
    const result = await getUserData(req.user);
    res.status(200).json({ status: 'success', data: result });
  } catch (e) {
    return res.status(500).json({ status: 'error', data: e.message });
  }
};

export const update = async (req, res) => {
  try {
    const user = await getUserData(req.user);
    const result = await updateUser(user, req.body);
    res.status(200).json({ status: 'success', data: result });
  } catch (e) {
    if (e.message === 'Unauthorized') {
      return res.status(403).json({ status: 'error', data: e.message });
    }
    return res.status(500).json({ status: 'error', data: e.message });
  }
};
