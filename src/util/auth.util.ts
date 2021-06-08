const isAuthenticationEnabled: boolean = true;
const localStorageKey = "isUserLoggedIn";

export const isAuthenticated = (): boolean => {
  if (!isAuthenticationEnabled) {
    return false;
  }

  return localStorage.getItem(localStorageKey) === "true";
};

export const removeAuthentication = (): void => {
  localStorage.removeItem(localStorageKey);
};
