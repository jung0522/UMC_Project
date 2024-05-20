//testService.js
import { BaseError } from "../../config/error.js";
import { errorStatus } from "../../config/errorStatus.js";
import { testResponseDTO } from "../dtos/testResponseDTO.js";
import { flagResponseDTO } from "../dtos/testResponseDTO.js";

export const getTest = () => {
    throw new BaseError(errorStatus.PARAMETER_IS_WRONG);

    return testResponseDTO("test Success");
}

export const checkFlag = (flag) => {
    if(flag == 1){
        throw new BaseError(errorStatus.INTERNAL_SERVER_ERROR);
    } 
    else{
        return flagResponseDTO(flag);
    }
}