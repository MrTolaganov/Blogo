import Layout from "../layouts/layout";
import { Content, Hero, Sidebar } from "../components";
import { Box } from "@mui/material";
import { BlogService } from "../services/blog.service";
import { GetServerSideProps } from "next";
import { BlogsType } from "../interfaces/blogs.interface";
import { CategoriesType } from "../interfaces/categories.interface";
import SEO from "../layouts/seo/seo";

export default function Index({
  blogs,
  latestBlogs,
  categories,
}: HomePageProps) {
  return (
    <SEO>
      <Layout>
        <Hero blogs={blogs} />
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
  HomePageProps
> = async () => {
  const blogs = await BlogService.getBlogs();
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

interface HomePageProps {
  blogs: BlogsType[];
  latestBlogs: BlogsType[];
  categories: CategoriesType[];
}
