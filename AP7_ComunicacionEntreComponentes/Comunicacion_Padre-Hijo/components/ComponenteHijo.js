import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

/**class ComponenteHijo extends Component{} */
export default class ComponenteHijo extends Component {

  render() {
    const mensajeDelPadre = this.props.mensajeHijo; /**Recoge el valor que viene del padre. */
    const alResponderHijo = this.props.alResponderHijo; /**Recoge el valor que viene del padre. */

    /** 
     * alResponderHijo={this.manejarRespuestaHijo}
     * manejarRespuestaHijo tiene solo un parametro: (mensaje)
     * */ 
    return(
        <View style={styles.containerHijo}>
            <Text style={styles.textoMensaje}>{mensajeDelPadre}</Text>
            <Button 
                title="Responder al Padre"
                onPress={() => alResponderHijo("Hola desde el componente Hijo!")}>
            </Button>
        </View>
    )
  }
}

/**export default ComponenteHijo; */
const styles = StyleSheet.create({
  containerHijo: {
    alignItems: "center",
    backgroundColor: "#eef2f3",
  },
  textoMensaje: {
    marginBottom: 10,
    fontSize: 16,
    color: "black",
  },
});
