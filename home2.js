//ex1

const address = {
  street: "a",
  city: "b",
  zipCode: 1111,
};

function showAddress(address) {
  for (let key in address) {
    console.log(key, address[key]);
  }
}

showAddress(address);

//ex2

//factory fuctions

function createAdress(street, city, zipccde) {
  return {
    street,
    city,
    zipccde,
  };
}

const newAdr = createAdress("abc", "dfg", 1234);
console.log(newAdr);

//constructor function

function Address(street, city, zipccde) {
  this.street = street;
  this.city = city;
  this.zipCode = zipccde;
}

const consrtAddress = new Address("Street Lia", "Manchester", 55555);
console.log(consrtAddress);

//ex3

let adr1 = new Address("a", "b", "c");
let adr2 = new Address("a", "b", "c");
let adr3 = adr1;

//adr1 = adr2;

function areEqual(adr1, adr2) {
  return (
    adr1.address === adr2.address &&
    adr1.city === adr2.city &&
    adr1.zipCode === adr2.zipCode
  );
}

function areSame(adr1, adr2) {
  //links to the same obj
  if (adr1 === adr2) {
    return true;
  } else return false;
}

console.log(areEqual(adr1, adr2));
console.log(areSame(adr1, adr2));

//ex4
//blog post objects

let blogPost = {
  title: "a",
  body: "b",
  author: "c",
  views: 10,
  comments: [
    { author: "a", body: "b" },
    { author: "c", body: "d" },
  ],

  isAlive: true,
};

console.log(blogPost);

//ex5

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isAlive = false;
}

let post = new Post("a", "b", "c");
console.log(post);

//ex5

let priceRanges = [
  { label: "$", tooltip: "Inexpensive", minPerPeson: 0, maxPerPerson: 10 },
  { label: "$$", tooltip: "Moderate", minPerPeson: 11, maxPerPerson: 20 },
  { label: "$$$", tooltip: "Expensive", minPerPeson: 21, maxPerPerson: 50 },
];

let restaurants = [{ averagePerPesons: 5 }];
