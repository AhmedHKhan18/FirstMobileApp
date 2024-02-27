import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={require('./assets/logo.png')} />
      <Text style={[styles.heading]}>Welcome!</Text> 
      <Text style={[styles.heading2]}>to CRM.io</Text>
      <TextInput style={styles.input} placeholder="Phone number" returnKeyType = {"next"} autoFocus = {true}/>
      <TextInput style={styles.input} placeholder="Password" />
      <TouchableHighlight style={styles.Button}>
        <Text style={styles.heading3}>Login</Text>
      </TouchableHighlight>
      <Text style={[styles.heading4]}>I forgot my password</Text>
      <Text style={[styles.heading5]}>Wanna try our Services?</Text>
      <Text style={[styles.heading6]}>here you are</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    // justifyContent: 'center',
    padding: 40,
  },
  heading: {
    fontFamily: "Arial",
    fontSize: 40,
  },
  input: {
    width: 300,
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    margin: 50,
    padding: 10,
    marginBottom: -20,
    borderColor: "lightgrey",
  },
  heading2: {
    fontFamily: "Arial",
    fontSize: 40,
    color: "rgb(94,50,249)",
  },
  Button: {
    width: 200,
    height: 60,
    borderWidth: 0,
    borderRadius: 30,
    margin: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7e4ffd",
  },  
  heading3: {
    fontFamily: "Arial",
    fontSize: 20,
    color: "white",
  },
  heading4: {
    fontFamily: "Arial",
    fontSize: 15,
    color: "rgb(94, 50, 249)",
    marginTop: -30,
  },
  heading5: {
    fontFamily: "Arial",
    fontSize: 15,
    color: "grey",
    marginTop: 30,
  },
  heading6: {
    fontFamily: "Arial",
    fontSize: 15,
    color: "rgb(94, 50, 249)",
    marginTop: 3,
    textDecorationLine: "underline",
  }   
});
