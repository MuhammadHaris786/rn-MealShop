import { Text, View, Image } from "react-native";
// import React, { Component } from "react";
import FrontPage from "../components/FrontPage";
const Meals = (props) => {
  return (
    <View>
      <Image style={{ width: 140, height: 100 }} source={{ uri: props.url }} />

      <Text>{props.name}</Text>
      <Text>{props.description}</Text>
    </View>
  );
};

export default Meals;
