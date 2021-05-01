import React, { useEffect, useState } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { Container } from "./styles";

const styles = StyleSheet.create({
  ImageContainer: {
    flex: 1,
    background: "#232323",
    height: 200,
    width: 200,
    margin: 5,
  },
  desc: {
    flex: 1,
    color: "#636363",
    lineHeight: 2,
    fontSize: 14,
    fontWeight: 600,
    margin: 5,
  },
  dates: {
    flex: 1,
    margin: 5,
  },
  date: {
    flex: 1,
    color: "#345383",
    lineHeight: 2,
    fontSize: 16,
    fontWeight: 700,
    textTranasform: "uppercase",
  },
});

const Details = ({ navigation, route }) => {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    console.log("route => ", route.params.todo.item);
    setTodo(route.params.todo.item);
  }, []);

  return (
    <Container>
      <h1> {todo.title} </h1>
      <View styles={styles.ImageContainer}>
        <Image source={{ uri: "https://github.com/account" }} />
      </View>
      <Text styles={styles.desc}> {todo.desc} </Text>
      <View styles={styles.dates}>
        <Text styles={styles.date}> Criado em: {todo.createdAt} </Text>
        <Text styles={styles.date}> Para: {todo.doAt} </Text>
      </View>
    </Container>
  );
};

export default Details;
