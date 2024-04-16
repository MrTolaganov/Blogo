import { request, gql } from "graphql-request";
import { BlogsType } from "../interfaces/blogs.interface";
import { CategoriesType } from "../interfaces/categories.interface";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;

export const BlogService = {
  async getBlogs() {
    const query = gql`
      query GetBlogs {
        blogs {
          slug
          title
          description {
            html
            text
          }
          id
          except
          image {
            url
          }
          category {
            label
            slug
          }
          author {
            name
            avatar {
              url
            }
          }
          createdAt
        }
      }
    `;
    const result = await request<{ blogs: BlogsType[] }>(graphqlAPI, query);
    return result.blogs;
  },

  async getLatestBlogs() {
    const query = gql`
      query GetLatestBlogs {
        blogs(last: 2) {
          slug
          title
          id
          except
          image {
            url
          }
          author {
            name
            avatar {
              url
            }
          }
          createdAt
          description {
            text
            html
          }
        }
      }
    `;
    const result = await request<{ blogs: BlogsType[] }>(graphqlAPI, query);
    return result.blogs;
  },

  async getCategories() {
    const query = gql`
      query GetCategories {
        categories {
          label
          slug
        }
      }
    `;
    const result = await request<{ categories: CategoriesType[] }>(
      graphqlAPI,
      query
    );
    return result.categories;
  },

  async getDetailedBlog(slug: string) {
    const query = gql`
      query GetDetailedBlog($slug: String!) {
        blog(where: { slug: $slug }) {
          slug
          title
          description {
            html
            text
          }
          id
          except
          image {
            url
          }
          category {
            label
            slug
          }
          author {
            name
            avatar {
              url
            }
          }
          createdAt
        }
      }
    `;
    const result = await request<{ blog: BlogsType }>(graphqlAPI, query, {
      slug,
    });
    return result.blog;
  },

  async getDetailedCategories(slug: string) {
    const query = gql`
      query GetDetailedCategories($slug: String!) {
        blogs(where: { category: { slug: $slug } }) {
          slug
          title
          description {
            html
            text
          }
          id
          except
          image {
            url
          }
          category {
            label
            slug
          }
          author {
            name
            avatar {
              url
            }
          }
          createdAt
        }
      }
    `;
    const result = await request<{ blogs: BlogsType[] }>(graphqlAPI, query, {
      slug,
    });
    return result.blogs;
  },
};
