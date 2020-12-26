import React, { Component, useEffect, useState } from 'react';
import {View,SafeAreaView,Dimensions,Image,TouchableOpacity} from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text,Tabs
,Tab,ScrollableTab, TabHeading
} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';
import * as RootNavigation from '../Navigation/RootNavigator';

const ProductView =({product})=> {

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const [selected,isSelected] = useState(false)


return(
  
    <View style = {{ flex : 2, width : screenWidth*0.5, height : screenWidth*0.5,
    borderWidth : 1, borderColor : 'rgba(220,220,220,0.3)',alignItems : 'center',
    }}>
    <View style ={{marginTop : 15 , alignItems : 'center' }}> 
     <View style ={{flex : 1,width : (screenWidth*0.6)/2
    ,height : (screenWidth*0.495)/2, borderRadius : 12 
    }} >
        <TouchableOpacity onPress={()=>RootNavigation.navigate("ProductDetailes",{
            name: product.name,
            weight:product.weight,
            price:product.price,
            url:product.product_img
            })}>
    <Image source ={{uri : product.product_img}}
     style ={{width : (screenWidth*0.6)/2
        ,height : (screenWidth*0.495)/2}} />
        </TouchableOpacity>
    </View>
    
    <View style = {{flex : 1,flexDirection : 'row',}}>

        <View style ={{paddingRight: 50,marginTop : 30}}>
           <Text>{product.name}</Text>
           <Text style ={{fontWeight :'200', fontSize : 12}}>{product.weight}</Text>
           <Text style ={{fontWeight :'200', fontSize : 12}}>EGP {product.price}</Text>
        </View>
        
       { selected ? <Icon name="check-circle" size={30} color="#d2691e" style ={{marginTop : 52}} onPress ={() =>isSelected(false)}/>
        : 
        
        <Icon name="arrow-circle-o-right" size={30} color="gray" style ={{marginTop : 52}} onPress ={() => isSelected(true)}/>
        }
    </View>

    </View>  

    </View>

)
 

}

export default ProductView;