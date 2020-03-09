import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NativeRouter, Route } from "react-router-native"
import Game from './components/game'
import Main from './components/main'
import Result from './components/result'

const App = () => {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Route exact path="/" component={Main} />
        <Route path="/game" component={Game} />
        <Route path="/result" component={Result} />
      </View>
    </NativeRouter>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaf1fb',
    alignItems: 'center',
    justifyContent: 'center',
  },
})


export default App