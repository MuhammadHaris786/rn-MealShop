import { View, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import category from "../../api/category";
import Meals from "../screens/Meals";

const FrontPage = () => {
  const [allcategory, setAllCategory] = useState([]);
  useEffect(() => {
    categories();
  }, []);
  const categories = async () => {
    const response = await category.get("/");
    console.warn(response.data.categories);
    console.warn("Frontpage.js line 12");
    setAllCategory(response.data.categories);
  };
  return (
    <FlatList
      data={allcategory}
      renderItem={(item) => {
        return (
          <Meals
            name={item.item.strCategory}
            description={item.item.strCategoryDescription}
            url={item.item.strCategoryThumb}
          />
        );
      }}
    />
  );
};

export default FrontPage;
