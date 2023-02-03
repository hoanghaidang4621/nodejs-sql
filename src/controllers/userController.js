import { getAllUser } from '../services/userService.js';

async function get(req, res, next) {
  try {
      res.json(await getAllUser());
  } catch (err) {
      console.error(`Error while getting programming languages`, err.message);
      next(err);
  }
}


export {
    get
  };
  