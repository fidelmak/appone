import { View, Text } from 'react-native'
import React from 'react'

const Lflex = ({ color, mflex }: { color: string; mflex: number }) => {
  return (
    <View style={{ flex: mflex, justifyContent: 'center', alignItems: 'center', backgroundColor: color }}>
      <Text>lflex</Text>
    </View>
  )
}

export default Lflex