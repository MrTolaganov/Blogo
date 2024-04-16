import { GetServerSideProps } from "next";
import { BlogService } from "../../services/blog.service";
import { CategoriesType } from "../../interfaces/categories.interface";
import Layout from "../../layouts/layout";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { useRouter } from "next/router";
import SEO from "../../layouts/seo/seo";

export default function Categories({ categories }: CategoriesProps) {
  const router = useRouter();
  
  return (
    <SEO metaTitle="Categories">
      <Layout>
        <Box
          width={{ xs: "100%", md: "80%" }}
          height={{ xs: "30vh", md: "50vh" }}
          marginX={"auto"}
          marginTop={"10vh"}
          borderRadius={"8px"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          rowGap={"10px"}
          sx={{ backgroundColor: "black" }}
        >
          <Typography variant="h3" fontFamily={"cursive"}>
            All Categories
          </Typography>
          <ButtonGroup variant="contained" aria-label="Basic button group">
            {categories.map(category => (
              <Button
                key={category.slug}
                onClick={() => router.push(`/category/${category.slug}`)}
              >
                # {category.label}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
      </Layout>
    </SEO>
  );
}

export const getServerSideProps: GetServerSideProps<
  CategoriesProps
> = async () => {
  const categories = await BlogService.getCategories();

  return { props: { categories } };
};

interface CategoriesProps {
  categories: CategoriesType[];
}
