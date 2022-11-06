import { useState } from "react";
import AuthContext from "../../../context/auth-context";
import LoginForm from "../../../context/loginform";
import Navigation from "../../../context/navigation";
import RenderCode from "../../../components/prism-renderer/prism-renderer.component";
import Text from "../../../components/typography/text.component";
import {
  GAP_SEPARATOR_VARIANT,
  TEXT_AS,
} from "../../../components/theme-provider/utilities";
import GapSeparator from "../../../components/gap/gap.components";
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
      <Text as={TEXT_AS.H2}>Context API</Text>
      <GapSeparator variant={GAP_SEPARATOR_VARIANT.LINE} />
      <Text>Detailed explanation to follow</Text>
      <hr />

      <AuthContext.Provider
        value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}
      >
        {isLoggedIn && <Navigation />}
        {!isLoggedIn && <LoginForm onSubmit={onSubmit} />}
      </AuthContext.Provider>
      <Text>Wrapped Component inside Provider</Text>
      <RenderCode code={exampleCode} language="tsx" />
      <Text>Your Provider</Text>
      <RenderCode code={exampleCode2} language="tsx" />
    </>
  );
};
export default AuthContextProvider;
