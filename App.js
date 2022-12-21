import { StyleSheet, Text, View, Button, Pressable, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text>This is another piece of text on the screen</Text>
      <Text style={styles.textbox}>Hello World!!</Text>
      <Button title='Tap Me!'/>
      <Pressable style={styles.button}><Text>Tap Me!</Text></Pressable>

      <View style={styles.appContainer}>

        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder='Your Course Goal'></TextInput>
          <Button title='Add Goal'/>
        </View>

        <View>
          <Text>List of Goals...</Text>
        </View>

      </View>

    </View>

    
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,

  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    borderRadius: 15,
    marginRight: 8,
    padding: 8,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbox: {
    margin: 16, 
    padding: 16,
    borderWidth: 5, 
    borderColor: '#1982FC', 
    borderRadius: 20
  },
  button: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#1982FC'
  }
});
