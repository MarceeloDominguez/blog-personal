interface Post {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: {
    title: string;
    description: string;
    publishedAt: Date;
    publish: boolean;
  };
}

export const filterAndSortPosts = (posts: Post[]) => {
  return posts
    .filter((post) => post.data.publish)
    .sort(
      (a, b) =>
        new Date(b.data.publishedAt).getTime() -
        new Date(a.data.publishedAt).getTime()
    );
};
