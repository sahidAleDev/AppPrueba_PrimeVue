export const ProductService = {
  getProductsData() {
    return [
      {
        name: "Air Max",
        brand: "Nike",
        price: 100,
        image: "/img1.png",
        inventoryStatus: "Out of Stock",
        inExistence: false,
      },
      {
        name: "Ultraboost",
        brand: "Adidas",
        price: 150,
        image: "/img2.png",
        inventoryStatus: "Low",
        inExistence: true,
      },
      {
        name: "Suede Classic",
        brand: "Puma",
        price: 120,
        image: "/img3.png",
        inventoryStatus: "In Stock",
        inExistence: true,
      },
      {
        name: "Nano",
        brand: "Reebok",
        price: 90,
        image: "/img1.png",
        inventoryStatus: "In Stock",
        inExistence: true,
      },
      {
        name: "Gel-Kayano",
        brand: "Asics",
        price: 200,
        image: "/img2.png",
        inventoryStatus: "Low",
        inExistence: true,
      },
      {
        name: "990v5",
        brand: "New Balance",
        price: 120,
        image: "/img3.png",
        inventoryStatus: "Out of Stock",
        inExistence: false,
      },
    ];
  },
};
