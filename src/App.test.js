import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import App from "./App";
import { RecoilRoot } from "recoil";

test("renders learn react link", () => {
  const { getByLabelText } = render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
  const input = getByLabelText(/Typing For Search/i);
  expect(input).toBeInTheDocument();
});
