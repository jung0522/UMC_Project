import { test } from '../controllers/testControllers.js';
import express from 'express';
import asyncHandler from 'express-async-handler';

export const testRouter = express.Router();

testRouter.get('/test',asyncHandler(test));

//testRouter.get('/exception', asyncHandler(exceptionTest));