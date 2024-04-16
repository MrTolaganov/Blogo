export interface BlogsType {
  slug: string;
  title: string;
  description: {
    text: string;
    html: string;
  };
  id: string;
  except: string;
  image: {
    url: string;
  };
  category: {
    label: string;
    slug: string;
  };
  author: {
    name: string;
    avatar: {
      url: string;
    };
  };
  createdAt: Date;
}
