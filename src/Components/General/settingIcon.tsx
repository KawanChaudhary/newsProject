import { StyleSheet} from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { moderateScale, scale } from '../../Utils/ResponsiveUtil';
import { headerIcons } from '../../Constants/Header/Header';
import { useNavigation } from '@react-navigation/native';
import { RootNavigationParamList } from '../../Types/Navigation';
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

type NavigationProp = NativeStackNavigationProp<RootNavigationParamList>;

const settingIcon:React.FC = (props:any) => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <TouchableOpacity style={styles.headerSetting} onPress={() => navigation.navigate('Setting')} >
        <MaterialCommunityIcons name={headerIcons.headerSetting} size={moderateScale(28)} color="black" />
    </TouchableOpacity>
  );
};

export default settingIcon;

const styles = StyleSheet.create({
    headerSetting: {
        marginRight: scale(10),
    },
});
