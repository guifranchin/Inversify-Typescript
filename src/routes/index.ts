import util from './utilRouter'
import express, { Router } from 'express'

const router: Router = express.Router()

router.use('/utils', util)

export default router
