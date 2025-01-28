import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import FotoPerfil from "./assets/FotoPerfil.jpg";
const screenWidth = Dimensions.get("window").width;
const images = [
  "https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=125&h=125&fit=crop",
  "https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=125&h=125&fit=crop",
  "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=125&h=125&fit=crop",
  "https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=125&h=125&fit=crop",
  "https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=125&h=125&fit=crop",
  "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=125&h=125&fit=crop",
  "https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=125&h=125&fit=crop",
  "https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=125&h=125&fit=crop",
  "https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=125&h=125&fit=crop",
  "https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=125&h=125&fit=crop",
  "https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=125&h=125&fit=crop",
];

const infoPerfil = (nombreInfo, numeros) => {
  return (
    <View style={styles.infoPerfil}>
      <Text style={styles.nombreInfo}>{nombreInfo}</Text>
      <Text style={styles.numeroInfo}>{numeros}</Text>
    </View>
  );
};

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.fotoPerfil} source={FotoPerfil} />
          <View style={styles.cajaEditarPerfil}>
            <View style={[styles.infoPerfilContainer]}>
              {infoPerfil("Posts", 20)}
              {infoPerfil("Followers", 110304)}
              {infoPerfil("Following", 1103)}
            </View>
            <TouchableOpacity style={styles.buttonProfile}>
              <Text>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
          <View style={styles.imagesContainer}>
            {images.map((image, index) => (
              <View key={index} style={{ margin: 2 }}>
                <Image
                  source={{ uri: image }}
                  style={styles.image}
                />
              </View>
            ))}
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    marginTop: 60,
    marginBottom: 40,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  fotoPerfil: {
    borderRadius: 100,
    width: 110,
    height: 110,
  },
  image: {
    width: 95,
    height: 95,
  },
  imagesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
  },  
  infoPerfilContainer: {
    justifyContent: "space-around",
    flexDirection: "row",
    width: '100%',
  },
  cajaEditarPerfil: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  infoPerfil: {
    alignItems: "center",
    justifyContent: "center",
  },
  nombreInfo: {
    fontSize: 15,
    fontWeight: "bold",
  },
  numeroInfo: {
    fontSize: 15,
  },
  buttonProfile: {
    backgroundColor: "lightblue",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    padding: 3,
    marginTop: 10,
  },
});
