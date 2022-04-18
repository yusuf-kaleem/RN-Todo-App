import { StyleSheet, Text, View,Alert } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { startActivityAsync, ActivityAction } from 'expo-intent-launcher';
import Button from "../components/Button/Button";
import Strings from "../constants/constant";
const Stack = createNativeStackNavigator();
export default function App({ navigation }) {


  function setting(){
    startActivityAsync(ActivityAction.SECURITY_SETTINGS);
  }

  function login() {

    LocalAuthentication.getEnrolledLevelAsync().then((EnrolledLeve) => {
      {/* if device is not authenticated asking to authenticate first */}
      if (EnrolledLeve === 0) {
        Alert.alert(
          Strings.title.auth_missing_msg,
          Strings.title.set_auth,
          [
            {
              text: Strings.button.cancel,
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: Strings.button.setting, onPress: () => setting() }
          ]
        );
      }
      else {
        LocalAuthentication.authenticateAsync().then(result => {
          if (result.success) {
            navigation.navigate('todoList')
          }
        })
          .catch(error => {
            console.warn('Authentication Error: ', error)
          })
      }
    });

  
  }

  return (
    <View style={styles.container}>
      <Text style={styles.bold_text}>{Strings.title.home_title}</Text>
      <View style={styles.button_container}>

        <Button title={Strings.button.login} onPress={login}></Button>

      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bold_text: {
    fontWeight: 'bold',
    fontSize: 30,
    margin: 20,
  },

  button_container: {
    display: 'flex',
    flexDirection: 'row',
  },

  button: {
    padding: 10,
    height: 40,
    backgroundColor: '#2093f7',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    margin: 10,
    borderColor: "#2093f7"

  }
});
