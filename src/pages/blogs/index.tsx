import { GetServerSideProps } from "next";
import Layout from "../../layouts/layout";
import { BlogService } from "../../services/blog.service";
import { BlogsType } from "../../interfaces/blogs.interface";
import { Content } from "../../components";
import { Box } from "@mui/material";
import SEO from "../../layouts/seo/seo";

export default function Blogs({ blogs }: BlogsProps) {
  return (
    <SEO metaTitle="Blogs">
      <Layout>
        <Box
          display={"flex"}
          gap={"20px"}
          flexDirection={{ xs: "column", md: "row" }}
          padding={"20px"}
          justifyContent={"center"}
        >
          <Content blogs={blogs} />
        </Box>
      </Layout>
    </SEO>
  );
}

export const getServerSideProps: GetServerSideProps<BlogsProps> = async () => {
  const blogs = await BlogService.getBlogs();

  return { props: { blogs } };
};

interface BlogsProps {
  blogs: BlogsType[];
}
