import React, { Component, useEffect, useState } from 'react';
import {View,SafeAreaView,FlatList, ScrollView,Dimensions,Image, TouchableWithoutFeedback, TouchableOpacity,StyleSheet} from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Tabs
,Tab,ScrollableTab, TabHeading,Spinner
} from 'native-base';
import Axios from 'axios'
import axios from 'axios';
import ProductView from "../Components/ProductView"  



  

const Home = ({navigation}) => {

    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);

    const[categories,setCategories] = useState()
    const [selectedTab,setSelectedTab] = useState(0)

useEffect( () => {
axios.get('https://5bcce576cf2e850013874767.mockapi.io/task/categories')
.then(res => {
     setCategories(res.data)
}).catch(err => console.log(err.message))

console.log(categories)
},[])

const Item = ({ item,onPress }) => (
 
    <ProductView product ={item}/>
    
  );




if(categories){
    return(  <View style ={{flex : 7}}>
 
       <View style={{flex:3}}>
        <Image source ={{uri : categories ? categories[selectedTab].category_img : ''}} 
        style={{resizeMode : 'cover',width : screenWidth,height : undefined,aspectRatio : 1}}/>
       </View>
      
      <Container style ={{flex : 4}} >
       <Tabs renderTabBar={()=> <ScrollableTab />}
       tabBarUnderlineStyle ={{backgroundColor : 'black' }} 
       tabContainerStyle ={{borderColor : 'white'}}
       onChangeTab = {({i}) => setSelectedTab(i)}
       initialPage = {0}
       >
       {categories ? categories.map(item => {
           return (
               <Tab heading={
                   <TabHeading style={{backgroundColor:"white"}}> 
                       <Text style ={{fontSize : 21 , fontWeight : '200', color : 'black'}}>
                      {item.name}
                       </Text>
                   </TabHeading>
                     } 
                     >
                  <FlatList
                    numColumns = {2}
                    data ={item.products}
                    renderItem={Item}
                    keyExtractor={item => item.id}
                  />
                   </Tab>
           )
       }) :( <Tab heading={
           <TabHeading >
               <Spinner color = 'gray'/>
           </TabHeading>
             } 
             ></Tab>) }
              
   

         

       </Tabs>
       </Container>
    
       <View style ={{width : screenWidth , height : screenHeight*0.1, 
           backgroundColor : '#d2691e' , alignItems : 'center'}}>
         
       <View style ={{flex : 3,flexDirection : 'row',alignItems : 'center'}}>

       <TouchableWithoutFeedback>
       <Text style ={{flex : 1 ,fontSize : 30,paddingHorizontal : 50, fontWeight : '200', color : 'white'}}> Sort by</Text>
       </TouchableWithoutFeedback>

       <TouchableWithoutFeedback>
       <Text style ={{flex : 1,fontSize : 30,fontWeight : '200',color : 'white'}}> Filter</Text>
       </TouchableWithoutFeedback>
       </View>

       </View>
 </View>
 )
}
else{
  return (
  
    <View style ={{flex:1,justifyContent : 'center',alignItems:'center'}}>
       <Spinner size ={10} color = 'gray'/>
    </View>

  )
}
    
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

export default Home;