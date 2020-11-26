import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState, useMemo } from 'react';

export const GuessNumber = () => {
  const [leftBorder, setLeftBorder] = useState(1);
  const [rightBorder, setRightBorder] = useState(100);
  const [result, setResult] = useState(0);
  const middle = useMemo(() => 
  {
    return Math.floor((leftBorder + rightBorder) / 2);
  }, [leftBorder, rightBorder]
  );
  const text = useMemo(() => 
  {
    if (result > 0)
      return result + ' — это число, которое вы загадали';
    return 'Ваше число больше ' + middle + ' ?';
  }, [middle, result, leftBorder, rightBorder]
  );

  function UpdateUserNumber(isTrue: boolean)
  {
    if (rightBorder - leftBorder == 1 || leftBorder == rightBorder)
    {
      if (isTrue) setResult(rightBorder);
      else setResult(leftBorder);
    }

    if (isTrue)
      setLeftBorder(middle + 1);
    else
      setRightBorder(middle);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>
          {text}
        </Text>
      </View>
      <View style={styles.yesNoButton}>
        <View style={styles.yesButton}>
          <Button
            title='Да' 
            onPress={ ()=>
            {
              UpdateUserNumber(true);
            } }
            />
        </View>
        <View style={{flex: 0.1}}></View>
        <View style={styles.noButton}>
          <Button 
            title='Нет ' 
            onPress={ ()=>
            {
              UpdateUserNumber(false);
            } }
            />
        </View>
      </View>
      <View style={{height:'10%'}}></View>
      <View style={styles.resetView}>
        <Button 
          title='Reset ' 
          onPress={ ()=>
          {
            setLeftBorder(1);
            setRightBorder(100);
            setResult(0);
          } }
          />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  yesNoButton: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  yesButton: 
  {
    flex: 1
  },
  noButton: 
  {
    flex: 1
  },
  container: {
    backgroundColor: '#fff',
  },
  titleView: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 14,
  },
  titleText:
  {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center'
  },
  resetView:
  {
  }
});