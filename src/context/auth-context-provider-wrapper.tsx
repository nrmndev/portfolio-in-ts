import { useState } from "react";
import AuthContext from "./auth-context";
import LoginForm from "./loginform";
import Navigation from "./navigation";

const AuthContextProvider = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSubmit = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  const logoutHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}
    >
      {isLoggedIn && <Navigation />}
      {!isLoggedIn && <LoginForm onSubmit={onSubmit} />}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
