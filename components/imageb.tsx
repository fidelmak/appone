import { ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { scale, verticalScale, moderateScale, s, vs } from 'react-native-size-matters';

const ImgB = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log('Search pressed with text:', searchText);
  };

  return (
    <View>
      <ImageBackground
        source={require('../assets/cake.jpeg')}
        style={styles.img}>
        <View style={styles.t}>
          <Text style={{ fontSize: moderateScale(60), color: 'yellow', textAlign: 'center', marginTop: verticalScale(20) }}>
            Cakeon
          </Text>
          <TextInput 
            editable={true}
            style={styles.input}
            keyboardType="default"
            placeholder="Search for cakes..."
            placeholderTextColor="gray"
            value={searchText}
            onChangeText={setSearchText}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Pressable onPress={handleSearch} style={styles.searchButton}>
            <Text style={{ color: 'white', fontSize: moderateScale(20), textAlign: 'center' }}>
              Search
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  )
}

export default ImgB

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: vs(800),
    justifyContent: 'center',
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  
  t: {
    width: "100%",
    height: "100%",
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  input: {
    width: s(300),
    height: vs(50),
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginTop: vs(20),
    fontSize: moderateScale(16),
    color: 'black',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  
  searchButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: vs(10),
    paddingHorizontal: s(30),
    borderRadius: 10,
    marginTop: vs(20),
    borderWidth: 1,
    borderColor: 'white',
  }
})