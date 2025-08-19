import express from 'express'
import { protectRoute } from '../mididdleware/auth.middleware.js';
import {getMessages, getUsersForSidebar, sendMessage} from '../controllers/message.controller.js'

const router = express.Router();

// the protectRoute is for: not everyone can call the function only if yua authenticated
router.get('/users', protectRoute, getUsersForSidebar)
router.get('/:id', protectRoute, getMessages)

router.post('/send/:id', protectRoute, sendMessage)

export default router;


// import express from 'express';
// import { protectRoute } from '../mididdleware/auth.middleware.js'; // fix folder name if needed
// import { getMessages, getUsersForSidebar, sendMessage } from '../controllers/message.controller.js';

// const router = express.Router();

// // protectRoute ensures only authenticated users can access these routes
// router.get('/users', protectRoute, getUsersForSidebar);
// router.get('/:id', protectRoute, getMessages);
// router.post('/send/:id', protectRoute, sendMessage);

// export default router;
   