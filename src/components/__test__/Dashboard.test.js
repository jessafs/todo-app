import React from "react";
import Dashboard from "../Dashboard";
import renderer from "react-test-renderer";
// import { render } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

test("renderes user input", () => {
  // create a snapshot
  const tree = renderer.create(
    <Dashboard
      users={[]}
      handleShow={() => {}}
      isListVisible={true}
      currentIndex={0}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot()
});
test("renders todo input", () => {
    // create a snapshot
    // tree is a representation of a html output of the compoenent 
    const tree = renderer.create(
      <Dashboard
        users={[{title:"First todo",content:"The quuick brown fix jump over the lazy dog",id:'1'}]}
        handleShow={() => {}}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot()
  });

// App.test.js
// import { render, screen } from '@testing-library/react';
// import App from './App';


