import { Meta, StoryObj } from "@storybook/react";

import LinkButton from "./index";

const meta: Meta<typeof LinkButton> = {
  title: "common/LinkButton",
  component: LinkButton,
  argTypes: {
    as: {
      control: { type: "radio" },
      options: ["button", "a"],
    },
    size: {
      control: { type: "radio" },
      options: ["xs", "small", "medium", "large", "xl", "2xl", "3xl"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof LinkButton>;

// デフォルト：中サイズのリンクボタン
export const Default: Story = {
  args: {
    text: "LinkButton",
    size: "medium",
    as: "a",
    href: "https://example.com",
  },
};

// ボタンタイプのバリエーション
// -------------------------------------

// 超小サイズ(xs)のボタン
export const ButtonExtraSmall: Story = {
  args: {
    as: "button",
    text: "LinkButton",
    onClick: () => {},
    size: "xs",
  },
};

// 小サイズ(small)のボタン
export const ButtonSmall: Story = {
  args: {
    as: "button",
    text: "LinkButton",
    onClick: () => {},
    size: "small",
  },
};

// 中サイズ(medium)のボタン
export const ButtonMedium: Story = {
  args: {
    as: "button",
    text: "LinkButton",
    onClick: () => {},
    size: "medium",
  },
};

// 大サイズ(large)のボタン
export const ButtonLarge: Story = {
  args: {
    as: "button",
    text: "LinkButton",
    onClick: () => {},
    size: "large",
  },
};

// 特大サイズ(xl)のボタン
export const ButtonExtraLarge: Story = {
  args: {
    as: "button",
    text: "LinkButton",
    onClick: () => {},
    size: "xl",
  },
};

// 2倍特大サイズ(2xl)のボタン
export const ButtonDoubleExtraLarge: Story = {
  args: {
    as: "button",
    text: "LinkButton",
    onClick: () => {},
    size: "2xl",
  },
};

// 3倍特大サイズ(3xl)のボタン
export const ButtonTripleExtraLarge: Story = {
  args: {
    as: "button",
    text: "LinkButton",
    onClick: () => {},
    size: "3xl",
  },
};

// リンクタイプのバリエーション
// -------------------------------------

// 超小サイズ(xs)のリンク
export const LinkExtraSmall: Story = {
  args: {
    as: "a",
    text: "LinkButton",
    href: "https://example.com",
    size: "xs",
  },
};

// 小サイズ(small)のリンク
export const LinkSmall: Story = {
  args: {
    as: "a",
    text: "LinkButton",
    href: "https://example.com",
    size: "small",
  },
};

// 中サイズ(medium)のリンク
export const LinkMedium: Story = {
  args: {
    as: "a",
    text: "LinkButton",
    href: "https://example.com",
    size: "medium",
  },
};

// 大サイズ(large)のリンク
export const LinkLarge: Story = {
  args: {
    as: "a",
    text: "LinkButton",
    href: "https://example.com",
    size: "large",
  },
};

// 特大サイズ(xl)のリンク
export const LinkExtraLarge: Story = {
  args: {
    as: "a",
    text: "LinkButton",
    href: "https://example.com",
    size: "xl",
  },
};

// 2倍特大サイズ(2xl)のリンク
export const LinkDoubleExtraLarge: Story = {
  args: {
    as: "a",
    text: "LinkButton",
    href: "https://example.com",
    size: "2xl",
  },
};

// 3倍特大サイズ(3xl)のリンク
export const LinkTripleExtraLarge: Story = {
  args: {
    as: "a",
    text: "LinkButton",
    href: "https://example.com",
    size: "3xl",
  },
};
