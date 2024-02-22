// Example one
interface Animal {
  name: string;
}

interface Flyable {
  fly(): void;
}

type Bird = Animal & Flyable;

const bird: Bird = {
  name: 'Eagle',
  fly() {
    console.log('Flying high!');
  },
};

// Example two
interface Printable {
  print(): void;
}

interface Editable {
  edit(): void;
}

type DocumentFile = Printable & Editable;

class TextDocument implements DocumentFile {
  print() {
    console.log('Printing text document...');
  }

  edit() {
    console.log('Editing text document...');
  }
}

// Example three
type UserID = string;
type User = {
  id: UserID;
  name: string;
};

function printUserInfo(user: User & { age: number }) {
  console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
}

const currentUser: User = { id: '123', name: 'John' };
printUserInfo({ ...currentUser, age: 30 });
