import { ImageData } from "@/app/api/photos/route";
import { useState } from "react";

export const useImage = () => {
  const [sortedImageDatas, setSortedImageDatas] = useState<ImageData[]>([]);
  const [totalVerticalRatioList, setTotalVerticalRatioList] = useState(
    Array(4).fill(0)
  );

  const addImageDatas = (addedImageDatas: ImageData[]) => {
    const rows: ImageData[][] = [];
    const verticalRatios = [...totalVerticalRatioList];

    // imageDatasを4個ずつ処理する
    for (let i = 0; i < addedImageDatas.length; i += 4) {
      const chunk = addedImageDatas.slice(
        i,
        Math.min(i + 4, addedImageDatas.length)
      );
      const chunkSize = chunk.length;

      // 累計高幅比の小さい列インデックスを取得（昇順）
      // ただし、chunkSizeの数だけ使用する
      const columnIndexes = verticalRatios
        .slice(0, chunkSize) // chunkSizeの数だけ取得
        .map((verticalRatio, index) => ({ verticalRatio, index }))
        .sort((a, b) => a.verticalRatio - b.verticalRatio)
        .map((item) => item.index);

      // 高幅比の大きい順に並べ替え
      const sortedChunk = [...chunk].sort(
        (a, b) => b.height / b.width - a.height / a.width
      );

      const row: ImageData[] = new Array(chunkSize);
      sortedChunk.forEach((imageData, index) => {
        const columnIndex = columnIndexes[index];
        row[columnIndex] = imageData;
        verticalRatios[columnIndex] += imageData.height / imageData.width;
      });
      rows.push(row);
    }

    // 各列の画像を1つの配列に結合
    const result = rows.flat();
    setSortedImageDatas([...sortedImageDatas, ...result]);
    setTotalVerticalRatioList(verticalRatios);
  };

  return { sortedImageDatas, addImageDatas };
};
