import { useState } from "react";
import AuthContext from "../../../context/auth-context";
import LoginForm from "../../../context/loginform";
import Navigation from "../../../context/navigation";
import RenderCode from "../../../components/prism-renderer/prism-renderer.component";
const exampleCode = `
const [isLoggedIn, setIsLoggedIn] = useState(false);

const onSubmit = () => {
  setIsLoggedIn(!isLoggedIn);
};
const logoutHandler = () => {
  setIsLoggedIn(!isLoggedIn);
};
return (
  <>
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}
    >
      {isLoggedIn && <Navigation />}
      {!isLoggedIn && <LoginForm onSubmit={onSubmit} />}
    </AuthContext.Provider>
  </>
);
`.trim();
const exampleCode2 = `
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
`.trim();

const AuthContextProvider = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSubmit = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  const logoutHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <>
      <h2>Context API</h2>
      <p>Detailed explanation to follow</p>
      <hr />

      <AuthContext.Provider
        value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}
      >
        {isLoggedIn && <Navigation />}
        {!isLoggedIn && <LoginForm onSubmit={onSubmit} />}
      </AuthContext.Provider>
      <p>Wrapped Component inside Provider</p>
      <RenderCode code={exampleCode} language="jsx" />
      <p>Your Provider</p>
      <RenderCode code={exampleCode2} language="jsx" />
    </>
  );
};
export default AuthContextProvider;
