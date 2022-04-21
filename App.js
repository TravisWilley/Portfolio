import React from 'react';
import Main from './components/MainComponent';
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'tan' }}>
      <Main />
    </SafeAreaView>
  );
}
