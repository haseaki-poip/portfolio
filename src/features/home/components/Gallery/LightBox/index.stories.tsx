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
    imageData: {
      title: "Horizontal Image",
      imageUrl: "https://placehold.jp/1616x1080.png",
      width: 1616,
      height: 1080,
    },
  },
};

export const VerticalImage: Story = {
  args: {
    imageData: {
      title: "Vertical Image",
      imageUrl: "https://placehold.jp/1080x1616.png",
      width: 1080,
      height: 1616,
    },
  },
};
