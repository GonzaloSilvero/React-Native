import React from 'react';
// import { ContadorScreen } from './src/screens/ContadorScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { SafeAreaView } from 'react-native';
import { PositionScreen } from './src/screens/PositionScreen';
import { FlexScreen } from './src/screens/FlexScreen';
// import { DimensionesScreen } from './src/screens/DimensionesScreen';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
    {/* // <HolaMundoScreen />
    // <ContadorScreen />  
    // <BoxObjectModelScreen />  
    // <DimensionesScreen />   */}
    {/* <PositionScreen /> */}
    <FlexScreen/>
    </SafeAreaView>
  );
};

export default App;
