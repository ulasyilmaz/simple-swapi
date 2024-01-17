import type {Meta, StoryObj} from "@storybook/react";

import Person from "../components/Person"

const meta = {
  title: 'Example/Person',
  component: Person,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Person>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Loading: Story = {
  args: {
    loading: true,
    data: {name: "Luke"},
  },
};

export const Loaded: Story = {
  args: {
    loading: false,
    data: {name: "Luke"},
  },
};
