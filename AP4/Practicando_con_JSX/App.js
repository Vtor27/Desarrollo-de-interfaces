import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Button, TextInput } from "react-native-paper";
import iconButton from "./assets/iconButton.png";

const nombre = (nombre) => {
  return <Text style={styles.nombre}>{nombre}</Text>;
};

const datos = (labelInput) => {
  return (
    <View style={estilos === 'florida' ? styles.florida : styles.upv}>
      <TextInput
      label={labelInput}
      placeholder="Introduce tus datos..."
      placeholderTextColor={estilos === 'florida' ? 'white' : 'orange'} 
      />

      <TextInput
      label="Segunda línea."
      placeholder="Placeholder de la segunda línea."
      placeholderTextColor={estilos === 'florida' ? 'white' : 'orange'}
      />
  </View>
  )
};

const botonInformes = () => {
  return (
    <Button
    icon={iconButton}
    mode="contained"
    style={{borderRadius: 10}}
    marginBottom={10}
    onPress={() => {}}>
      INFORMES
    </Button>
  )
}

const estilos = 'florida';
const isAdmin = true;
const modulos2Dam = [
  { nombre: 'DIN', profesor: 'Manel', horas: 120 },
  { nombre: 'ADA', profesor: 'Juanmi', horas: 120 },
  { nombre: 'PMDM', profesor: 'Fran', horas: 100 },
  { nombre: 'PSP', profesor: 'Fran', horas: 60 },
  { nombre: 'SGE', profesor: 'Belén', horas: 100 },
  { nombre: 'Inglés', profesor: 'Caterina', horas: 40 },
  { nombre: 'EIE', profesor: 'Manuel', horas: 60 },
  ];

export default class App extends Component {
  render() {
    return (
    <>
      {nombre("Víctor González")}
      {datos("Introduce tus datos...")}
      {isAdmin && botonInformes()}
      <ScrollView>
        {modulos2Dam.map((modulo, index) => {
          return (
            <View
            style = {index % 2 ===0 ? styles.pares : styles.impares}
            key={index}>
              <Text>{index + 1}</Text>
              <Text>{modulo.nombre}</Text>
              <Text>{modulo.profesor}</Text>
              <Text>{modulo.horas}</Text>
            </View>
          )
        })}
      </ScrollView>
    </>
    );
  }
}

const styles = StyleSheet.create({
  nombre: {
    marginTop: 35,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  upv: {
    backgroundColor: 'purple',
    fontSize: 10,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'left',
    color: 'grey',
    },
    florida: {
    backgroundColor: 'red',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    margin: 20,
    textAlign: 'right',
    },
    pares: {
      backgroundColor: "#F48FB1",
      padding: 10,
    },
    impares: {
      backgroundColor: "#F8BBD0",
      padding: 10,
    }
});
