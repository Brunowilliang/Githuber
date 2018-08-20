import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";

import PropTypes from 'prop-types';

import { StackActions, NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from "./style";

class HeaderRight extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  }

  signOut = async () => {
    await AsyncStorage.clear();

    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Welcome' }),
      ],
    });

    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.signOut}>
        <Icon name="exchange" size={16} style={styles.icon} />
      </TouchableOpacity>
    );
  }
}
export default HeaderRight;
