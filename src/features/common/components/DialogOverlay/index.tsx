import React, { useEffect, useRef } from "react";
import styles from "./style.module.scss";

type Props = {
  isOpen: boolean;
  isCloseButton?: boolean;
  backgroundColor?: "white" | "black";
  close: () => void;
  children: React.ReactNode;
};

const DialogOverlay = ({
  isOpen,
  isCloseButton = true,
  backgroundColor = "black",
  close,
  children,
}: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      // モーダルが開く前にスクロールを無効にする
      document.body.style.overflow = "hidden";

      // モーダルを表示
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      // モーダルが閉じたらスクロールを有効に戻す
      document.body.style.overflow = "";

      if (dialog.open) {
        dialog.close();
      }
    }

    return () => {
      // コンポーネントのアンマウント時にスクロールを有効に戻す
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // 背景クリックで閉じる
  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      close();
    }
  };

  // ESCキーで閉じる
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscKey);
    }

    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, close]);

  return (
    <dialog
      ref={dialogRef}
      className={`${styles.dialog} ${
        backgroundColor === "white" && styles["dialog--bg_white"]
      }`}
      onClick={handleBackdropClick}
    >
      {isCloseButton && (
        <button
          className={styles.dialog__close}
          onClick={close}
          aria-label="閉じる"
        >
          ×
        </button>
      )}

      {children}
    </dialog>
  );
};

export default DialogOverlay;
