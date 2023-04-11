import {jwtVerify} from 'jose';
export async function verifyJwtToken(token){
    try {
        const {payload}=await jwtVerify(token, getJwtSecretKey());
        return payload;
    } catch (error) {
        return null;
    }
}

export function getJwtSecretKey(){
    const jwtSecretKey=process.env.NEXT_PUBLIC_JWT_SECRET_KEY;
    if(!jwtSecretKey){
        throw new Error('jwt secret key in not available');
    }
    return new TextEncoder().encode(jwtSecretKey);
}