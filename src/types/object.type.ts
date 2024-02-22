let article: {
  postId: number;
  title: string;
  subTitle: string;
  post: string;
  author: string;
  dateTime?: Date;
};

article = {
  postId: 1,
  title: 'This is a post',
  subTitle: 'This is sub title',
  post: 'Lorem Ipsum',
  author: 'Lakshan Costa',
  dateTime: new Date(),
};

console.log(article);

article = {
  postId: 2,
  title: 'This is a post',
  subTitle: 'This is sub title',
  post: 'Lorem Ipsum',
  author: 'Lakshan Costa',
};

console.log(article);
