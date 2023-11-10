import { StyleSheet, Text, View } from 'react-native';

export default function Intro() {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Welcome to <Text style={styles.liftr}>liftr</Text></Text>
    <Text style={styles.subtext}>Tap <Text style={styles.plus}>+</Text> to start</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
   marginTop: '100%',
   textAlign: 'center',
   fontSize: 30,
  },
  subtext: {
    textAlign: 'center',
    padding: 10,
  },
  liftr: {
    fontWeight: '900',
  },
  plus: {
    fontWeight: '800',
  },
  topbar: {
    height: '10%',
    width: '100%',
    zIndex: 5
  },
  padding: {
    height: '1%',
  }
});
