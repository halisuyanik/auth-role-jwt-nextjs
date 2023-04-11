import {jwtVerify} from 'jose';
export async function verifyJwtToken(token){
    try {
        const {payload}=await jwtVerify(token, getJwtSecretKey());
        return payload;
    } catch (error) {
        return null;
    }
}

const getJwtSecretKey=()=>{
    const jwtSecretKey=process.env.JWT_SECRET_KEY;
    if(!jwtSecretKey){
        throw new Error('jwt secret key in not available');
    }
    return new TextEncoder().encode(jwtSecretKey);
}