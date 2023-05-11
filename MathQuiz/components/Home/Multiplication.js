import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Progress from 'react-native-progress';

let operand1, operand2;
let answer, answerOption, optionA, optionB, optionC, optionD;
let questionNumber = 1;

// For storing data permanently in async storage(To store locally in user mobile)
let score = 0; // To store score in every test
let totalScore = 0;
let totalTest = 0;
let test = 0; // To store the number of test user has attended
let answered = false; // Checks whether a question is answered or not
let options;

// This function is for generating all questions, options and answers

const genQandA = () => {
  //Generating random numbers
  const random = () => Math.round(Math.random() * 100);
  answerOption = Math.round(Math.random() * 3);

  operand1 = random();
  operand2 = random();

  //Actual answer
  answer = operand1 * operand2;

  randomOptions = () => Math.round(Math.random() * 1800);

  //Generating options
  optionA = answerOption == 0 ? answer : randomOptions();
  optionB = answerOption == 1 ? answer : randomOptions();
  optionC = answerOption == 2 ? answer : randomOptions();
  optionD = answerOption == 3 ? answer : randomOptions();

  return [
    operand1,
    operand2,
    answer,
    answerOption,
    optionA,
    optionB,
    optionC,
    optionD,
  ];
};

// called to generate questions and options
let QandA = genQandA();

export default Multiplication = ({navigation}) => {
  const setData = async () => {
    try {
      let scores = await AsyncStorage.getItem('scores');

      if (scores == null) {
        scores = 0;
      }
      await AsyncStorage.setItem('scores', (Number(scores) + score).toString());
    } catch (e) {
      console.warn(e);
    }
  };

  const getData = async () => {
    try {
      return await AsyncStorage.getItem('scores');
    } catch (e) {
      console.warn(e);
    }
  };

  const [next, setNext] = useState(false);

  return (
    <View style={{flex: 1}}>
      {next ? <Main QandA={QandA} /> : null}
      {next ? null : <Main QandA={QandA} />}
      <LinearGradient
        colors={normalOptionColor}
        start={{x: 1.2, y: 0.4}}
        end={{x: 0.2, y: 0.2}}
        style={[
          styles.optionBtn,
          {borderRadius: 0, marginTop: 0, paddingVertical: 1},
        ]}>
        <TouchableHighlight
          style={{height: 50}}
          underlayColor="#5b86e5"
          activeOpacity={0.5}
          onPress={() => {
            if (questionNumber == 10) {
              questionNumber = 1;

              navigation.goBack();
              // setData();
              time = 1.0;
              score = 0;
              test += 1;
              // console.warn(getData());
            } else {
              {
                questionNumber < 10 ? (questionNumber += 1) : null;
              }
            }
            setNext(!next);
            QandA = genQandA();
          }}>
          <Text
            style={{
              fontSize: 27,
              textAlign: 'center',
              fontFamily: 'Mitr-Medium',
              color: '#fff',
              letterSpacing: 1,
              paddingVertical: 3,
            }}>
            {questionNumber == 10 ? 'Back' : 'Next'}
          </Text>
        </TouchableHighlight>
      </LinearGradient>
    </View>
  );
};

const Main = props => {
  QandA = props.QandA;

  const [ProgressValue, setProgressValue] = useState(1.0);

  let timer;

  useEffect(() => {
    let time = 1.0;
    timer = setInterval(() => {
      time > 0 ? (time -= 0.1) : (time = 0);
      setProgressValue(time);
    }, 1000);
    setTimeout(() => clearInterval(timer), 11000);
  }, []);

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['#061329', '#052861']}
        style={{flex: 1}}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <View style={styles.container}>
          <LinearGradient
            colors={['#03A9F4', '#246EE9']}
            start={{x: 1.2, y: 0.4}}
            end={{x: 0.2, y: 0.2}}
            style={styles.button}>
            <Text style={[styles.btnText]}>
              <Text style={{fontSize: 20}}>
                {questionNumber}/10{'\n'}
              </Text>
              <Text style={[styles.btnText, {color: '#45f538', flex: 1}]}>
                Q.
              </Text>{' '}
              {QandA[0] + ' * ' + QandA[1]} ?
            </Text>
          </LinearGradient>
          <Progress.Bar
            //ref={progressBar}
            progress={ProgressValue}
            width={null}
            height={10}
            color={'#43f013'}
            borderColor={'#07d9f5'}
            borderWidth={2}
            style={styles.progressBarStyle}
          />
          <Options
            answer={QandA[2]}
            answerOption={QandA[3]}
            options={{
              optionA: QandA[4],
              optionB: QandA[5],
              optionC: QandA[6],
              optionD: QandA[7],
            }}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

