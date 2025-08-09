import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, Pressable , Image, ScrollView, ActivityIndicator } from 'react-native';
import News from './components/news';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Lflex from './components/lflex';
import Flexdirection from './components/flexdirection';
import Dimen from './components/dimen';
import Nusestate from './components/usestate';
import UseStateExample from './components/usestate';

export default function App() {
  return (



    
    // <SafeAreaView >
    //   <StatusBar style="auto" />

    //   <View style={styles.appBar}>
    //   <Text style={styles.appBarTitle}>Latest News</Text>
    //    <ActivityIndicator  color={"red"}/>
    // </View>
    // <ScrollView>
    // <View style={styles.container} > 
    //   <News />
    //   <News />
    //   <News />
    //   <News />
    //   <News />
    //   <News />

    //     </View>
   
      
    //  </ScrollView>
    

    // </SafeAreaView>
    <>
    {/* <Lflex color="red" mflex={1} />
    <Lflex color="blue" mflex={2} />
    <Lflex color="green" mflex={3} />
    <Lflex color="yellow" mflex={4} /> */}

   < UseStateExample  />
    </>

   
  );
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
  appBar: {
    marginTop: 40,
    backgroundColor: 'white',
    height: 56,
    width: '100%',
   
    justifyContent: 'center',
    alignItems: 'center',
   
   
   
   
  },
  appBarTitle: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
  },
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