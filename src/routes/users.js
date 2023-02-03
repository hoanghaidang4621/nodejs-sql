import { Router } from 'express';
var router = Router();
import  {get}  from '../controllers/userController.js';
/* GET users listing. */
router.get('/', get);

export default router;
