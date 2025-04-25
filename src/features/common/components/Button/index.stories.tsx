import { Meta, StoryObj } from "@storybook/react";

import Button from "./index";

const meta: Meta<typeof Button> = {
  title: "common/Button",
  component: Button,
  argTypes: {
    as: {
      control: { type: "radio" },
      options: ["button", "a"],
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    radius: {
      control: { type: "radio" },
      options: ["normal", "full"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

// 基本のボタン（medium サイズ、normal radius）
export const Default: Story = {
  args: {
    as: "button",
    children: "Button",
    onClick: () => {},
    size: "medium",
    radius: "normal",
  },
};

// ボタン：サイズ＋角丸バリエーション

// ボタンタイプ、小サイズ、通常の角丸
export const ButtonSmallNormal: Story = {
  args: {
    as: "button",
    children: "Button",
    onClick: () => {},
    size: "small",
    radius: "normal",
  },
};

// ボタンタイプ、小サイズ、完全な角丸
export const ButtonSmallFull: Story = {
  args: {
    as: "button",
    children: "Button",
    onClick: () => {},
    size: "small",
    radius: "full",
  },
};

// ボタンタイプ、中サイズ、通常の角丸
export const ButtonMediumNormal: Story = {
  args: {
    as: "button",
    children: "Button",
    onClick: () => {},
    size: "medium",
    radius: "normal",
  },
};

// ボタンタイプ、中サイズ、完全な角丸
export const ButtonMediumFull: Story = {
  args: {
    as: "button",
    children: "Button",
    onClick: () => {},
    size: "medium",
    radius: "full",
  },
};

// ボタンタイプ、大サイズ、通常の角丸
export const ButtonLargeNormal: Story = {
  args: {
    as: "button",
    children: "Button",
    onClick: () => {},
    size: "large",
    radius: "normal",
  },
};

// ボタンタイプ、大サイズ、完全な角丸
export const ButtonLargeFull: Story = {
  args: {
    as: "button",
    children: "Button",
    onClick: () => {},
    size: "large",
    radius: "full",
  },
};

// リンク（aタグ）：サイズ＋角丸バリエーション

// リンクタイプ、小サイズ、通常の角丸
export const LinkSmallNormal: Story = {
  args: {
    as: "a",
    children: "Button",
    href: "https://example.com",
    size: "small",
    radius: "normal",
  },
};

// リンクタイプ、小サイズ、完全な角丸
export const LinkSmallFull: Story = {
  args: {
    as: "a",
    children: "Button",
    href: "https://example.com",
    size: "small",
    radius: "full",
  },
};

// リンクタイプ、中サイズ、通常の角丸
export const LinkMediumNormal: Story = {
  args: {
    as: "a",
    children: "Button",
    href: "https://example.com",
    size: "medium",
    radius: "normal",
  },
};

// リンクタイプ、中サイズ、完全な角丸
export const LinkMediumFull: Story = {
  args: {
    as: "a",
    children: "Button",
    href: "https://example.com",
    size: "medium",
    radius: "full",
  },
};

// リンクタイプ、大サイズ、通常の角丸
export const LinkLargeNormal: Story = {
  args: {
    as: "a",
    children: "Button",
    href: "https://example.com",
    size: "large",
    radius: "normal",
  },
};

// リンクタイプ、大サイズ、完全な角丸
export const LinkLargeFull: Story = {
  args: {
    as: "a",
    children: "Button",
    href: "https://example.com",
    size: "large",
    radius: "full",
  },
};