//Options component

const Options = props => {
  const [optionColorA, setOptionColorA] = useState(normalOptionColor);
  const [optionColorB, setOptionColorB] = useState(normalOptionColor);
  const [optionColorC, setOptionColorC] = useState(normalOptionColor);
  const [optionColorD, setOptionColorD] = useState(normalOptionColor);

  answerOption = props.answerOption;
  answer = props.answer;
  options = props.options;

  return (
    <View>
      <TouchableHighlight
        onPress={() => {
          answered = true;
          options.optionA == answer
            ? (setOptionColorA(correct), (score += 1))
            : setOptionColorA(incorrect);
        }}
        activeOpacity={0.6}
        underlayColor="#5b86e5"
        style={styles.forTouch}>
        <LinearGradient
          colors={optionColorA}
          start={{x: 1.2, y: 0.4}}
          end={{x: 0.2, y: 0.2}}
          style={[styles.optionBtn, {marginTop: 0}]}>
          <Text style={styles.btnText}>
            <Text style={[styles.btnText, {color: '#45f538'}]}>A.</Text>{' '}
            {options.optionA}{' '}
          </Text>
        </LinearGradient>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => {
          answered = true;
          options.optionB == answer
            ? (setOptionColorB(correct), (score += 1))
            : setOptionColorB(incorrect);
        }}
        activeOpacity={0.6}
        underlayColor="#5b86e5"
        style={styles.forTouch}>
        <LinearGradient
          colors={optionColorB}
          start={{x: 1.2, y: 0.4}}
          end={{x: 0.2, y: 0.2}}
          style={[styles.optionBtn, {marginTop: 0}]}>
          <Text style={styles.btnText}>
            <Text style={[styles.btnText, {color: '#45f538'}]}>B.</Text>{' '}
            {options.optionB}
          </Text>
        </LinearGradient>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => {
          answered = true;
          options.optionC == answer
            ? (setOptionColorC(correct), (score += 1))
            : setOptionColorC(incorrect);
        }}
        activeOpacity={0.6}
        underlayColor="#5b86e5"
        style={styles.forTouch}>
        <LinearGradient
          colors={optionColorC}
          start={{x: 1.2, y: 0.4}}
          end={{x: 0.2, y: 0.2}}
          style={[styles.optionBtn, {marginTop: 0}]}>
          <Text style={styles.btnText}>
            <Text style={[styles.btnText, {color: '#45f538'}]}>C.</Text>{' '}
            {options.optionC}
          </Text>
        </LinearGradient>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => {
          answered = true;
          options.optionD == answer
            ? (setOptionColorD(correct), (score += 1))
            : setOptionColorD(incorrect);
        }}
        activeOpacity={0.6}
        underlayColor="#5b86e5"
        style={styles.forTouch}>
        <LinearGradient
          colors={optionColorD}
          start={{x: 1.2, y: 0.4}}
          end={{x: 0.2, y: 0.2}}
          style={[styles.optionBtn, {marginTop: 0}]}>
          <Text style={styles.btnText}>
            <Text style={[styles.btnText, {color: '#45f538'}]}>D.</Text>{' '}
            {options.optionD}
          </Text>
        </LinearGradient>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 12,
  },
  button: {
    paddingVertical: 10,
    textAlignVertical: 'center',
    marginTop: 20,
    marginBottom: 34,
    textAlign: 'center',
    borderRadius: 17,
    shadowOffset: {width: 14, height: 15},
    shadowColor: 'black',
    shadowOpacity: 1.0,
    shadowRadius: 6,
    elevation: 5,
  },
  btnText: {
    fontFamily: 'Mitr-Medium',
    color: 'white',
    fontSize: 28,
    textAlign: 'left',
    marginLeft: 16,
  },
  optionBtn: {
    paddingVertical: 10,
    textAlignVertical: 'center',
    marginTop: 20,
    textAlign: 'center',
    borderRadius: 17,
    shadowOffset: {width: 14, height: 15},
    shadowColor: 'black',
    shadowOpacity: 1.0,
    shadowRadius: 6,
    elevation: 5,
  },

  forTouch: {
    marginTop: 20,
    borderRadius: 17,
  },
  progressBarStyle: {
    marginBottom: 20,
    marginTop: 10,
    marginHorizontal: 10,
  },
});

const incorrect = ['#f75256', '#fa0c10'];
const correct = ['#b7eba9', '#41de16'];
const normalOptionColor = ['#03A9F4', '#246EE9'];
