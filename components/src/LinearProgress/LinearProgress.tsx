import React, {useRef, useEffect, useState} from 'react';
import {Animated, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const LinearProgress = ({
  step,
  steps,
  height,
  activeColor,
  backgroundColor,
}: {
  step: number;
  steps: number;
  height: number;
  activeColor?: string;
  backgroundColor?: string;
}) => {
  const [width, setWidth] = useState(0);
  const animatedValue = React.useRef(new Animated.Value(-1000)).current;
  const reactive = React.useRef(new Animated.Value(-1000)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    reactive.setValue(-width + (width * step) / steps);
  }, [step, width]);

  return (
    <View style={{justifyContent: 'center', flex: 1, padding: 10}}>
      <View
        onLayout={e => {
          const newWidth = e.nativeEvent.layout.width;
          setWidth(newWidth);
        }}
        style={{
          height,
          backgroundColor: backgroundColor
            ? backgroundColor
            : 'rgba(63, 191, 191, 0.6)',
          borderRadius: height,
          overflow: 'hidden',
        }}>
        <Animated.View
          style={{
            height,
            backgroundColor: activeColor ? activeColor : 'rgb(63, 191, 191)',
            borderRadius: height,
            position: 'absolute',
            left: 0,
            right: 0,
            transform: [{translateX: animatedValue}],
          }}></Animated.View>
      </View>
    </View>
  );
};
