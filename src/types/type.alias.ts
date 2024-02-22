type Article = {
  postId: number;
  title: string;
  subTitle: string;
  post: string;
  author: string;
  dateTime?: Date;
};

const articleOne: Article = {
  postId: 1,
  title: 'This is a post',
  subTitle: 'This is sub title',
  post: 'Lorem Ipsum',
  author: 'Lakshan Costa',
  dateTime: new Date(),
};

const articleTwo: Article = {
  postId: 2,
  title: 'This is a post',
  subTitle: 'This is sub title',
  post: 'Lorem Ipsum',
  author: 'Lakshan Costa',
};

// nested object

type Caterer = {
  name: string;
  address: string;
  phone: string;
};

type Airplane = {
  model: string;
  flightNumber: string;
  timeOfDeparture: Date;
  timeOfArrival: Date;
  caterer: Caterer;
};

const airplane: Airplane = {
  model: 'Airbus A380',
  flightNumber: 'A2206',
  timeOfDeparture: new Date(),
  timeOfArrival: new Date(),
  caterer: {
    name: 'Speacial Food Ltd',
    address: '484, Main street, New York',
    phone: '+1 254 789 896',
  },
};

console.log(airplane);
