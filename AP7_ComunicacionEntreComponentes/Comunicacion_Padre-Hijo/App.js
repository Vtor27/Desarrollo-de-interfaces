import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import ComponenteHijo from "./components/ComponenteHijo";

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      mensajeHijo: "",
    };
  }

  //Método para actualizar el mensaje del hijo.
  manejarRespuestaHijo = (mensaje) => {
    this.setState({mensajeHijo: mensaje});
  }

  //Método para borrar el mensaje.
  borrarMensaje = () => {
    this.setState({mensajeHijo: ""});
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Comunicación Padre-Hijo</Text>
        <ComponenteHijo 
        mensajeHijo="Hola desde el componente Padre!"
        alResponderHijo={this.manejarRespuestaHijo}/>
        <Text style={styles.respuesta}>{this.state.mensajeHijo}</Text>
        <View style={styles.button}>
          <Button 
          title="BORRAR MENSAJE"
          onPress={this.borrarMensaje} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef2f3",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    marginBottom: 20,
  },
  respuesta: {
    fontSize: 27,
    marginTop: 20,
    color: "blue",
  },
  button: {
    marginTop: 20,
  },
});
