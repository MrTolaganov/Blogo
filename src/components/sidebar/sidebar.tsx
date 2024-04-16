import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import { data, navItems } from "../../config/constants";
import { Fragment } from "react";
import Image from "next/image";
import { format } from "date-fns";
import { SidebarTypes } from "./sidebar.props";
import { useRouter } from "next/router";

export default function Sidebar({ latestBlogs, categories }: SidebarTypes) {
  const router = useRouter();

  return (
    <Box width={{ xs: "100%", md: "30%" }}>
      <Box
        position={"sticky"}
        top={"100px"}
        sx={{ transition: "all .3s ease" }}
      >
        <Box padding={"20px"} border={"1px solid gray"} borderRadius={"8px"}>
          <Typography variant="h5">Latest Blogs</Typography>
          <Box
            sx={{ display: "flex", flexDirection: "column", marginTop: "20px" }}
          >
            {latestBlogs.map(latestBlog => (
              <Box
                key={latestBlog.id}
                marginTop={"20px"}
                sx={{ cursor: "pointer" }}
                onClick={() => router.push(`/blog/${latestBlog.slug}`)}
              >
                <Box
                  sx={{ display: "flex", gap: "20px", alignItems: "center" }}
                >
                  <Image
                    src={latestBlog.image.url}
                    alt={latestBlog.title}
                    width={100}
                    height={100}
                    style={{ objectFit: "cover", borderRadius: "8px" }}
                  />
                  <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
                    <Typography variant="body1">{latestBlog.title}</Typography>
                    <Box display={"flex"} gap={"10px"}>
                      <Avatar
                        alt={latestBlog.author.name}
                        src={latestBlog.author.avatar.url}
                      />
                      <Box>
                        <Typography variant="body2">
                          {latestBlog.author.name}
                        </Typography>
                        <Box sx={{ opacity: ".6" }}>
                          {format(
                            new Date(latestBlog.createdAt),
                            "dd MMM, yyyy"
                          )}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Divider sx={{ marginTop: "20px" }} />
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          padding={"20px"}
          border={"1px solid gray"}
          borderRadius={"8px"}
          marginTop={"20px"}
        >
          <Typography variant="h5">Categories</Typography>
          <Box
            sx={{ display: "flex", flexDirection: "column", marginTop: "20px" }}
          >
            {categories.map(category => (
              <Fragment key={category.slug}>
                <Button
                  fullWidth
                  sx={{ justifyContent: "flex-start", height: "50px" }}
                  onClick={() => router.push(`/category/${category.slug}`)}
                >
                  {category.label}
                </Button>
              </Fragment>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
