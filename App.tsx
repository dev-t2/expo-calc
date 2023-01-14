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

        <Button width={100} height={100} title="1" onPress={() => console.log(1)} />
        <Button width={200} height={100} title="2" onPress={() => console.log(2)} />
      </View>
    </ThemeProvider>
  );
};

export default memo(App);
