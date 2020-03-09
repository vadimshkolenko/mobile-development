import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Link } from "react-router-native"

const Game = ({ history }) => {
  const [robotPoints, setRobotPoints] = useState(0)
  const [playerPoints, setPlayerPoints] = useState(0)
  const [blocks, setBlocks] = useState({ first: null, second: null })
  const [replay, setReplay] = useState(false)
  const [activeRobotStep, setActiveRobotStep] = useState(false)

  const randomValue = () => Math.floor(1 + Math.random() * (6 + 1 - 1))

  const checkСoincidence = () => (blocks.first == blocks.second) ? true : false

  const step = () => setBlocks({ first: randomValue(), second: randomValue() })

  useEffect(() => {
    if (blocks.first === null || blocks.second === null) return

    if (checkСoincidence()) {
      setReplay(true)
    } else {
      setReplay(false)
    }

    if (activeRobotStep) {
      if (replay) {
        step()
      } else {
        setRobotPoints(robotPoints + blocks.first + blocks.second)
        setActiveRobotStep(false)
      }
    } else {
      if (replay) {
        return
      } else {
        setPlayerPoints(playerPoints + blocks.first + blocks.second)
        setActiveRobotStep(true)
        setTimeout(step, 1500)
      }
    }
  }, [blocks])

  useEffect(() => {
    if (playerPoints >= 100 && playerPoints > robotPoints)
      history.push('/result', { result: 'win', score: [playerPoints, robotPoints] })
    else if (robotPoints >= 100 && robotPoints > playerPoints)
      history.push('/result', { result: 'defeat', score: [playerPoints, robotPoints] })
    else if (playerPoints >= 100 && robotPoints >= 10 && playerPoints == robotPoints)
      history.push('/result', { result: 'draw', score: [playerPoints, robotPoints] })
  }, [robotPoints])

  return (
    <View style={styles.container}>
      <View style={styles.players}>
        <Text style={styles.player}>Вы: {playerPoints}</Text>
        <Text style={styles.player}>Робот: {robotPoints}</Text>
      </View>
      {replay &&
        <View style={styles.replay}>
          <Text>Выпал дубль! Повтор хода!</Text>
        </View>
      }
      <View style={styles.blocks}>
        <View style={styles.block}>
          <Text style={styles.points}>{blocks.first}</Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.points}>{blocks.second}</Text>
        </View>
      </View>
      <View style={styles.steps}>
        {
          activeRobotStep ? <Text>Ход робота...</Text> : <Button title="Бросить кубики" style={styles.startButton} onPress={step} />
        }
      </View>
      <View style={styles.back}>
        <Link to="/"><Text style={styles.link}>Назад</Text></Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  players: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  player: {
    fontSize: 35
  },
  blocks: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  block: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#d6d7da',
    width: 100,
    height: 100,
    fontSize: 35
  },
  points: {
    fontSize: 50
  },
  steps: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    fontSize: 20,
    marginBottom: 10
  }
})


export default Game