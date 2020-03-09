import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "react-router-native"
import defeatImage from '../assets/defeat.png'
import winImage from '../assets/win.png'
import drawImage from '../assets/draw.png'

const Result = ({ history }) => {
    let imgResult, textResult
    const result = history.location.state.result
    const score = history.location.state.score
    if (result == 'win') imgResult = winImage, textResult = 'Победа!'
    else if (result == 'defeat') imgResult = defeatImage, textResult = 'Поражение:('
    else imgResult = drawImage, textResult = 'Ничья!'

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{`${textResult}`}</Text>
            </View>
            <View style={styles.scoreContainer}>
                <Text style={styles.score}>{`Счет: ${score[0]}-${score[1]}`}</Text>
            </View>
            <Image
                style={styles.image}
                source={imgResult}
            />
            <View style={styles.links}>
                <Link to="/game"><Text style={styles.link}>Играть еще</Text></Link>
                <Link to="/"><Text style={styles.link}>На главную</Text></Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30
    },
    scoreContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    score: {
        fontSize: 25
    },
    image: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        resizeMode: 'stretch'
    },
    links: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    link: {
        fontSize: 20,
        marginBottom: 10
    }
})

export default Result