import React, {Component} from 'react';
import {
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default class app extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureTextEntry: true,
      iconName: 'eye',
    };
  }
  OnIconPress = () => {
    let iconName = this.state.secureTextEntry ? 'eye-with-line' : 'eye';

    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
      iconName: iconName,
    });
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <TextInput
            {...this.props}
            style={styles.passInput}
            placeholder={this.props.placeholder}
            onChangeText={this.props.onChangeText}
            secureTextEntry={this.state.secureTextEntry}
            value={this.props.value}
          />
          <TouchableOpacity onPress={this.OnIconPress} style={styles.passIcon}>
            <Icon name={this.state.iconName} size={20} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderRadius: 12,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  passInput: {
    flex: 1,
  },
  passIcon: {
    justifyContent: 'center',
  },
});
