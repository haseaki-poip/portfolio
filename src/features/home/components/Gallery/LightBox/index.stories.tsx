import { Meta, StoryObj } from "@storybook/react";
import LightBox from "./index";

const meta: Meta<typeof LightBox> = {
  title: "home/Gallery/LightBox",
  component: LightBox,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof LightBox>;

export const HorizontalImage: Story = {
  args: {
    isOpen: true,
    imageUrl: "https://placehold.jp/1616x1080.png",
  },
};

export const VerticalImage: Story = {
  args: {
    isOpen: true,
    imageUrl: "https://placehold.jp/1080x1616.png",
  },
};
