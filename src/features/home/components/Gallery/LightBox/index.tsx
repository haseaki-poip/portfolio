"use client";

import { ImageData } from "@/app/api/photos/route";
import styles from "./style.module.scss";
import DialogOverlay from "@/features/common/components/DialogOverlay";
import Image from "next/image";
import { useEffect, useRef } from "react";

type Props = {
  imageData: ImageData;
  close: () => void;
};

const LightBox = (props: Props) => {
  const { imageData, close } = props;
  const lightboxRef = useRef<HTMLDivElement>(null);

  // Lightboxの領域サイズを画像の表示サイズに合わせる。
  // サイズを合わせないと画像の表示領域ではないが、Lightbox領域ではあるところが存在し背景クリックで閉じれない
  useEffect(() => {
    if (lightboxRef.current) {
      const updateDimensions = () => {
        console.log("updateDimensions");
        if (lightboxRef.current) {
          const { offsetWidth, offsetHeight } = lightboxRef.current;
          // 画像の元のサイズとコンテナサイズを比較して、contain時のサイズを計算
          const imageRatio = imageData.width / imageData.height;
          const containerRatio = offsetWidth / offsetHeight;

          // 画像のサイズを計算
          let containedImageWidth, containedImageHeight;
          if (imageRatio > containerRatio) {
            // 画像が横長の場合、幅に合わせる
            containedImageWidth = offsetWidth;
            containedImageHeight = offsetWidth / imageRatio;
          } else {
            // 画像が縦長の場合、高さに合わせる
            containedImageHeight = offsetHeight;
            containedImageWidth = offsetHeight * imageRatio;
          }
          lightboxRef.current.style.width = `${containedImageWidth}px`;
          lightboxRef.current.style.height = `${containedImageHeight}px`;
        }
      };

      updateDimensions();
      window.addEventListener("resize", updateDimensions);

      return () => {
        window.removeEventListener("resize", updateDimensions);
      };
    }
  }, [imageData.width, imageData.height]);

  return (
    <DialogOverlay
      isOpen={true}
      isCloseButton={true}
      backgroundColor="white"
      close={close}
    >
      <div className={styles.lightbox} ref={lightboxRef}>
        <div className={styles.lightbox__display}>
          <Image
            src={imageData.imageUrl}
            alt="Display Image"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </DialogOverlay>
  );
};

export default LightBox;
