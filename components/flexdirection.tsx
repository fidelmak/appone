import { View, Text } from 'react-native'
import React from 'react'

const Flexdirection = () => {
  return (
   <View style={{ flex:1,
        backgroundColor:"white", flexDirection: "row-reverse",}}>
        
   
   
    <View style={{ 
           width:100,
           height:100,      
           backgroundColor: "green",
             }}>
         
       </View>
      
     <View style={{ 
           width:100,
           height:100,      
           backgroundColor: "red",
             }}>
         
       </View>
        <View style={{ 
           width:100,
           height:100,      
           backgroundColor: "yellow",
             }}>
         
       </View>
         
       
       </View>
      
  )
}

export default Flexdirection