export type Project = {
  id: number;
  documentId: string;
  Title: string;
  Description: Array<{
    type: string;
    children: Array<{
      text: string;
    }>;
  }>;
  Category: 'Shared' | 'Saved' | 'Achievement';
  Language: string;
  Author: string;
  isPublished: boolean;
  price: number;
  Image: {
    alternativeText: string | null;
    caption: string | null;
    createdAt: string;
    documentId: string;
    ext: string;
    formats: {
      thumbnail: ImageFormat;
    };
    hash: string;
    height: number;
    id: number;
    mime: string;
    name: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: null;
    publishedAt: string;
    size: number;
    updatedAt: string;
    url: string;
    width: number;
  };
};

interface ImageFormat {
  url: string;
  width: number;
  height: number;
} 