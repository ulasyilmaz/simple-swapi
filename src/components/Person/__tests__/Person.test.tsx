import Person from "../Person.tsx";
import {render, screen} from "@testing-library/react";

describe("Person", () => {
  test("should render CircularProgress while loading", () => {
    const data = {
      name: "Lou"
    };

    render(<Person loading={true} data={data}/>);

    expect(screen.queryByLabelText("loading")).not.toBeNull();
  });

  test("should NOT render CircularProgress when loaded", () => {
    const data = {
      name: "Lou"
    };

    render(<Person loading={false} data={data}/>);
    expect(screen.queryByLabelText("loading")).toBeNull();
  });
});