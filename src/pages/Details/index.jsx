import React, { useEffect, useState } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { Container } from "./styles";

const styles = StyleSheet.create({
  image: {
    marginTop: 10,
    height: 200,
    width: 200,
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
    margin: 2,
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
    console.log("Selected Todo => ", route.params.todo.item);
    setTodo(route.params.todo.item);
  }, []);

  return (
    <Container>
      <Image
        style={styles.image}
        source={require("../../assets/images/js.png")}
      />
      <h1> {todo.title} </h1>
      <Text style={styles.desc}> {todo.desc} </Text>
      <View style={styles.dates}>
        <Text style={styles.date}> Criado em: {todo.createdAt} </Text>
        <Text style={styles.date}> Para: {todo.doAt} </Text>
      </View>
    </Container>
  );
};

export default Details;
