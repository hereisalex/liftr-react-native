import { StyleSheet, Button, View, Image, Text, Pressable, TextInput } from 'react-native';

export default function Searchbar() {
  return (
    <View style={styles.searchWrap}>
      <TextInput 
        placeholder="Find a Lift" 
        style={styles.search}
      />
    </View>
  )
}



const styles = StyleSheet.create({
  search: {
    marginTop: '10%',
    height: 50,
    width: '95%',
    borderRadius: 50,
    marginHorizontal: 'auto',
    alignSelf: 'center',
    backgroundColor: '#ffe6c7',
    paddingHorizontal: 25,
    paddingVertical: 10,
    fontSize: 15,
    fontWeight: '500',
    color: '#575757',
    textAlign: 'center',
  },
})