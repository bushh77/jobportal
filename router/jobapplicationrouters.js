import express from 'express'

const router=express.Router();
import {applyjob, deleteapplication, getapplicationofparticularjob, getapplicationsoflogineduser, updateapplication} from '../controller/jobapplicationcontroller.js';


router.post('/apply/:jobid/:userid',applyjob);
router.get('/applications/:userid',getapplicationsoflogineduser);
router.put('/updateapplication/:id',updateapplication);
router.delete('/deleteapplication/:id',deleteapplication);

export default router