import styles from "./style.module.scss";
import DialogOverlay from "@/features/common/components/DialogOverlay";
import Image from "next/image";

type Props = {
  isOpen: boolean;
  imageUrl: string;
  close: () => void;
};

const LightBox = (props: Props) => {
  const { isOpen, imageUrl, close } = props;

  if (!isOpen) return null;

  return (
    <DialogOverlay
      isOpen={isOpen}
      isCloseButton={true}
      backgroundColor="white"
      close={close}
    >
      <div className={styles.lightbox}>
        <div className={styles.lightbox__display}>
          <Image src={imageUrl} alt="Display Image" fill objectFit="contain" />
        </div>
      </div>
    </DialogOverlay>
  );
};

export default LightBox;
