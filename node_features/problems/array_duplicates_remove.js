// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let cars = [
  {
    "id": 1,
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2017-01-03'),
    "capacity": 7
  },
  {
    "id": 2,
    "color": "red",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": 5
  },
  {
	"id": 1,
    "color": "red",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": 5
  },
  {
	"id": 4,
    "color": "red",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": 5
  }
];

// Remove duplicates by `id`
const uniqueCars = cars.filter((car, index, array) => 
  array.findIndex(obj => obj.id === car.id) === index
);

console.log(uniqueCars);




