import { StyleSheet} from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { moderateScale, scale } from '../../Utils/GlobalUtils';
import { headerIcons } from '../../Constants/Header/Header';

const settingIcon = () => {
  return (
    <TouchableOpacity style={styles.headerSetting} >
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
