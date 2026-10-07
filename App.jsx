/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SectionListScreen from './src/components/SectionListScreen';
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SectionListScreen/>
    </SafeAreaView>
  );
};

export default App;