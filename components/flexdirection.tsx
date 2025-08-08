import { View, Text } from 'react-native'
import React from 'react'

const Flexdirection = () => {
  return (
   <View style={{ flex:1,
    justifyContent: "center",
    alignContent: "center",
   
    alignItems: "center",
        backgroundColor:"white", flexDirection: "row",}}>
        
   
   
 
       <View style={{ 
        borderRadius: 100,
           width:90,
           height:90,      
           backgroundColor: "black",
          position: "absolute",
          top: 50,
          left: 50,
             }}></View>
     <View style={{ 
           width:90,
           height:90,      
           backgroundColor: "red",
           bottom: 40,
           left:80
             }}>
         
       </View>
        <View style={{ 
           width:90,
           height:90,      
           backgroundColor: "blue",
           bottom: 20,
           left: 40,
             }}>
         
      </View>
        <View style={{ 
           width:90,
           height:90,      
           backgroundColor: "yellow",
             }}>
         
       </View>
         
       
       </View>
      
  )
}

export default Flexdirection