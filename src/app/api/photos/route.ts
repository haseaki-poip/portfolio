import { NextResponse } from "next/server";

const apiUrl = process.env.PHOTO_API_URL as string;

export type ImageData = {
  imageUrl: string;
  title: string;
  width: number;
  height: number;
};

export type ResponseImageResult = {
  results: ImageData[];
  size: number;
  totalResults: number;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const start = searchParams.get("start") || "1";

  try {
    const response = await fetch(`${apiUrl}?start=${start}`, {
      next: {
        revalidate: 24 * 60 * 60, // 24時間キャッシュ
      },
    });

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data: ResponseImageResult = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data from Photo API:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
