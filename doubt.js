let nums = [1, 2, 3, 4, 5];
let shoppingCart = [
  {
    product: "phone",
    qty: 1,
    price: 699,
  },
  {
    product: "Screen Protector",
    qty: 1,
    price: 9.98,
  },
  {
    product: "Memory Card",
    qty: 2,
    price: 20.99,
  },
];

console.log(nums.reduce((sum, num) => sum + num, 0));
console.log(
  shoppingCart.reduce(
    (totalPrice, item) => totalPrice + item.qty * item.price,
    0
  )
);

console.log(
  shoppingCart.map((item) =>
    item.product === "Screen Protector" ? { ...item, qty: item.qty + 1 } : item
  )
);

console.log(
  shoppingCart.reduce(
    (cart, item) =>
      item.product === "Screen Protector"
        ? [...cart, { ...item, qty: item.qty + 1 }]
        : [...cart, item],
    []
  )
);
