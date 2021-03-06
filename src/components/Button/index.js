// ===== Button
// import all modules
import React, {Fragment} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Button(props) {
  return (
    <Fragment>
      <TouchableOpacity
        disabled={props.disabled ? true : false}
        style={styles.button(props.disabled)}
        onPress={props.onPress}>
        <Text style={styles.text(props.disabled)}>{props.children}</Text>
      </TouchableOpacity>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  button: function (isDisabled) {
    if (isDisabled) {
      return {
        paddingVertical: 16,
        width: '100%',
        backgroundColor: '#DADADA',
        borderRadius: 10,
      };
    } else {
      return {
        paddingVertical: 16,
        width: '100%',
        backgroundColor: '#ff1616',
        borderRadius: 10,
      };
    }
  },
  text: function (isDisabled) {
    if (isDisabled) {
      return {
        textAlign: 'center',
        color: '#88888F',
        fontWeight: 'bold',
        fontSize: 16,
      };
    } else {
      return {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      };
    }
  },
});
