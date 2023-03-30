import type { Post } from '../types/posts';

export default function createUniqueTagsFromPosts(posts: Post[]) {
    return [
        ...new Set(posts.map((post) => post.frontmatter.tags).flat())
      ];
}