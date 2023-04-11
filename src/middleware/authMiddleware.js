import {verifyJwtToken} from '@/utils/auth/auth';
import { NextResponse } from 'next/server';
import { isAuthPages } from '../utils/auth/isAuthPages';
export async function middleware(request){
    const {url, nextUrl, cookies}=request;
    console.log(cookies.get('token'))
    const {value:token}=cookies.get('token')||{value:null}
    const verifiedToken=token && (await verifyJwtToken(token));
    const isAuthPageRequested=isAuthPages(nextUrl.pathname);
    if(isAuthPageRequested){
        if(!verifiedToken){
            const response=NextResponse.next();
            response.cookies.delete("token");
            return response;
        }
        const response=NextResponse.redirect(new URL('/', url))
        return response;
    }
    if(!verifiedToken){
        const urlParams=new URLSearchParams(nextUrl.urlParams);
        urlParams.set('next', nextUrl.pathname);
        const response = NextResponse.redirect(
            new URL(`/login?${searchParams}`, url)
          );
        response.cookies.delete("token");
      
        return response;
    }
    return NextResponse.next();
}
export const config={
    matcher:[
        '/login',
        '/panel'
    ]
}