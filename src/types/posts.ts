export interface Post {
    url: string;
    frontmatter: {
      title: string;
      tags: string[];
    };
  }