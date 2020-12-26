import React, {useEffect, useState} from 'react';
import {shallowEqual, useSelector, useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Loading from"../Screens/Loading"
import IntroPage from '../Screens/IntroPage';
import Home from '../Screens/Home';
import ProductDetailes from '../Screens/ProductDetailes';




export const navigationRef = React.createRef();

/**
 * @description Navigate to the specified route.
 * @param {string} routName The name of the route to which to navigate.
 * @param {object} params The params that will be passed to the route.
 */
export const navigate = (routName, params) => {
  navigationRef.current?.navigate(routName, params);
};

const RootStack = createStackNavigator();

const RootNavigator = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://5bcce576cf2e850013874767.mockapi.io/task/categories')
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  
  return (
    <NavigationContainer ref={navigationRef}>
      {loading && Platform.OS =='android'? ( <RootStack.Navigator mode="card" screenOptions={{headerShown: false}}>
          <RootStack.Screen name="Loading" component={Loading} />
        </RootStack.Navigator>
      ) : (
        <RootStack.Navigator mode="card" screenOptions={{headerShown: false}}>
          <RootStack.Screen name="IntroPage" component={IntroPage} />
          <RootStack.Screen name="Home" component={Home} />
          <RootStack.Screen name="ProductDetailes" component={ProductDetailes} />
          
          
          
        </RootStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default RootNavigator;
