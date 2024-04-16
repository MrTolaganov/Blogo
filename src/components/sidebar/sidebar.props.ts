import { BlogsType } from "../../interfaces/blogs.interface";
import { CategoriesType } from "../../interfaces/categories.interface";

export interface SidebarTypes {
  latestBlogs: BlogsType[];
  categories: CategoriesType[];
}
