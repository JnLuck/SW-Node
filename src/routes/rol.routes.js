import { Router } from 'express';

const router = Router();
import * as rolCtrl from '../controllers/rol.controller'

router.get('/', rolCtrl.getRols);
router.get('/:id', rolCtrl.getRolId);
router.post('/', rolCtrl.crearRol);
router.put('/:id', rolCtrl.updateRol);
router.delete('/:id', rolCtrl.deleteRol);

export default router;
