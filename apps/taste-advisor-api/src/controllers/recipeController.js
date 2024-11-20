import {
  createNewRecipe,
  getAllRecipes,
  getRecipeById,
} from '../services/recipeService.js';

export const getRecipes = async (req, res) => {
  try {
    const result = await getAllRecipes();
    res.status(200).json({ status: 'success', data: result });
  } catch (e) {
    return res.status(500).json({ status: 'error', data: e.message });
  }
};

export const getSingleRecipe = async (req, res) => {
  try {
    const {
      query: { id },
    } = req;
    const result = await getRecipeById(id);
    res.status(200).json({ status: 'success', data: result });
  } catch (e) {
    return res.status(500).json({ status: 'error', data: e.message });
  }
};

export const createRecipe = async (req, res) => {
  try {
    const result = await createNewRecipe(req.body, req.user);
    res.status(200).json({ status: 'success', data: result });
  } catch (e) {
    if (e.message === 'Unauthorized') {
      return res.status(403).json({ status: 'error', data: e.message });
    }
    return res.status(500).json({ status: 'error', data: e.message });
  }
};
