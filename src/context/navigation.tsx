import AuthContext from "./auth-context";
import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
//////// OLD FASHION .CONSUMER APPROACH
// // const Navigation = (props) => {
// //   return (
// //     <AuthContext.Consumer>
// //       {(ctx) => {
// //         return <>{ctx.isLoggedIn ? "YES" : "NO"}</>;
// //       }}
// //     </AuthContext.Consumer>
// //   );
// // };

const Navigation = (): JSX.Element => {
  const ctx = useContext(AuthContext);
  return (
    <Container>
      <Row className="pt-5 pb-5">
        <Col md={{ span: 6, offset: 3 }} className="pt-5 pb-5 card-m0">
          <h3 className="color_2 text-center">Welcome Adventurer!</h3>
          <p className="text-center">User Authenticated! (Dummy only)</p>
          {ctx.isLoggedIn && (
            <button
              className="button button__bordered button__shadowed-light"
              onClick={ctx.onLogout}
            >
              Logout
            </button>
          )}
        </Col>
      </Row>
    </Container>
  );
};
export default Navigation;
