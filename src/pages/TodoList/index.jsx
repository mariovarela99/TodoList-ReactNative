import React from "react";
import { View, Button, Text, Image, StyleSheet } from "react-native";
import electron from "../../assets/images/electronjs.jfif";
import js from "../../assets/images/js.png";
import { Container, ImageStyles } from "./styles";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  button: {
    height: 40,
    flex: 1,
    color: "#616261",
    background: "transparent",
  },
});

const TodoList = ({ navigation }) => {
  return (
    <Container>
      <h1> Todo List </h1>
      <ul>
        <li>
          <Image styles={styles.tinyLogo} source={electron} />
          <Button
            styles={styles.button}
            title="Iniciar com React Native"
            onPress={() => navigation.navigate("Details")}
          />
        </li>
      </ul>
    </Container>
  );
};

export default TodoList;
