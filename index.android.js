/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
  import { Container, Content, Form, Item, Input, Label,Card, CardItem, Body,Drawer  } from 'native-base';
  import SideBar from './yourPathToSideBar';
export default class TestDemo extends Component {
  render() {
closeDrawer = () => {
        this._drawer._root.close()
      };
      openDrawer = () => {
        this._drawer._root.open()
      };
        return (
            <Drawer
              ref={(ref) => { this._drawer = ref; }}
              content={<SideBar navigator={this._navigator} />}
              onClose={() => this.closeDrawer()}
            >
            // Main View
          </Drawer>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TestDemo', () => TestDemo);
