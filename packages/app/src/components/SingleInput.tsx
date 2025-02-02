import * as React from 'react';
import type { TextInputProps } from 'react-native';
import { StyleSheet, TextInput } from 'react-native';

const SingleInput = React.forwardRef<TextInput, TextInputProps>((props, ref) => {
  return <TextInput placeholderTextColor="#2E8555" {...props} ref={ref} style={[ styles.input, props.style ]} />;
});

const styles = StyleSheet.create({
  input: {
    alignSelf: 'stretch',
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    color: 'black',
    fontSize: 18,
    height: 60,
    marginBottom: 30,
    padding: 10,
  },
});

export default SingleInput;
