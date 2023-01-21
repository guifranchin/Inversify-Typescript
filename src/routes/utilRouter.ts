import express, { Router } from 'express'
import controller from '../controllers/UtilsController'

const router: Router = express.Router()

router.get('/cep/', controller.getCep)

export default router