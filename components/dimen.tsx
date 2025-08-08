import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { scale, verticalScale, moderateScale , s, vs } from 'react-native-size-matters';

import React from 'react'

export default function Dimen() {

    // their are several ways to do this form of Dimension for responsiveness 
    // percentage 
    // dimension 
    // libraries 
    console.log(Dimensions.get("screen"))
    const Phone_Height = Dimensions.get("screen").height;
    const Phone_Width = Dimensions.get("screen").width;
  return (
   <View style={{ flex:1,
      
      
    
           backgroundColor:"white", flexDirection: "row",}}>
           
      
       <View style={{ 
                 width: s(300),
                 height:vs(600),      
                 backgroundColor: "red",
               
                   }}>
               
             </View>
    </View>
  )
}

const styles = StyleSheet.create({})