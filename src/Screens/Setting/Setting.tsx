import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '../../Contexts/ThemeContext'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ThemeModal from './themeModal'

type Props = {}

const Setting = (props: Props) => {

  const {theme, toggleTheme} = useTheme();

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const onChangeTheme = (newTheme:string) =>{
    toggleTheme(newTheme);
  }

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };


  return (
    <View style={[styles.container, {backgroundColor:theme.background}]}>
      <Text style={[styles.customize, {color:theme.primary}]}>Customize Theme</Text>

      <TouchableOpacity onPress={handleOpenModal}>
        <Text style={styles.colorThemeText}>Color Theme</Text>
        <Text style={[styles.blueThemeText, {color:theme.primary}]} >{theme.name}</Text>
      </TouchableOpacity>

      <ThemeModal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        onChangeTheme={onChangeTheme}
      />

    </View>
  )
}

export default Setting

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:10,
    paddingVertical:10,
    gap:10,
  },
  customize:{
    fontSize:18,
    fontWeight:'bold',
  },
  colorThemeText:{
    fontSize:15,
    fontWeight:'bold',
  },
  blueThemeText:{
    fontSize:14,
    textTransform:'capitalize',
  }
})