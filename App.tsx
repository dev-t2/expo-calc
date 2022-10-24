import React, { memo, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Pedometer } from 'expo-sensors';

const App = () => {
  const [pastStepCount, setPastStepCount] = useState(0);
  const [currentStepCount, setCurrentStepCount] = useState(0);

  useEffect(() => {
    (async () => {
      const { granted } = await Pedometer.requestPermissionsAsync();

      if (granted) {
        const subscription = Pedometer.watchStepCount(({ steps }) => {
          setCurrentStepCount(steps);
        });

        const end = new Date();

        const year = end.getFullYear();
        const month = end.getMonth();
        const date = end.getDate();

        const start = new Date(year, month, date);

        const { steps } = await Pedometer.getStepCountAsync(start, end);

        setPastStepCount(steps);

        return () => {
          subscription.remove();
        };
      }
    })();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Past Step Count: {pastStepCount}</Text>
      <Text>Current Step Count: {currentStepCount}</Text>
    </View>
  );
};

export default memo(App);
