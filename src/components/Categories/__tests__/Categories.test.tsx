import Categories from "../Categories.tsx";
import {render, screen} from "@testing-library/react";
import {SyntheticEvent} from "react";

describe("Categories", () => {
  const items: string[] = ["people", "planets", "films", "species", "vehicles", "spaceships"];
  const selectedItem: string = "species";
  const handleChange = (event: SyntheticEvent, category: string): void => {
    console.debug(`Event ${event.type}`);
    console.debug(`Selected ${category}`);
  };

  test("should render CircularProgress while loading", () => {
    render(<Categories loading={true} items={items} selectedItem={selectedItem} handleChange={handleChange}/>);
    expect(screen.queryByLabelText("loading")).not.toBeNull();
  });

  test("should NOT render CircularProgress when loaded", () => {
    render(<Categories loading={false} items={items} selectedItem={selectedItem} handleChange={handleChange}/>);
    expect(screen.queryByLabelText("loading")).toBeNull();
  });
});