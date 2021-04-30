import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";

import { Container } from "./styles";

const Details = ({ navigation, route }) => {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    console.log("route => ", route.params.todo.item);
    setTodo(route.params.todo.item);
  }, []);

  return (
    <Container>
      <h1> {todo.title} </h1>
      <Text> {todo.desc} </Text>
      <Image source={{ uri: todo.imageUrl }} />
      <Text> {todo.createdAt} </Text>
      <Text> {todo.doAt} </Text>
    </Container>
  );
};

export default Details;
