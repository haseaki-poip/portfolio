import axios from "axios";
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
    const response = await axios.get(apiUrl, {
      params: {
        start: start,
      },
    });

    const data: ResponseImageResult = response.data;
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data from Photo API:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
