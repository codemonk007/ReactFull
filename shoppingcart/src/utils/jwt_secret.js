const TOKEN_KEY = 'jwt';

export const login = (value) => {
    localStorage.setItem(TOKEN_KEY, value);
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
}
export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
}

export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }

    return false;
}