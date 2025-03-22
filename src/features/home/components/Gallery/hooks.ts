import { ImageData } from "@/app/api/photos/route";
import { useState } from "react";

export const useImage = () => {
  const [sortedImageDatas, setSortedImageDatas] = useState<ImageData[]>([]);
  const [totalHeightList, setTotalHeightList] = useState(Array(4).fill(0));

  const addImageDatas = (addedImageDatas: ImageData[]) => {
    const rows: ImageData[][] = [];
    const heights = [...totalHeightList];

    // imageDatasを6個ずつ処理する
    for (let i = 0; i < addedImageDatas.length; i += 4) {
      const chunk = addedImageDatas.slice(
        i,
        Math.min(i + 4, addedImageDatas.length)
      );
      const chunkSize = chunk.length;

      // 高さの低い列インデックスを取得（昇順）
      // ただし、chunkSizeの数だけ使用する
      const columnIndexes = heights
        .slice(0, chunkSize) // chunkSizeの数だけ取得
        .map((height, index) => ({ height, index }))
        .sort((a, b) => a.height - b.height)
        .map((item) => item.index);

      // 画像を高さの高い順に並べ替え
      const sortedChunk = [...chunk].sort((a, b) => b.height - a.height);

      const row: ImageData[] = new Array(chunkSize);
      sortedChunk.forEach((imageData, index) => {
        const columnIndex = columnIndexes[index];
        row[columnIndex] = imageData;
        heights[columnIndex] += imageData.height;
      });
      rows.push(row);
    }

    // 各列の画像を1つの配列に結合
    const result = rows.flat();
    setSortedImageDatas([...sortedImageDatas, ...result]);
    setTotalHeightList(heights);
  };

  return { sortedImageDatas, addImageDatas };
};
