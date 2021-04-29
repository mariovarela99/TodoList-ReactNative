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
});

const TodoList = ({ navigation }) => {
  return (
    <Container>
      <h1> Todo List </h1>
      <ul>
        <li>
          {" "}
          <Image
            styles={styles.tinyLogo}
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          />
          <Button
            title="Iniciar com React Native"
            onPress={() => navigation.navigate("details")}
          />
        </li>
        <li>
          {" "}
          <Image styles={ImageStyles} source={js} />
          <Button
            title="Trabalhar no projecto DLIne Code"
            onPress={() => navigation.navigate("details")}
          />
        </li>
        <li>
          {" "}
          <Image styles={ImageStyles} source={js} />
          <Button
            title="Fazer a Calculadora em C# de TLP"
            onPress={() => navigation.navigate("details")}
          />
        </li>
        <li>
          {" "}
          <Image styles={ImageStyles} source={electron} />
          <Button
            title="Fazer o Trabalho de Educação Física"
            onPress={() => navigation.navigate("details")}
          />
        </li>
        <li>
          {" "}
          <Image styles={ImageStyles} source={js} />
          <Button
            title="Pausar Com a suposta baby.!"
            onPress={() => navigation.navigate("details")}
          />
        </li>
        <li>
          {" "}
          <Image styles={ImageStyles} source={electron} />
          <Button
            title="Reslver os Casos de Física"
            onPress={() => navigation.navigate("details")}
          />
        </li>
      </ul>
    </Container>
  );
};

export default TodoList;
