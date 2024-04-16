import { ReactNode } from "react";

export interface SeoProps {
  children: ReactNode;
  author?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
}
