import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';

const App = () => {
  return (
    <View style={{felx: 1}}>
      <LottieView source={require('../assets/emptybox.json')} autoPlay loop />
    </View>
  );
};

export default App;