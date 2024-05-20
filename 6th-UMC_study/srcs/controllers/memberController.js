import { succesStatus } from "../../config/successStatus.js"
import { join } from '../services/memberService.js'
import { response } from "../../config/response.js"

export const signin = async (req, res) =>{
    //값 잘 들어 왔는지
    
    
    res.send(response(succesStatus.JOIN_SUCCESS, await join(req.body)))
    
}
//await 부분만 비동기