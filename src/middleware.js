import {verifyJwtToken} from '@/utils/auth/auth';
import { NextResponse } from 'next/server';
import { isAuthPages } from './utils/auth/isAuthPages';
export async function middleware(request){
    const {url, nextUrl, cookies}=request;
    const {value:token}=cookie.get('token')??{value:null}
    const verifiedToken=token && (await verifyJwtToken(token));
    const isAuthPageRequested=isAuthPages(nextUrl.pathname);
    if(isAuthPageRequested){
        if(!verifiedToken){
            const response=NextResponse.next();
            return response;
        }
        const response=NextResponse.redirect(new url('/', url))
        return response;
    }
    if(!verifiedToken){
        const urlParams=new URLSearchParams(nextUrl.urlParams);
        urlParams.set('next', nextUrl.pathname);
        return NextResponse.redirect(new URL(`/login?${urlParams}`, url));
    }
    return NextResponse.next();
}
export const config={
    matcher:[
        '/login',
        '/panel'
    ]
}