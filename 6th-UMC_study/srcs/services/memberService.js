import { errorStatus } from "../../config/errorStatus.js";
import { BaseError } from "../../config/error.js";
import { signinResponseDTO } from "../dtos/memberResponseDTO.js";
import { addUser, getUser } from "../models/memberDAO.js";


export const join = async (body) => {
    
    //const birth = new Date(body.birthYear, body.birthMonth, body.birthDay);
    
    
    const joinUserData = await addUser({  //addUser DB 저장하는 함수
        'email': body.email,
        'name': body.name,
        'gender': body.gender,
        'birth': body.birth,
        'addr': body.addr,
        'specAddr': body.specAddr,
        'phone': body.phone
    });
    
    if(joinUserData == -1){
        throw new BaseError(errorStatus.EMAIL_ALREADY_EXIST);
    }else{
        return signinResponseDTO(await getUser(joinUserData));
    }
}