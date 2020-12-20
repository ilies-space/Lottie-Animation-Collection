import React from 'react';
import {Text, View} from 'react-native';
import LottieView from 'lottie-react-native';

const Home = () => {
  return (
    <View style={{felx: 1}}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <LottieView
          style={{height: '100%', width: '100%'}}
          source={require('./assets/emptybox.json')}
          autoPlay
          loop
        />
      </View>
    </View>
  );
};

export default Home;
