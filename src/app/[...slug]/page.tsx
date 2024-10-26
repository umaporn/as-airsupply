import dynamic from "next/dynamic";
import { notFound } from "next/navigation"

interface OnDemanPagePathProps {
  params: {
    slug: Array<string>;
    searchParams: { [key: string]: string | string[] | undefined };
  };
}
const pageBySlug = ({ params: { slug } }: OnDemanPagePathProps) => {
  console.log("slug", slug);
};


export default pageBySlug;
