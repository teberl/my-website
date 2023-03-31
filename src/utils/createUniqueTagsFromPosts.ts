import type { CollectionEntry } from 'astro:content';

export default function createUniqueTagsFromPosts(posts: CollectionEntry<"posts">[]) {
    return [
        ...new Set(posts.map((post) => post.data.tags).flat())
      ];
}