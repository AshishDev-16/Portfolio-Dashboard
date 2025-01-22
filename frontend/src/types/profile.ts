export type Profile = {
  id: number;
  Avatar: {
    alternativeText: string | null;
    caption: string | null;
    createdAt: string;
    documentId: string;
    ext: string;
    formats: {
      thumbnail: any;
      small: any;
      medium: any;
      large: any;
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
  Name: string;
  Role: string;
  createdAt: string;
  documentId: string;
  publishedAt: string;
  updatedAt: string;
}; 