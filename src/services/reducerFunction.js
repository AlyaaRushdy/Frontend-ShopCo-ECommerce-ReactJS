export default function reducer(products, action) {
  switch (action.type) {
    case "DELETE":
      return products.filter((p) => p.id != action.product.id);

    case "INCREMENT":
      return [
        ...products.map((p) => {
          if (p === action.product) {
            return { ...p, count: action.product.count++ };
          }
          return p;
        }),
      ];

    case "DECREMENT":
      return [
        ...products.map((p) => {
          if (p === action.product) {
            return { ...p, count: action.product.count-- };
          }
          return p;
        }),
      ];

    case "ADD":
      return [
        ...products,
        {
          ...action.product,
          count: action.count,
          price: action.priceAfterDiscount,
          size: action.size,
        },
      ];

    default:
      console.log("unknown action!");
      break;
  }
}
