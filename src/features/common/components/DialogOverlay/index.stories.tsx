import { Meta, StoryObj } from "@storybook/react";

import DialogOverlay from "./index";

const meta: Meta<typeof DialogOverlay> = {
  title: "common/DialogOverlay",
  component: DialogOverlay,
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;

type Story = StoryObj<typeof DialogOverlay>;

export const Default: Story = {
  name: "default",
  render: () => (
    <DialogOverlay isOpen={true} isCloseButton={true} close={() => {}}>
      <div
        style={{
          width: "300px",
          height: "300px",
          textAlign: "center",
          background: "white",
        }}
      >
        コンテンツが表示されます
      </div>
    </DialogOverlay>
  ),
};
