import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Lift from './components/Lift';
import Intro from './components/Intro';
import Fab from './components/Fab';
import Searchbar from './components/Searchbar';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
      <Searchbar />
        {lifts.length === 0 && <Intro />}
        {lifts.map(lift => <Lift lift={lift} />)}
      </ScrollView>
      <Fab />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#f8f8f8',

  },
  scroll: {
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

const lifts = [
  {
    name: "Biceps Curl",
    hx: [
      {
        date: 'Nov 9, 2023',
        weight: 140,
        reps: 12,
        sets: 3
      },
      {
        date: 'Nov 8, 23',
        weight: 130,
        reps: 12,
        sets: 3
      },
      {
        date: '11-7-23',
        weight: 120,
        reps: 12,
        sets: 3
      },
    ],
    primary: [
      "Biceps Brachii",
    ],
    seconday: [
      "Brachioradialis",
      "Brachialis",
      "Deltoid"
    ],
    equipment: [
      "Dumbell"
    ],
    hyperFactor: 7,
  },
  {
    name: "Flat Bench Press",
    hx: [
      {
        date: 'Nov 9, 2023',
        weight: 135,
        reps: 12,
        sets: 3
      },
      {
        date: 'Nov 8, 23',
        weight: 130,
        reps: 12,
        sets: 3
      },
      {
        date: '11-7-23',
        weight: 120,
        reps: 12,
        sets: 3
      },
    ],
    primary: [
      "Pectoralis Major",
      "Pectoralis Minor"
    ],
    seconday: [
      "Deltoid",
    ],
    equipment: [
      "Barbell",
      "Plates",
    ],
    hyperFactor: 6,
  },
  {
    name: "Dumbbell Shoulder Press",
    hx: [
      {
        date: 'Nov 9, 2023',
        weight: 140,
        reps: 12,
        sets: 3
      },
      {
        date: 'Nov 8, 23',
        weight: 130,
        reps: 12,
        sets: 3
      },
      {
        date: '11-7-23',
        weight: 120,
        reps: 12,
        sets: 3
      },
    ],
    primary: [
      "Anterior Deltoid",
    ],
    seconday: [
      "Triceps",
      "Trapezius",
      "Pectoralis major",
      "Pectoralis minor"
    ],
    equipment: [
      "Dumbell"
    ],
    hyperFactor: 7,
  },
  {
    name: "Rope Press Down",
    hx: [
      {
        date: 'Nov 9, 2023',
        weight: 140,
        reps: 12,
        sets: 3
      },
      {
        date: 'Nov 8, 23',
        weight: 130,
        reps: 12,
        sets: 3
      },
      {
        date: '11-7-23',
        weight: 120,
        reps: 12,
        sets: 3
      },
    ],
    primary: [
      "Triceps",
    ],
    seconday: [
    ],
    equipment: [
      "Cables"
    ],
    hyperFactor: 7,
  },
  {
    name: "Biceps Curl",
    hx: [
      {
        date: 'Nov 9, 2023',
        weight: 140,
        reps: 12,
        sets: 3
      },
      {
        date: 'Nov 8, 23',
        weight: 130,
        reps: 12,
        sets: 3
      },
      {
        date: '11-7-23',
        weight: 120,
        reps: 12,
        sets: 3
      },
    ],
    primary: [
      "Biceps Brachii",
    ],
    seconday: [
      "Brachioradialis",
      "Brachialis",
      "Deltoid"
    ],
    equipment: [
      "Dumbell"
    ],
    hyperFactor: 7,
  },
  {
    name: "Flat Bench Press",
    hx: [
      {
        date: 'Nov 9, 2023',
        weight: 135,
        reps: 12,
        sets: 3
      },
      {
        date: 'Nov 8, 23',
        weight: 130,
        reps: 12,
        sets: 3
      },
      {
        date: '11-7-23',
        weight: 120,
        reps: 12,
        sets: 3
      },
    ],
    primary: [
      "Pectoralis Major",
      "Pectoralis Minor"
    ],
    seconday: [
      "Deltoid",
    ],
    equipment: [
      "Barbell",
      "Plates",
    ],
    hyperFactor: 6,
  },
  {
    name: "Dumbbell Shoulder Press",
    hx: [
      {
        date: 'Nov 9, 2023',
        weight: 140,
        reps: 12,
        sets: 3
      },
      {
        date: 'Nov 8, 23',
        weight: 130,
        reps: 12,
        sets: 3
      },
      {
        date: '11-7-23',
        weight: 120,
        reps: 12,
        sets: 3
      },
    ],
    primary: [
      "Anterior Deltoid",
    ],
    seconday: [
      "Triceps",
      "Trapezius",
      "Pectoralis major",
      "Pectoralis minor"
    ],
    equipment: [
      "Dumbell"
    ],
    hyperFactor: 7,
  },
  {
    name: "Rope Press Down",
    hx: [
      {
        date: 'Nov 9, 2023',
        weight: 140,
        reps: 12,
        sets: 3
      },
      {
        date: 'Nov 8, 23',
        weight: 130,
        reps: 12,
        sets: 3
      },
      {
        date: '11-7-23',
        weight: 120,
        reps: 12,
        sets: 3
      },
    ],
    primary: [
      "Triceps",
    ],
    seconday: [
    ],
    equipment: [
      "Cables"
    ],
    hyperFactor: 7,
  },
  {
    name: "Biceps Curl",
    hx: [
      {
        date: 'Nov 9, 2023',
        weight: 140,
        reps: 12,
        sets: 3
      },
      {
        date: 'Nov 8, 23',
        weight: 130,
        reps: 12,
        sets: 3
      },
      {
        date: '11-7-23',
        weight: 120,
        reps: 12,
        sets: 3
      },
    ],
    primary: [
      "Biceps Brachii",
    ],
    seconday: [
      "Brachioradialis",
      "Brachialis",
      "Deltoid"
    ],
    equipment: [
      "Dumbell"
    ],
    hyperFactor: 7,
  },
  {
    name: "Flat Bench Press",
    hx: [
      {
        date: 'Nov 9, 2023',
        weight: 135,
        reps: 12,
        sets: 3
      },
      {
        date: 'Nov 8, 23',
        weight: 130,
        reps: 12,
        sets: 3
      },
      {
        date: '11-7-23',
        weight: 120,
        reps: 12,
        sets: 3
      },
    ],
    primary: [
      "Pectoralis Major",
      "Pectoralis Minor"
    ],
    seconday: [
      "Deltoid",
    ],
    equipment: [
      "Barbell",
      "Plates",
    ],
    hyperFactor: 6,
  },
  {
    name: "Dumbbell Shoulder Press",
    hx: [
      {
        date: 'Nov 9, 2023',
        weight: 140,
        reps: 12,
        sets: 3
      },
      {
        date: 'Nov 8, 23',
        weight: 130,
        reps: 12,
        sets: 3
      },
      {
        date: '11-7-23',
        weight: 120,
        reps: 12,
        sets: 3
      },
    ],
    primary: [
      "Anterior Deltoid",
    ],
    seconday: [
      "Triceps",
      "Trapezius",
      "Pectoralis major",
      "Pectoralis minor"
    ],
    equipment: [
      "Dumbell"
    ],
    hyperFactor: 7,
  },
  {
    name: "Rope Press Down",
    hx: [
      {
        date: 'Nov 9, 2023',
        weight: 140,
        reps: 12,
        sets: 3
      },
      {
        date: 'Nov 8, 23',
        weight: 130,
        reps: 12,
        sets: 3
      },
      {
        date: '11-7-23',
        weight: 120,
        reps: 12,
        sets: 3
      },
    ],
    primary: [
      "Triceps",
    ],
    seconday: [
    ],
    equipment: [
      "Cables"
    ],
    hyperFactor: 7,
  },
  {
    name: "Biceps Curl",
    hx: [
      {
        date: 'Nov 9, 2023',
        weight: 140,
        reps: 12,
        sets: 3
      },
      {
        date: 'Nov 8, 23',
        weight: 130,
        reps: 12,
        sets: 3
      },
      {
        date: '11-7-23',
        weight: 120,
        reps: 12,
        sets: 3
      },
    ],
    primary: [
      "Biceps Brachii",
    ],
    seconday: [
      "Brachioradialis",
      "Brachialis",
      "Deltoid"
    ],
    equipment: [
      "Dumbell"
    ],
    hyperFactor: 7,
  },
  {
    name: "Flat Bench Press",
    hx: [
      {
        date: 'Nov 9, 2023',
        weight: 135,
        reps: 12,
        sets: 3
      },
      {
        date: 'Nov 8, 23',
        weight: 130,
        reps: 12,
        sets: 3
      },
      {
        date: '11-7-23',
        weight: 120,
        reps: 12,
        sets: 3
      },
    ],
    primary: [
      "Pectoralis Major",
      "Pectoralis Minor"
    ],
    seconday: [
      "Deltoid",
    ],
    equipment: [
      "Barbell",
      "Plates",
    ],
    hyperFactor: 6,
  },
  {
    name: "Dumbbell Shoulder Press",
    hx: [
      {
        date: 'Nov 9, 2023',
        weight: 140,
        reps: 12,
        sets: 3
      },
      {
        date: 'Nov 8, 23',
        weight: 130,
        reps: 12,
        sets: 3
      },
      {
        date: '11-7-23',
        weight: 120,
        reps: 12,
        sets: 3
      },
    ],
    primary: [
      "Anterior Deltoid",
    ],
    seconday: [
      "Triceps",
      "Trapezius",
      "Pectoralis major",
      "Pectoralis minor"
    ],
    equipment: [
      "Dumbell"
    ],
    hyperFactor: 7,
  },
  {
    name: "Rope Press Down",
    hx: [
      {
        date: 'Nov 9, 2023',
        weight: 140,
        reps: 12,
        sets: 3
      },
      {
        date: 'Nov 8, 23',
        weight: 130,
        reps: 12,
        sets: 3
      },
      {
        date: '11-7-23',
        weight: 120,
        reps: 12,
        sets: 3
      },
    ],
    primary: [
      "Triceps",
    ],
    seconday: [
    ],
    equipment: [
      "Cables"
    ],
    hyperFactor: 7,
  }
]
