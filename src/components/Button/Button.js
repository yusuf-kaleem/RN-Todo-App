import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Button(props){
    return(
    <TouchableOpacity onPress={props.onPress} >
        <View  style={[styles.button,props.customeStyle]}><Text >{props.title}</Text></View>
    </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
  
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
  