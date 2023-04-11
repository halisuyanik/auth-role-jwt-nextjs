import { verifyJwtToken } from "@/utils/auth/auth"
import React from "react";
import Cookies from "universal-cookie";

export async function useAuth(){
    const [auth, setAuth]=React.useState(null);
    const getVerifiedToken=async()=>{
        const cookies=new Cookies();
        const token=cookies.get('token')??null;
        const verifiedToken=await verifyJwtToken(token);
        setAuth(verifiedToken);
    }
    React.useEffect(()=>{
        getVerifiedToken();
    },[])
    return auth;
}

const fromServer=async()=>{
    const cookies=require('next/headers').cookies;
    const cookieList=cookies();
    const {value:token}=cookieList.get('token')??{value:null};
    const verifiedToken=await verifyJwtToken(token);
    return verifiedToken;
}
useAuth.fromServer=fromServer;