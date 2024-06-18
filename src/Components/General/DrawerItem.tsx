import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Header } from '../../Types/types'

type Props = {
    drawerItem:Header;
}

const DrawerItem : React.FC<Props> = ({drawerItem}) => {
  return (
    <TouchableOpacity>
        <Ionicons name='' />
    </TouchableOpacity>
  )
}

export default DrawerItem

const styles = StyleSheet.create({})