import Layout from "../../layouts/layout";
import { GetServerSideProps } from "next";
import { BlogService } from "../../services/blog.service";
import { BlogsType } from "../../interfaces/blogs.interface";
import { CategoriesType } from "../../interfaces/categories.interface";
import { Content, Sidebar } from "../../components";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import SEO from "../../layouts/seo/seo";

export default function DetailedCategory({
  blogs,
  latestBlogs,
  categories,
}: DetailedCategoryProps) {
  const router = useRouter();
  
  return (
    <SEO
      metaTitle={`Category: ${router.query.slug}`}
    >
      <Layout>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "20px",
            padding: "20px",
          }}
        >
          <Sidebar latestBlogs={latestBlogs} categories={categories} />
          <Content blogs={blogs} />
        </Box>
      </Layout>
    </SEO>
  );
}

export const getServerSideProps: GetServerSideProps<
  DetailedCategoryProps
> = async ({ query }) => {
  console.log(query.slug);

  const blogs = await BlogService.getDetailedCategories(query.slug as string);
  const latestBlogs = await BlogService.getLatestBlogs();
  const categories = await BlogService.getCategories();

  return {
    props: {
      blogs,
      latestBlogs,
      categories,
    },
  };
};

interface DetailedCategoryProps {
  blogs: BlogsType[];
  latestBlogs: BlogsType[];
  categories: CategoriesType[];
}
