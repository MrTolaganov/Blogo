import { Avatar, Box, Typography } from "@mui/material";
import Image from "next/image";
import { format } from "date-fns";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { HeroTypes } from "./hero.props";
import { calcEstimatedTime } from "../../helpers/time.format";
import { useRouter } from "next/router";

export default function Hero({ blogs }: HeroTypes) {
  const router = useRouter();

  return (
    <Box width={"100%"} height={"70vh"} sx={{ backgroundColor: "red" }}>
      <Carousel
        responsive={{
          mobile: {
            breakpoint: { max: 4000, min: 0 },
            items: 1,
          },
        }}
      >
        {blogs.map(blog => (
          <Box
            key={blog.id}
            sx={{ cursor: "pointer" }}
            onClick={() => router.push(`blog/${blog.slug}`)}
          >
            <Box sx={{ position: "relative", width: "100%", height: "70vh" }}>
              <Image
                src={blog.image.url}
                alt={blog.title}
                fill
                style={{ objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, .6)",
                }}
              />
              <Box
                width={{ xs: "100%", md: "70%" }}
                position={"relative"}
                color={"white"}
                zIndex={999}
                sx={{
                  top: "50%",
                  transform: "translateY(-50%)",
                  paddingLeft: { xs: "10px", md: "50px" },
                }}
              >
                <Typography sx={{ fontSize: { xs: "30px", md: "50px" } }}>
                  {blog.title}
                </Typography>
                <Typography sx={{ fontSize: { xs: "20px", md: "25px" } }}>
                  {blog.except}
                </Typography>
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
                    <Box>
                      {format(new Date(blog.createdAt), "dd MMM, yyyy")}{" "}
                      &#x2022; {calcEstimatedTime(blog.description.text)}min
                      read
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
