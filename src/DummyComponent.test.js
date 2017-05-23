import "react-native";
import React from "react";
import DummyComponent from "./DummyComponent.js";
import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer.create(<DummyComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
