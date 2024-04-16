import { Avatar, Box, Divider, Typography } from "@mui/material";
import { data } from "../../config/constants";
import Image from "next/image";
import { format } from "date-fns";
import { ContentTypes } from "./content.props";
import { calcEstimatedTime } from "../../helpers/time.format";
import { useRouter } from "next/router";

export default function Content({ blogs }: ContentTypes) {
  const router = useRouter();
  return (
    <Box width={{ xs: "100%", md: "70%" }} height={"200vh"}>
      {blogs.map(blog => (
        <Box
          key={blog.id}
          padding={"20px"}
          marginTop={"20px"}
          borderRadius={"8px"}
          boxShadow={"0 8px 16px rgba(255, 255, 255, .1)"}
          sx={{ backgroundColor: "rgba(0, 0, 0, .5)", cursor: "pointer" }}
          onClick={() => router.push(`/blog/${blog.slug}`)}
        >
          <Box
            position={"relative"}
            width={"100%"}
            height={{ xs: "30vh", md: "50vh" }}
          >
            <Image
              src={blog.image.url}
              alt={blog.title}
              fill
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
          </Box>
          <Typography variant="h4" marginTop={"30px"}>
            {blog.title}
          </Typography>
          <Typography variant="body1" color={"gray"}>
            {blog.except}
          </Typography>
          <Divider sx={{ marginTop: "30px" }} />
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
        </Box>
      ))}
    </Box>
  );
}
