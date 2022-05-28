import { Router } from 'express';

const router = Router();
import * as personaCtrl from '../controllers/persona.controller'

router.get('/', personaCtrl.getPersonas);
router.get('/:id', personaCtrl.getPersonaId);
router.post('/', personaCtrl.crearPersona);
router.put('/:id', personaCtrl.updatePersona);
router.delete('/:id', personaCtrl.deletePersona);

export default router;
