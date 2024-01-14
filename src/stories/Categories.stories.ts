import type { Meta, StoryObj } from "@storybook/react";

import Categories from "../components/Categories"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Categories',
  component: Categories,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof Categories>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Loading: Story = {
  args: {
    loading: true,
    items: ["people", "planets", "films", "species", "vehicles", "spaceships"],
    selectedItem: "planets",
  },
};

export const SelectedFilms: Story = {
  args: {
    loading: false,
    items: ["people", "planets", "films", "species", "vehicles", "spaceships"],
    selectedItem: "films",
  },
};

export const SelectedVehicles: Story = {
  args: {
    loading: false,
    items: ["people", "planets", "films", "species", "vehicles", "spaceships"],
    selectedItem: "vehicles",
  },
};
