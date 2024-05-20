import { pool } from "../../config/db.js";
import { BaseError } from "../../config/error.js";
import { errorStatus } from "../../config/errorStatus.js";
import { confirmEmail, insertUserSql, getUserID } from "./memberSQL.js";

export const addUser = async (data) => {
      
        
        const conn = await pool.getConnection();
        const [confirm] = await pool.query(confirmEmail, data.email);
        
        
        if(confirm[0].isExistEmail){
            conn.release();   // db 연결 해제
            return -1;
        }
    
        const result = await pool.query(insertUserSql, [data.email, data.name, data.gender, data.birth, data.addr, data.specAddr, data.phone]);

        conn.release();
       
        return result[0].insertId;
        
    
}


export const getUser = async (userId) => {
    try {
        
        const conn = await pool.getConnection();
        const [user] = await pool.query(getUserID, userId);

        console.log(user);

        if(user.length == 0){
            return -1;
        }

        conn.release();
        return user;
        
    } catch (err) {
        
        throw new BaseError(errorStatus.PARAMETER_IS_WRONG);
    }
}