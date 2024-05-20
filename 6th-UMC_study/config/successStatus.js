import { StatusCodes } from "http-status-codes";

export const succesStatus = {
    // success
    SUCCESS: {status: StatusCodes.OK, "isSuccess": true, "code": 2000, "message": "success!"},
    JOIN_SUCCESS: {status: StatusCodes.OK, "isSuccess" : true, "code": 2001, "mmessage" : "회원가입 성공입니다."}    

}