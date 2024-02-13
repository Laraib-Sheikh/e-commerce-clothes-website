import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
  {
    img: "/jacket-1.jpg",
    title: "Jacket",
    desc: "MEN Yarn Fleece Full-Zip Jacket",
    rating: 2,
    price: "45.00$",
  },
  {
    img: "/skirt-1.jpg",
    title: "skirt",
    desc: "Black Florap wrap Midi skirt",
    rating: 4,
    price: "45.00$",
  },
  {
    img: "/party-wear-1.jpg",
    title: "Party-wear",
    desc: "Women's party wear shoe",
    rating: 2,
    price: "45.00$",
  },
  {
    img: "/shirt-1.jpg",
    title: "shirt",
    desc: "Pure Garments Dyed Cotton Shirt",
    rating: 1,
    price: "45.00$",
  },
  {
    img: "/sports-1.jpg",
    title: "sports",
    desc: "Trekking and Runing shoes - Black",
    rating: 5,
    price: "45.00$",
  },
  {
    img: "/watch-1.jpg",
    title: "watch",
    desc: "Smart watch VitalPlus",
    rating: 1,
    price: "45.00$",
  },
  {
    img: "/watch-2.jpg",
    title: "watch",
    desc: "Pocket watch Leather Pouch",
    rating: 5,
    price: "45.00$",
  },
];
const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2x1 pb-4">New Products</h2>
        <div
          className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
            lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-y-10"
        >
          {productsData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
