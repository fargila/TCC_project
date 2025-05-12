export interface Book {
  title: string;
  author_name?: string[];
  cover_i?: number;
  isbn?: string[];
  price: number;
  first_publish_year?: number;
  publisher?: string[];
  description?: string | { value?: string };
  coverUrl?: string;
  quantity?: string;
}