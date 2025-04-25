"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { ResponseImageResult } from "@/app/api/photos/route";
import { useImage } from "./hooks";
import Masonry from "@/features/common/components/Masonry";
import Error from "./Error";
const Gallery = () => {
  const observerRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [start, setStart] = useState(1);
  const [finishFetch, setFinishFetch] = useState(false);
  const { sortedImageDatas, addImageDatas } = useImage();

  useEffect(() => {
    if (finishFetch) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !loading) {
          // スクロールが一番下に到達したときの処理
          loadMoreImages();
        }
      },
      {
        root: null,
        rootMargin: "8px",
        threshold: 0.1,
      }
    );

    const currentObserver = observerRef.current;
    if (currentObserver) {
      observer.observe(currentObserver);
    }

    return () => {
      if (currentObserver) {
        observer.unobserve(currentObserver);
      }
    };
  }, [loading, finishFetch]);

  const loadMoreImages = () => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_CSR_BASE_URL}/photos?start=${start}`)
      .then((response) => response.json())
      .then((data: ResponseImageResult) => {
        const results = data.results;
        const newStart = start + data.size;
        const totalResults = data.totalResults;

        addImageDatas(results);
        setStart(newStart);
        if (newStart > totalResults) {
          setFinishFetch(true);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
        setFinishFetch(true);
      });
  };

  const retry = () => {
    setError(false);
    setFinishFetch(false);
    loadMoreImages();
  };

  return (
    <>
      <div className={styles.masonry}>
        {(sortedImageDatas.length > 0 || loading) && (
          <Masonry gap={6} breakpointColumns={{ 0: 2, 1024: 4 }}>
            {sortedImageDatas.map((imageData, index) => (
              <div
                key={index}
                className={styles.masonry__item}
                style={{
                  aspectRatio: `${imageData.width}/${imageData.height}`,
                }}
              >
                <div className={styles.masonry__image_wrapper}>
                  <Image
                    src={imageData.imageUrl}
                    alt={`Disney Photo ${index}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            ))}

            {loading &&
              Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className={`${styles.masonry__loading} ${
                    index % 2 != 0
                      ? styles["masonry__loading--height_large"]
                      : ""
                  }`}
                ></div>
              ))}
          </Masonry>
        )}
        {error && (
          <Error
            {...(sortedImageDatas.length > 0 && {
              className: styles["hp__mt--32px"],
            })}
            retry={retry}
          />
        )}
      </div>

      <div ref={observerRef} style={{ width: "100%", height: "24px" }}></div>
    </>
  );
};

export default Gallery;
