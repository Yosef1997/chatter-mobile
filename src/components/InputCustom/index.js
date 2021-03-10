import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default class app extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.text}</Text>
        <Icon
          name={this.props.Icon}
          size={this.props.size}
          style={styles.icon}
        />
        <TextInput
          {...this.props}
          style={styles.input}
          placeholder={this.props.placeholder}
          keyboardType={this.props.keyboardType}
          onChangeText={this.props.onChangeText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
    borderColor: '#eaeaea',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  icon: {
    marginHorizontal: 5,
  },
});
