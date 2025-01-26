import React, { Component } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import InputCard from "./components/inputCard";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valuePeso: "",
      valueAltura: "",
      resultadoIMC: "",
    };
  }
  calcularIMC = () => {
    const peso = parseFloat(this.state.valuePeso);
    const altura = parseFloat(this.state.valueAltura);
    const resultadoIMC = peso / Math.pow(altura, 2);

    if (!this.state.valuePeso || !this.state.valueAltura) {
      alert("No puedes calcular nada si dejas algún campo vacío");
      return;
    }

    if (isNaN(peso) && isNaN(altura)) {
      alert("Introduce un valor válido");
      return;
    }

    if (resultadoIMC < 18.5) {
      this.setState({
        resultadoIMC: "Peso insuficiente",
        colorIMC: "green",
      });
    } else if (resultadoIMC >= 18.5 && resultadoIMC < 25) {
      this.setState({
        resultadoIMC: "Normopeso",
        colorIMC: "green",
      });
    } else if (resultadoIMC >= 25 && resultadoIMC < 27) {
      this.setState({
        resultadoIMC: "Sobrepeso grado I",
        colorIMC: "green",
      });
    } else if (resultadoIMC >= 27 && resultadoIMC < 30) {
      this.setState({
        resultadoIMC: "Sobrepeso grado II (preobesidad)",
        colorIMC: "orange",
      });
    } else if (resultadoIMC >= 30 && resultadoIMC < 35) {
      this.setState({
        resultadoIMC: "Obesidad de tipo I",
        colorIMC: "orange",
      });
    } else if (resultadoIMC >= 35 && resultadoIMC < 40) {
      this.setState({
        resultadoIMC: "Obesidad de tipo II",
        colorIMC: "orange",
      });
    } else if (resultadoIMC >= 40 && resultadoIMC < 50) {
      this.setState({
        resultadoIMC: "Obesidad de tipo III (mórbida)",
        colorIMC: "red",
      });
    } else {
      this.setState({
        resultadoIMC: "Obesidad de tipo IV (extrema)",
        colorIMC: "red",
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Calculadora IMC</Text>
        <View style={styles.contentContainer}>
          <View style={styles.box}>
            <Text style={[styles.title, { padding: 0 }, { marginLeft: 30 }]}>
              Datos
            </Text>
            <InputCard
              style={styles.input}
              titulo="Peso"
              placeholder="Intorduce tu peso en kilogramos..."
              value={this.state.valuePeso}
              onChangeText={(peso) => this.setState({ valuePeso: peso })}
            />
            <InputCard
              titulo="Altura"
              placeholder="Intorduce tu altura en metros..."
              value={this.state.valueAltura}
              onChangeText={(altura) => this.setState({ valueAltura: altura })}
              keyboardType="numeric"
            />
            <View style={styles.box}>
              <Pressable style={styles.button} onPress={this.calcularIMC}>
                <Text style={styles.buttonText}>Calcular IMC</Text>
              </Pressable>
              <View>
                <Text style={[styles.resultado, { marginTop: 10 }]}>
                  Resultado
                </Text>
                <Text
                  style={[
                    styles.resultado,
                    { color: this.state.colorIMC },
                    { fontSize: 20 },
                  ]}>
                  {this.state.resultadoIMC}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.textAuthor}>
          Created for Víctor González Devesa 2n DAM
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    color: "#FF0000",
    padding: 20,
    marginTop: 30,
  },
  box: {
    alignSelf: "stretch",
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "#4B0082",
    alignItems: "center",
  },
  contentContainer: {
    justifyContent: "flex-start",
    width: "95%",
  },
  button: {
    borderTopWidth: 1,
    borderBottomWidth: 2,
    borderColor: "#1E90FF",
    marginTop: 20,
    padding: 10,
    backgroundColor: "white",
    color: "black",
  },
  buttonText: {
    color: "#1E90FF",
    fontSize: 20,
    textAlign: "center",
    fontStyle: "bold",
  },
  textAuthor: {
    color: "gray",
    width: "100%",
    textAlign: "left",
    padding: 10,
    fontSize: 15,
  },
  resultado: {
    padding: 5,
    fontSize: 15,
  },
});
