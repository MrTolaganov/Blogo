import { GetServerSideProps } from "next";
import { BlogService } from "../../services/blog.service";
import { BlogsType } from "../../interfaces/blogs.interface";
import Layout from "../../layouts/layout";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import { Sidebar } from "../../components";
import { CategoriesType } from "../../interfaces/categories.interface";
import Image from "next/image";
import { calcEstimatedTime } from "../../helpers/time.format";
import { format } from "date-fns";
import SEO from "../../layouts/seo/seo";

export default function DetailedBlog({
  blog,
  latestBlogs,
  categories,
}: DetailedBlogProps) {
  return (
    <SEO metaTitle={blog.title}>
      <Layout>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "20px",
            padding: "20px",
          }}
        >
          <Box width={{ xs: "100%", md: "70%" }}>
            <Box
              sx={{
                backgroundColor: "black",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0  8px 16px rgba(255, 255, 255, .1)",
              }}
              position={"relative"}
              width={"100%"}
              height={{ xs: "30vh", md: "50vh" }}
              marginBottom={"20px"}
            >
              <Image
                src={blog.image.url}
                alt={blog.title}
                fill
                style={{ objectFit: "cover", borderRadius: "10px" }}
              />
            </Box>
            <Box display={"flex"} flexDirection={"column"} rowGap={"10px"}>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "20px",
                  alignItems: "center",
                }}
              >
                <Avatar alt={blog.author.name} src={blog.author.avatar.url} />
                <Box>
                  <Typography>{blog.author.name}</Typography>
                  <Box color={"gray"}>
                    {format(new Date(blog.createdAt), "dd MMM, yyyy")} &#x2022;
                    {calcEstimatedTime(blog.description.text)}min read
                  </Box>
                </Box>
              </Box>
              <Typography variant="h3">{blog.title}</Typography>
              <Typography color={"gray"}>{blog.except}</Typography>
              <Divider />
              <div
                style={{ opacity: ".8" }}
                dangerouslySetInnerHTML={{ __html: blog.description.html }}
              />
            </Box>
          </Box>
          <Sidebar latestBlogs={latestBlogs} categories={categories} />
          {/* <Content blogs={blogs} /> */}
        </Box>
      </Layout>
    </SEO>
  );
}

export const getServerSideProps: GetServerSideProps<
  DetailedBlogProps
> = async ({ query }) => {
  const blog = await BlogService.getDetailedBlog(query.slug as string);
  const latestBlogs = await BlogService.getLatestBlogs();
  const categories = await BlogService.getCategories();

  return {
    props: {
      blog,
      latestBlogs,
      categories,
    },
  };
};

interface DetailedBlogProps {
  blog: BlogsType;
  latestBlogs: BlogsType[];
  categories: CategoriesType[];
}
