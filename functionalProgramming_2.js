(function sayHello() {
  console.log("123");
})();

const agents = [
  { id: 1, name: "Jett", isDuelist: false },
  { id: 2, name: "Raze", isDuelist: true },
  { id: 3, name: "Omen", isDuelist: false },
  { id: 4, name: "Reyna", isDuelist: false },
  { id: 5, name: "Pheonix", isDuelist: true },
];

// agents.sort((a, b) => {
//   if (a.name < b.name) return -1;
//   if (a.name > b.name) return 1;
//   return 0;
// });

// console.log(agents.slice(0, 3));

// agents.splice(1, 1);

console.log(agents);

const counts = new Array(10).fill(0);

counts[1]++;
console.log(counts);
console.log(isNaN(+"213a"));
