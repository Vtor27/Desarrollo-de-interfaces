import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

export default class InputCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            titulo: '',
            placeholder: '',
            value: '',
            onChangeText:''
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.titulo}</Text>
                <TextInput
                style={styles.input}
                placeholder={this.props.placeholder}
                keyboardType='numeric'
                value={this.props.value}
                onChangeText={this.props.onChangeText}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title : {
      fontSize: 25,
      fontWeight: "bold",
      color: "#0000CD",
      padding: 0,
      alignSelf: 'start',
      paddingLeft: 20,
    },  
    input: {
        fontSize: 20,
        borderBottomWidth: 1,
        width: "90%",
    },
    container: {
      alignItems: "center",
      justifyContent: "top",
      paddingTop: 10,
      paddingBottom: 20,
    },
  });
  