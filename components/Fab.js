import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function Fab() {
  return (
    <Pressable style={styles.fab}>
      <Text style={styles.plus}>+</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  fab: {
    height: 50,
    width: 50,
    backgroundColor: 'orange',
    borderRadius: 25,
    position: 'absolute',
    bottom: 25,
    right: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

elevation: 2,
  },
  plus: {
    fontWeight: '300',
    fontSize: 35,
    textAlign: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column',
  }
})