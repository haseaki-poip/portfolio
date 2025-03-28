import { Meta, StoryObj } from "@storybook/react";

import Masonry from "./index";

const meta: Meta<typeof Masonry> = {
  component: Masonry,
};
export default meta;

type Story = StoryObj<typeof Masonry>;

export const Default: Story = {
  name: "default",
  render: () => (
    <Masonry gap={4} breakpointColumns={{ 400: 2, 500: 3, 600: 4 }}>
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          style={{
            height: `${Math.floor(Math.random() * 200) + 100}px`,
            width: "100%",
            backgroundColor: "gray",
          }}
        >
          Item {index + 1}
        </div>
      ))}
    </Masonry>
  ),
};
