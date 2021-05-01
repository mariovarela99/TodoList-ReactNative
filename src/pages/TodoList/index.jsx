import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";
import electron from "../../assets/images/electronjs.jfif";
import js from "../../assets/images/js.png";
import { Container } from "./styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
  TodoImage: {
    width: 75,
    height: 75,
    margin: 10,
  },
  logo: {
    width: 66,
    height: 58,
  },
  button: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyCOntent: "center",
    height: 40,
    padding: 8,
    backgroundColor: "#232323",
  },
  insideText: {
    height: 40,
    color: "#616261",
  },
  todoContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});

const TodoList = ({ navigation }) => {
  const DATA = [
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Iniciar Com React Native",
      desc: " Uma Description Basica do Todo.! ",
      imageUrl: "../../assets/images/js.png",
      createdAt: "22/07/2021",
      doAt: "25/07/2021",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Iniciar Com ElectronJS",
      desc: " Uma Description Basica do Todo.! ",
      imageUrl: "../../assets/images/js.png",
      createdAt: "22/07/2021",
      doAt: "02/08/2021",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Fazer a tarefa de TLP",
      desc: " Uma Description Basica do Todo.! ",
      imageUrl: "../../assets/images/js.png",
      createdAt: "22/07/2021",
      doAt: "02/08/2021",
    },
  ];

  const Item = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.todoContainer}>
        <Image
          style={styles.TodoImage}
          source={require("../../assets/images/js.png")}
        />
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("Details", {
            todo: { item },
          })
        }
      >
        <Text style={styles.insideText}> Detalhes </Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => {
    return <Item item={item} />;
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </>
  );
};

export default TodoList;
