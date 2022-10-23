import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {
    /**/
  },
});

// const AuthContextProvider = (props) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   <AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>
//     {props.children}
//   </AuthContext.Provider>;
// };
export default AuthContext;
