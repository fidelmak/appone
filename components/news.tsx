import { StyleSheet, Text, SafeAreaView, View, Pressable , Image } from 'react-native';

export default function News() {
  return (
    <View >
       <View style={{ alignItems: 'flex-start' }}>
        <Image
          //source={{ uri: 'https://picsum.photos/200/300/' }}
          source={require('../assets/cake.jpeg')}
          style={styles.img}
        />
      </View>
            
      
       <Text style={styles.p} numberOfLines={3}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nobis ipsa porro voluptate aspernatur quia assumenda voluptatum sapiente ea itaque ut!
            </Text>
            
            <View style={styles.nr}>
              <Pressable style={styles.btn} onPress={() => {}}>
              <Text style={{ color: 'white' }}>Read More</Text>
              
            </Pressable>
           <View style={{ width: 20 }} />
      
            <Pressable style={styles.btn2} onPress={() => {}}>
              <Text style={{ color: 'green' }}>Share</Text>
              
            </Pressable>
      
            </View>
            <View style={{ height: 20 }} />
            
           
      </View>
      
    
  )
}
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: 'white',
    //alignItems: 'center',
    justifyContent: 'center',
  margin: 20 ,
  
  },

img: {
  
      width: 150,
      height: 150,
      marginBottom: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'green',
       marginLeft: 0
    }
  ,
 
  txt: {
    color: 'green',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  p: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'left',
   
    width: '100%',
   
  }, // Added missing comma here
  btn: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
  },
   btn2: {
   borderColor: 'green',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  nr: {
    
    display: 'flex',
    flexDirection: 'row',
    //justifyContent: 'space-around',
    width: '100%',
  },
 
});

