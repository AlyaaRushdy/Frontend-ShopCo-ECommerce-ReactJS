const acceptedCategories = [
  "mens-shoes",
  "mens-shirts",
  "womens-bags",
  "tops",
  "womens-shoes",
  "womens-dresses",
  "mens-watches",
  "sunglasses",
  "womens-jewellery",
  "womens-watches",
];
async function getMenProducts() {
  const results = await Promise.all([
    fetch("https://dummyjson.com/products/category/mens-shoes")
      .then((res) => res.json())
      .then((res) => res.products),
    fetch("https://dummyjson.com/products/category/mens-shirts")
      .then((res) => res.json())
      .then((res) => res.products),
  ])
    .then((res) => res.flat())
    .then((res) => res.sort(() => 0.5 - Math.random()))
    .catch((err) => {
      console.log(err);
    });

  return results;
}

async function getWomenProducts() {
  const results = await Promise.all([
    fetch("https://dummyjson.com/products/category/womens-bags")
      .then((res) => res.json())
      .then((res) => res.products),
    fetch("https://dummyjson.com/products/category/tops")
      .then((res) => res.json())
      .then((res) => res.products),
    fetch("https://dummyjson.com/products/category/womens-shoes")
      .then((res) => res.json())
      .then((res) => res.products),
    fetch("https://dummyjson.com/products/category/womens-dresses")
      .then((res) => res.json())
      .then((res) => res.products),
  ])
    .then((res) => res.flat())
    .then((res) => res.sort(() => 0.5 - Math.random()))
    .catch((err) => {
      console.log(err);
    });

  return results;
}

async function getAccessories() {
  const results = await Promise.all([
    fetch("https://dummyjson.com/products/category/mens-watches")
      .then((res) => res.json())
      .then((res) => res.products),
    fetch("https://dummyjson.com/products/category/sunglasses")
      .then((res) => res.json())
      .then((res) => res.products),
    fetch("https://dummyjson.com/products/category/womens-jewellery")
      .then((res) => res.json())
      .then((res) => res.products),
    fetch("https://dummyjson.com/products/category/womens-watches")
      .then((res) => res.json())
      .then((res) => res.products),
  ])
    .then((res) => res.flat())
    .then((res) => res.sort(() => 0.5 - Math.random()))
    .catch((err) => {
      console.log(err);
    });

  return results;
}

export async function getProduct(id) {
  const product = await fetch(`https://dummyjson.com/products/${id}`).then(
    (res) => res.json()
  );
  return product;
}

export async function getSearchResaults(query) {
  const results = await fetch(
    `https://dummyjson.com/products/search?q=${query}`
  )
    .then((res) => res.json())
    .then((res) => res.products)
    .then((res) => res.filter((p) => acceptedCategories.includes(p.category)));

  return results;
}

export async function getProductsInCategory(category) {
  const results = await fetch(
    `https://dummyjson.com/products/category/${category}`
  )
    .then((res) => res.json())
    .then((res) => res.products);

  return results;
}

export const menProducts = await getMenProducts();
export const womenProducts = await getWomenProducts();
export const accessories = await getAccessories();
export const allProducts = [
  ...accessories,
  ...menProducts,
  ...womenProducts,
].sort(() => 0.5 - Math.random());
