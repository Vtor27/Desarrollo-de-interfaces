import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default class ElementoLista extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={styles.containerImage}>
          <ImageBackground
            style={styles.imageBackground}
            source={{ uri: this.props.marca.img }}
            resizeMode="contain">
            <Text style={styles.text}>{this.props.marca.nombre}</Text>
          </ImageBackground>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  containerImage: {
    borderColor: "black",
    borderWidth: 3,
    width: 370,
    height: 100,
    marginBottom: 20,
    backgroundColor: "gray",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    marginLeft: 5,
    marginBottom: 65,
  },

});
