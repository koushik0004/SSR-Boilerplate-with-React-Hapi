import React from "react";

const Hello = () => {
  return (
    <>
      <h1>Hello, Welcome to React-SSR</h1>
      <p>This is a minimal SSR boilerplate with ReactJS, NodeJS, HapiJS, Webpack.</p>
      <button onClick={() => console.log("Click Works !!!")}>Test Click Event</button>
    </>
  );
};

export default Hello;
