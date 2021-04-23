// если юзер не залогинен то токен null т е  false, а если залогинен то токен строка т е  true
export const getIsAuthenticated = state => state.auth.isAuthenticated;

export const getUsername = state => state.auth.user.name;
