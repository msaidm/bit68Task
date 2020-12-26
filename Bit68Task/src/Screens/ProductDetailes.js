import React, { Component, useEffect, useState } from 'react';
import {View,SafeAreaView,FlatList, ScrollView,Dimensions,Image, TouchableWithoutFeedback, TouchableOpacity,StyleSheet,Button} from 'react-native'
import { Container, Title, Content, Footer, FooterTab, Left, Right, Body, Text,Tabs
,Tab,ScrollableTab, TabHeading,Spinner
} from 'native-base';
import Axios from 'axios'
import axios from 'axios';
import ProductView from "../Components/ProductView"  
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header } from 'react-native-elements';
import * as RootNavigation from '../Navigation/RootNavigator';



const Item = ({ item }) => (
    <ProductView product ={item}/>
  );

const ProductDetailes = ({route,navigation: { goBack }}) => {

    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);
    const { name,weight,price,url } = route.params;


    const[categories,setCategories] = useState()
    const [selectedTab,setSelectedTab] = useState(0)
    const [qty,setQty] = useState(1)
    const words = price.split('L');
    var intPrice = parseInt(words[0])
    const [priceState,setPrice] = useState(intPrice)

useEffect( () => {
console.log("hi",name)
},[])

const increaceQuantity = () => {
    var quantity=qty+1
    setQty(qty+1)
    setPrice(intPrice* quantity)
    setQty(qty+1)
    console.log(priceState)
}
const decQuantity = () => {
    var quantity=qty
    if(quantity!==0){
     //quantity=qty-1
    setQty(qty-1)
    setPrice(priceState/ quantity)
    }
}
function CustomLeft(){
    return(
        <View style ={{flex:1}}>

            <Icon name="arrow-circle-o-left" size={30} color="orange" style ={{ marginRight:80}} onPress ={()=> goBack()}/>
        </View>

    );
}
function CustomRight(){
    return(
        <View style ={{flex:1}}>

            <Icon name="shopping-cart" size={30} color="orange" style ={{ marginRight:10}}/>
        </View>

    );
}

function CustomSearch(){
    return(
        <View style ={{flex:1}}>

            <Icon name="search" size={3} color="orange" style ={{marginLeft }} onPress ={()=> goBack()}/>
        </View>

    );
}





  return (

    
    <View style ={{flex:1,backgroundColor:"white"}}>
        <Header 
         placement="left"
         leftComponent={<CustomLeft/>}
         centerComponent={{ text: 'Lorem ipsum ', style: { color: 'orange' } }}
         rightComponent={<CustomRight/>}
         containerStyle={{
             backgroundColor: 'white',
             justifyContent: 'space-around',
           }}>
           
            </Header>
        <View  style ={{justifyContent : 'center',alignItems:'center',backgroundColor:"white",marginTop:70}}>
        <Image source ={{uri : url}}
         style ={{ width: 150,
            height: 150,}} />
       
        <Text style={{fontSize: 30,
            //fontWeight: "bold",
            color:"black",
    
    }}>Lorem ipsum</Text>
     <Text style={{fontSize: 20,
            //fontWeight: "bold",
            color:"black",
    
    }}>1KG</Text>
    <Text style={{fontSize: 40,
            //fontWeight: "bold",
            color:"black",
    
    }}>EGP {intPrice}</Text>
     </View>
    <View style = {{flexDirection : 'row',marginLeft:20}}>
    <Text style={{fontSize: 40,
            //fontWeight: "bold",
            color:"black",
            justifyContent:"flex-start",
            marginRight:10
            
    
    }}>Qty</Text>
       <Icon name="arrow-circle-o-left" size={30} color="gray" style ={{marginTop : 20, marginRight:10}} onPress ={decQuantity}/>
       <Text style={{fontSize: 40,
            //fontWeight: "bold",
            color:"black",
            justifyContent:"flex-start",
            marginRight:10
    
       }}>{qty}</Text>
    <Icon name="arrow-circle-o-right" size={30} color="gray" style ={{marginTop : 20}} onPress ={increaceQuantity}/>

    </View>
    <View style = {{flexDirection : 'row',marginLeft:20}}>
    
       <Text style={{fontSize: 40,
            //fontWeight: "bold",
            color:"black",
            justifyContent:"flex-start",
            marginRight:10
    
       }}>Total </Text>
       <Text style={{fontSize: 40,
            //fontWeight: "bold",
            color:"black",
            justifyContent:"flex-start",
            marginRight:10,
            color:"orange"
    
       }}>EGP {priceState}</Text>
       
    </View>
    <Text style={{fontSize: 13,
            //fontWeight: "bold",
            color:"black",
            justifyContent:"flex-start",
            marginLeft:20,
            color:"gray"
    
       }}>Lorem ipsum dolor sit amet, consetetureltr,sed diam nonmy eirmad tempor invidunt ut labore et doiore magna aliquyam erat,sed diam</Text>
       <Button style={{color:"black",
           
            marginLeft:20,
            marginTop:10,
            color:"gray",
            borderRadius: 20,}}
        onPress={()=>console.log ("hi")}
        title="Add to cart"
        color="orange"
        accessibilityLabel="Learn more about this purple button"
        />
    
    </View>

  )
}
    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ProductDetailes;