export const isAuthPages=(url)=>{
    return AUTH_PAGES.some(page=>page.startsWith(url));
}

export const AUTH_PAGES=[
    '/login',
    '/register',
    '/forgot-password'
]