/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

//type Props = {};
export default class Itens extends Component/*<Props>*/ {

  render() {
    return (
      <View>
        <Image style={{height:100, width:100}} source={{uri: this.props.item.foto}}/>
        <Text>{this.props.item.titulo}</Text>
        <Text>{this.props.item.valor}</Text>
        <Text>{this.props.item.local_anuncio}</Text>
      </View>
    );
  }
}
