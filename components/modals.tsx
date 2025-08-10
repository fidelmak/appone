import { Modal, Pressable, StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
const ModalS = () => {

    const [modalVisible, setModalVisible] = React.useState(true);
    const handlePress = () => {
        setModalVisible(!modalVisible);
    };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow' }}>

        <ImageBackground
            source={require('../assets/cake.jpeg')}
            style={styles.img} />  
      <Text style={styles.txt}>ModalS</Text>
        <Text style={styles.p}>This is a simple modal example.</Text>
        <Pressable style={styles.btn} onPress={handlePress}>
               <Text style={{ color: 'white' }}>Open Modal</Text>
        </Pressable>
       


      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.container}>
          <Text style={styles.txt}>Modal Title</Text>
          <Text style={styles.p}>This is a modal content.</Text>
          < View>    
             <View style={{ width: 10 }} />
          <Pressable onPress={() => {
            console.log('Modal closed');
            handlePress();
            
          }}>
            
           <AntDesign name="closecircle" size={44} color="black" />
          </Pressable>
          </View>
         
        </View>
      </Modal>
    </View>
  )
}

export default ModalS

const styles = StyleSheet.create({
   
      p:{
        color: 'gray',
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 10,
    },
    btn:{
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
      },
      container: {
        flex: 1,
        justifyContent: 'center',
       alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
      },
      txt: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
      },
      img: {
        width: 150,
        height: 150,
        marginBottom: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'green',
      },
    
})