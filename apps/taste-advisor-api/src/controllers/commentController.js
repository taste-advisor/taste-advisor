import { createNewComment } from '../services/commentService.js';

export const createComment = async (req, res) => {
  try {
    const {
      query: { recipeId },
    } = req;
    const result = await createNewComment(req.user, recipeId, req.body.text);
    res.status(200).json({ status: 'success', data: result });
  } catch (e) {
    if (e.message === 'Unauthorized') {
      return res.status(403).json({ status: 'error', data: e.message });
    }
    return res.status(500).json({ status: 'error', data: e.message });
  }
};
