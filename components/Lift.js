import { StyleSheet, Text, View, Pressable } from 'react-native';
//background color based on trends (red if going down, green if going up?)
export default function Lift({lift}) {
  const latest = lift.hx[0]
  return (
    <View style={styles.liftcard}>
      <Text style={styles.header}>{lift.name}</Text>
      <View style={styles.latestDataEntry} >
        <Text style={styles.date}>
          {lift.hx[0].date}
        </Text>
        <Text style={styles.weightAndReps}>
          <Text style={styles.weight}>
          {latest.weight}
          </Text>
          <Text>/</Text>
          {latest.reps}
          <Text>/</Text>
          {latest.sets}
        </Text>
      </View>
      <View>
      </View>
      <Pressable
        style={styles.addButton}
        onPress={() => Alert.alert('Button with adjusted color pressed')}>
          <Text style={styles.plus}>+</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  addButton: {
    height: 40,
    width: 40,
    backgroundColor: 'orange',
    borderRadius: 25,
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 10,

  },
  date: {
    fontWeight: '500',

  },
  latestDataEntry: {
    backgroundColor: '#f5f5f5',
    borderRadius: 25,
    width: 100,
    padding: 10,
    position: 'absolute',
    bottom: 15,
    left: 15,
  },
  liftcard: {
    marginTop: '3%',
    marginHorizontal: '1%',
    height: 150,
    backgroundColor: 'white',
    color: 'white',
    borderRadius: 30,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,

    elevation: 1,
  },
  header: {
    fontSize: 26,
    fontWeight: '900',  
    paddingBottom: 10,
  },
  plus: {
    textAlign: 'center',
    fontWeight: '300',
    fontSize: 28,

  },
  weight: {
    fontSize: 25,
  }
});