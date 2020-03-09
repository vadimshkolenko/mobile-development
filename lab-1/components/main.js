import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Main = ({ history }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Правила игры</Text>
      <View style={styles.descriptionBlock}>
        <Text style={styles.descriptionText}>
          Игрок и робот поочередно бросают 2 кубика (цифры от 1 до 6).
          Если выпадает дубль (одинаковые цифры), то кубики бросаются снова.
          Цель игры - быстрее соперника набрать 100 очков.
        </Text>
      </View>
      <Button title="Играть" style={styles.startButton} onPress={() => { history.push('/game') }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tittle: {
    color: '#0e2904',
    fontSize: 35,
  },
  descriptionBlock: {
    padding: 30,
  },
  descriptionText: {
    fontSize: 20,
  },
  startButton: {
    color: 'black',
  },
})


export default Main