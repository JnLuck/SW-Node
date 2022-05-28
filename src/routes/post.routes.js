import { Router } from 'express';

const router = Router();
import * as postCtrl from '../controllers/post.controller'

router.get('/', postCtrl.getPosts);
router.get('/:id', postCtrl.getPostId);
router.post('/', postCtrl.crearPost);
router.put('/:id', postCtrl.updatePost);
router.delete('/:id', postCtrl.deletePost);

export default router;
