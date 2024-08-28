
export const isAuthenticated = () => {
    return document.cookie.includes('authenticated=true');
  };
  
  export const login = () => {
    document.cookie = 'authenticated=true; path=/';
  };
  
  export const logout = () => {
    document.cookie = 'authenticated=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
  };
  