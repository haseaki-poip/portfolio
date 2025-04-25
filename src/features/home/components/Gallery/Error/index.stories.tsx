import { Meta, StoryObj } from "@storybook/react";

import Error from "./index";

const meta: Meta<typeof Error> = {
  title: "Home/Gallery/Error",
  component: Error,
};
export default meta;

type Story = StoryObj<typeof Error>;

export const Default: Story = {
  args: {},
};
