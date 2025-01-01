import Author from "./author";

type PostType = {
  slug: string;
  title: string;
  date: string;
  image: string;
  content: string;
  description: string;
  category: string;
  cover?: string;
};

export default PostType;
