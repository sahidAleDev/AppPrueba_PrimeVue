export const ProductService = {
  getProductsData() {
    return [
      { id: 1, name: "Air Max", brand: "Nike", price: 100, image: "/img1.png", inventoryStatus: "outofstock", inExistence: false },
      { id: 2, name: "Ultraboost", brand: "Adidas", price: 150, image: "/img2.png", inventoryStatus: "lowstock", inExistence: true },
      { id: 3, name: "Suede Classic", brand: "Puma", price: 120, image: "/img3.png", inventoryStatus: "instock", inExistence: true },
      { id: 4, name: "Nano", brand: "Reebok", price: 90, image: "/img1.png", inventoryStatus: "instock", inExistence: true },
      { id: 5, name: "Gel-Kayano", brand: "Asics", price: 200, image: "/img2.png", inventoryStatus: "lowstock", inExistence: true },
      { id: 6, name: "990v5", brand: "New Balance", price: 120, image: "/img3.png", inventoryStatus: "outofstock", inExistence: false },
    ]
  },
};
