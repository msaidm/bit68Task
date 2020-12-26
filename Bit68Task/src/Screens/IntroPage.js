import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import IonIcon from 'react-native-vector-icons/Ionicons';
import * as RootNavigation from '../Navigation/RootNavigator';
import Icon from 'react-native-vector-icons/FontAwesome';


import {
  
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image 
    
  } from 'react-native';

const slides = [
  {
    key: 'one',
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consetetur\neltr,sed diam nonmy eirmad tempor \ninvidunt ut labore et doiore magna \naliquyam erat,sed diam',
    image: require('/home/mohammed/Bit68Task/Bit68Task/src/images/index.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Lorem ipsum ',
    text: 'Lorem ipsum dolor sit amet, consetetur\neltr,sed diam nonmy eirmad tempor \ninvidunt ut labore et doiore magna \naliquyam erat,sed diam',
    image: require('/home/mohammed/Bit68Task/Bit68Task/src/images/index2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consetetur\neltr,sed diam nonmy eirmad tempor \ninvidunt ut labore et doiore magna \naliquyam erat,sed diam',
    image: require('/home/mohammed/Bit68Task/Bit68Task/src/images/index3.png'),
    backgroundColor: '#22bcb5',
  }
];
const styles = StyleSheet.create({
    buttonCircle: {
      width: 100,
      height: 60,
      backgroundColor: 'orange',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      },
      image: {
        width: 300,
        height: 300,
        //marginVertical: 32,
      },
      text: {
        color: 'black',
        textAlign: 'center',
      },
      title: {
        fontSize: 22,
        color: 'black',
        textAlign: 'center',
      },
      dotStyle:{
          backgroundColor:"orange"
      },
  });

export default class IntroPage extends React.Component {
  state = {
    showRealApp: false
  }
  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
          <Image style={styles.image}source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
        
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text style={{fontSize:15,
            fontWeight: "bold",
            color:"white",
            
            }}>Get Started</Text>
        </View>
    );
  }
  _keyExtractor = (item) => item.title;
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
    RootNavigation.navigate('Home')
  }
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="arrow-circle-o-right" size={30} color="white" />
      </View>
    );
  };

  _renderPrevButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="arrow-circle-o-left" size={30} color="white" />
      </View>
    );
  };
  
  render() {
    if (this.state.showRealApp) {
      return <IntroPage/>;
    } else {
      return <AppIntroSlider
          keyExtractor={this._keyExtractor}
          activeDotStyle={styles.dotStyle}
          renderDoneButton={this._renderDoneButton}
          renderNextButton={this._renderNextButton}
          renderPrevButton={this._renderPrevButton}
          renderItem={this._renderItem}
          data={slides}
          showNextButton={true}
          showPrevButton={true}
          onDone={this._onDone}
        />
    }
  }
}
