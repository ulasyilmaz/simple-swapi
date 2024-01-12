import Factor from "../Factor.tsx";
import {render, screen} from "@testing-library/react";

describe("Factor", () => {
  test("should render CircularProgress while loading", () => {
    const data = {
      name: "Lou"
    };

    render(<Factor loading={true} data={data}/>);

    expect(screen.queryByLabelText("loading")).not.toBeNull();
  });

  test("should NOT render CircularProgress when loaded", () => {
    const data = {
      name: "Lou"
    };

    render(<Factor loading={false} data={data}/>);
    expect(screen.queryByLabelText("loading")).toBeNull();
  });
});