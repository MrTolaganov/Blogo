const navItems = [
  {
    route: "/",
    label: "Home",
  },
  {
    route: "/categories",
    label: "Categories",
  },
  {
    route: "/blogs",
    label: "Blogs",
  },
];

const data = [
  {
    image:
      "https://hygraph.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FaXpgne7DT7OVrf6VH1U9&w=1200&q=75",
    title: "Technical SEO with Hygraph",
    except: "Get started with your SEO implementation when using a Headles CMS",
    author: {
      name: "Otabek Tulaganov",
      image:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  },
  {
    image: "https://media.graphassets.com/YqGV8vWVRsGsM7Ydx04k",
    title: "Union Types and Sortable Relations with Hygraph",
    except: "Learn more about Ploymorphic and Sortable Relation with Hygraph",
    author: {
      name: "Hayotjon Sultonov",
      image:
        "https://images.pexels.com/photos/11392/pexels-photo-11392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  },
];


export { navItems, data };
