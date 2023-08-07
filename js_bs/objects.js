//порядок свойств не имеет значения

//получение доступа к полям объекта

const myCity = {
  city: "Penza",
  popular: true,
  country: "Rus",
};

console.log(myCity.city);

myCity.city = "Len";
console.log(myCity.city);

myCity.popul = 10000;

console.log(myCity);

//delete
delete myCity.popul;
console.log(myCity);

myCity["born"] = 1943;
console.log(myCity);

const countryProperyName = "dis";
myCity[countryProperyName] = 13456;
console.log(myCity);

myCity.dis1 = 222222;

console.log(myCity);

//использование переменых при формировании объекта
const nameN = "Bogdan";
const postQty = 23;

const userProfile = {
  name: nameN,
  postQty: postQty,
  hasSignedAgreement: false,
};

//сокращенный формат записи
const userProfile1 = {
  nameN,
  postQty,
  hasSignedAgreement: false,
};
