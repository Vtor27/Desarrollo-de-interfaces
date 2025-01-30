import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nif: "",
      text: "Letra",
      letras: [
        "T",
        "R",
        "W",
        "A",
        "G",
        "M",
        "Y",
        "F",
        "P",
        "D",
        "X",
        "B",
        "N",
        "J",
        "Z",
        "S",
        "Q",
        "V",
        "H",
        "L",
        "C",

        
        "K",
        "E",
        "T",
      ],
    };
  }
  calcularNif = (nif) => {
    const {letras} = this.state;

    if (nif.length == 8) {
      const number = parseInt(nif, 10);
      const posLetra = letras[number % 23];
      this.setState ({text : posLetra});
    } else {
      this.setState ({text : "Letra"});
    }
  };

  handleInputNumber = (number) => {
    const numberNIF = number.replace(/[^0-9]/g, "");
    this.setState({nif: numberNIF}, () => {
      this.calcularNif(numberNIF);
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Calculador Letra NIF</Text>
        <Text style={[styles.text, { color: "purple" }]}>
          App para calcular la letra del NIF:
        </Text>
        <View style={styles.viewNIF}>
          <TextInput
            style={styles.input}
            placeholder="NIF"
            onChangeText={this.handleInputNumber}
            keyboardType="numeric"
            value={this.nif}
            maxLength={8}
          />
          <Text style={styles.letra}>{this.state.text}</Text>
        </View>
      </View>
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
    viewNIF: {
      flexDirection: "row",
      alignItems: "center",
      alignContent: "space-between",
      marginTop: 15,
    },
    letra: {
      color: "blue",
      fontSize: 25,
      borderBottomWidth: 1,
      borderColor: "blue",
      minWidth: 30,
      paddingBottom: 5,
    },
    titulo: {
      color: "green",
      textAlign: "center",
      fontSize: 50,
      marginBottom: 20,
    },
    text: {
      color: "black",
      textAlign: "center",
      fontSize: 20,
      marginBottom: 20,
    },
    input: {
      borderBottomWidth: 1,
      borderColor: "red",
      fontSize: 20,
      minWidth: 100,
    },
  });
