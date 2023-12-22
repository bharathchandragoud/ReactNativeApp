// Import necessary components from React and React Native
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// Create a functional component for the app
const MyReactNativeApp = () => {
  // Define state variables using the useState hook
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');

  // Function to handle button press
  const handleButtonPress = () => {
    // Update the display text when the button is pressed
    setDisplayText(`Hello, ${inputText}!`);
  };

  // Return the JSX for the component
  return (
    <View style={styles.container}>
      <Text style={styles.header}>React Native Sample App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        onChangeText={(text) => setInputText(text)}
        value={inputText}
      />
      <Button title="Say Hello" onPress={handleButtonPress} />
      <Text style={styles.resultText}>{displayText}</Text>
    </View>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  resultText: {
    marginTop: 20,
    fontSize: 18,
    color: 'green',
  },
});

// Export the component for use in other files
export default MyReactNativeApp;
