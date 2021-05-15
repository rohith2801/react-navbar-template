const isAuthenticationEnabled: boolean = true;

export const isAuthenticated = (): boolean => {
    if (!isAuthenticationEnabled) {
        return false;
    }

    return localStorage.getItem("isUserLoggedIn") === "true";
};
