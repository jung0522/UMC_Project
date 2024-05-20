//testController.js
import { succesStatus } from '../../config/successStatus.js';
import { getTest } from '../services/testService.js';
import { response } from '../../config/response.js';
import { BaseError } from '../../config/error.js';
import { errorStatus } from '../../config/errorStatus.js'

export const test = (req, res, next) => {
    throw new BaseError(errorStatus.PARAMETER_IS_WRONG);
    res.send(response(succesStatus.SUCCESS, getTest()));
};
export const exceptionTest = (req,res,next) => {
    res.send(response(successStatus.TEST_SUCCESS, checkFlag(req.params.flag)));
}