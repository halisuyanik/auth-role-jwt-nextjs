import { SignJWT } from "jose";
import { getJwtSecretKey } from "@/utils/auth/auth";
import { NextResponse } from "next/server";
export async function POST(request){
    const body=await request.json();
    
    if(body.username==='admin' && body.password==='admin'){
        const token=await new SignJWT({
            username:body.username,
            role:'admin'
        }).setProtectedHeader({
            alg:'HS256'
        }).setIssuedAt()
        .setExpirationTime('45s')
        .sign(getJwtSecretKey())
        const response=NextResponse.json({
            success:true,
        })
        response.cookies.set({
            name:'token',
            path:'/',
            value:token
        })
        return response;
    }
    return NextResponse.json({success:false})
}