import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { moderateScale, verticalScale } from '../../Utils/GlobalUtils';
import LinearGradient from 'react-native-linear-gradient';
import { headerText } from '../../Constants/Header/Header';
import { useTheme } from '../../Contexts/ThemeContext';


const CustomDrawerContent: React.FC = (props: any) => {

    const { theme } = useTheme();

    return (
        <SafeAreaView style={styles.container}>

            <LinearGradient
                colors={[theme.primary, theme.lightPrimary]}
                style={styles.topContainer}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <Text style={styles.theGuardian}>{headerText.drawerHeading}</Text>
            </LinearGradient>

            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </SafeAreaView>
    );
};

export default CustomDrawerContent;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
        flexDirection: 'column-reverse',
        alignItems: 'center',
        height: verticalScale(130),
    },
    theGuardian: {
        fontSize: moderateScale(45),
        fontWeight: 'bold',
    },
});
