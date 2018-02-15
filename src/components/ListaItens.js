/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View, ScrollView
} from 'react-native';
import Itens from './Itens';
import axios from 'axios';
//type Props = {};
export default class ListaItens extends Component/*<Props>*/ {

 constructor(props)
  {
    super(props);
    this.state = {listaItens:[]};
  }

  componentWillMount()
  {
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
    .then((response) => {this.setState({listaItens: response.data});})
    .catch(() => {console.log("Erro ao recuperar dados");});

  }

  render() {
    //console.log("Objeto reinderizado");
    return (
      <ScrollView>
          {this.state.listaItens.map((item) => (<Itens key={item.titulo}  item={item}/>))}
      </ScrollView>
    );
  }
}
