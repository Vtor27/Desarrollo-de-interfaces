import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ElementoLista from "./components/ElementoLista";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marcas: [
        {
          nombre: "Peugeot",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Peugeot_Logo.svg/320px-Peugeot_Logo.svg.png",
        },
        {
          nombre: "Opel",
          img: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Opel-Logo_2017.png",
        },
        {
          nombre: "Renault",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Renault_2021_Text.svg/1024px-Renault_2021_Text.svg.png",
        },
        {
          nombre: "Seat",
          img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/SEAT_Logo_from_2017.png",
        },
        {
          nombre: "Fiat",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/FIAT_logo_%282020%29.svg/1280px-FIAT_logo_%282020%29.svg.png",
        },
        {
          nombre: "Volkswagen",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/600px-Volkswagen_logo_2019.svg.png",
        },
      ],
    };
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.title}>Marcas de automóviles</Text>
          <FlatList
            data={this.state.marcas}
            keyExtractor={(item, index) => item.nombre + index.toString()}
            renderItem={({ item }) => <ElementoLista marca={item} />}
          />
        </View>
        <View style={styles.footer}>
          <Text style={{fontSize: 20}}>Prueba a hacer scroll</Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 60,
    marginBottom: 30,
  },
  footer: {
    height:100,
    alignItems: "center",
    justifyContent: "center",
  },
});
