// import React from "react";
// import WithLineNumbers from "../../utils/code-highlighter";

import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
// const exampleCode = `
// import React, { useState } from "react";

// const Example = () => {
//   const [count, setCount] = useState<number>(0);

//   const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
//     setCount(count+1);
//   }
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }
// `.trim();
//import { useCallback } from "react";
// export const setToLS = useCallback((key: any, value: any) => {
//   window.localStorage.setItem(key, JSON.stringify(value));
// },[]);

type Storage = {
  key: string;
  value: string;
  ttl?: number; //In Minutes
};
const setToLocalStorage = ({ key, value, ttl = 3 }: Storage) => {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + ttl * 60000,
  };
  window.localStorage.setItem(key, JSON.stringify(item));
};
const setToSessionStorage = ({ key, value, ttl = 3 }: Storage) => {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + ttl * 60000,
  };
  window.sessionStorage.setItem(key, JSON.stringify(item));
};
const getFromLocalStorage = (key: string) => {
  const itemStr = window.localStorage.getItem(key);
  if (!itemStr) return null;

  const item = JSON.parse(itemStr);
  const now = new Date();
  // compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
};

const getFromSessionStorage = (key: string) => {
  const itemStr = window.sessionStorage.getItem(key);
  if (!itemStr) return null;

  const item = JSON.parse(itemStr);
  const now = new Date();
  // compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
};
const UseStateSample = () => {
  const [name, setName] = useState<string>("");
  const [nickName, setNickName] = useState<string>("");
  const storageRef = useRef<any>();
  const onChangeNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };
  const onChangeNickNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(e.currentTarget.value);
  };

  const onClickAddToStorage = () => {
    if (name && nickName) {
      setToLocalStorage({ key: "name", value: name, ttl: 1 });
      setToSessionStorage({ key: "nickname", value: name, ttl: 1 });
    }
  };

  const _name = getFromLocalStorage("name");
  const _nickName = getFromSessionStorage("nickname");
  storageRef.current = {
    name: _name,
    nickname: _nickName,
  };

  useEffect(() => {
    setName(storageRef.current.name ? storageRef.current.name : "");
    setNickName(storageRef.current.nickname ? storageRef.current.nickname : "");
  }, []);
  return (
    <>
      <h3>Local / Session Storage</h3>
      <p>Detailed explanation to follow</p>
      <hr />
      <Container>
        <Row className="pt-5 pb-5">
          <Col md={{ span: 6, offset: 3 }} className="pt-5 pb-5 card-m0">
            <p className="color_1 text-center">
              This is just a dummy, Local/Session will be added.
            </p>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="email"
                id="email"
                onChange={onChangeNameHandler}
                value={name}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nickname</Form.Label>
              <Form.Control
                type="text"
                name="password"
                id="password"
                onChange={onChangeNickNameHandler}
                value={nickName}
              />
            </Form.Group>
            <button
              className="button button__bordered button__shadowed-light"
              onClick={onClickAddToStorage}
            >
              Add to Storage
            </button>
            <p className="text-center mt-3">
              <small>
                <i>
                  Once added to storage, name / nickname will persist in browser
                  and will expire after (TTL argument in minutes OR default of 3
                  minutes), but nickname will automatically be removed once you
                  close browser
                </i>
              </small>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UseStateSample;
