import express from 'express'
const router = express.Router()
import {
    getRentings,
    getRentingById,createRenting,
    deleteRenting,updateRenting,
    createRentingReview,
    getTopRentings,addLike,addReply
 
} from '../controllers/rentingController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getRentings).post(protect, admin, createRenting)
router.route('/:id/reviews').post(protect, createRentingReview)
router.get('/top', getTopRentings)
router
  .route('/:id')
  .get(getRentingById)
  .delete(protect, admin, deleteRenting)
  .put(protect, admin, updateRenting)

  
router.route('/:id/reply')
.post(protect, addReply);

router.route('/:id/reply/:rid/like')
.post(protect, addLike);


export default router
