import { TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants'

export default function HeaderBtn({icon, onPress, dimensions}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={icon} resizeMode='cover' style={styles.icon(dimensions)}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    width: 40,
    height: 40,
    borderRadius: SIZES.small/2,
    backgroundColor:COLORS.white,
    justifyContent:'center',
    alignItems:'center'
  },
  icon:(dimensions)=>({
    width:dimensions,
    height:dimensions,
    borderRadius: SIZES.small/2,
  })
})