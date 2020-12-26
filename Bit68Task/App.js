/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React ,{useEffect,useState}from 'react';
import {
  
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,

  
  
} from 'react-native';
import {SafeAreaView,SafeAreaProvider } from 'react-native-safe-area-view';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import RootNavigator from './src/Navigation/RootNavigator';


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
   setLoading(false)
  },[])
  
  return (
    <>
    <SafeAreaProvider>
    <RootNavigator />
      </SafeAreaProvider>
      
    </>
    
  );
}




const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.orange,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
