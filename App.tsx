import { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@emotion/react';

import { theme } from './src/theme';
import { Button } from './src/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Button title="1" onPress={() => console.log(1)} />
        <Button width={200} title="2" onPress={() => console.log(2)} />
        <Button type="operator" height={200} title="+" onPress={() => console.log('+')} />
        <Button type="operator" title="-" onPress={() => console.log('-')} />
      </View>
    </ThemeProvider>
  );
};

export default memo(App);
