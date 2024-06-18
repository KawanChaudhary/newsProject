import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { moderateScale, scale, verticalScale } from '../../Utils/ResponsiveUtil';
import LinearGradient from 'react-native-linear-gradient';
import { headerText } from '../../Constants/Header/Header';
import { useTheme } from '../../Contexts/ThemeContext';
import { headerTabs } from '../../Constants/Header/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomDrawerContent: React.FC = (props: any) => {

    const { theme } = useTheme();

    const { state, navigation } = props;

    return (
        <SafeAreaView style={styles.container}>

            <LinearGradient
                colors={[theme.primary, theme.lightPrimary]}
                style={styles.topContainer}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <Text style={[styles.theGuardian, { color: theme.theGuardian }]}>{headerText.drawerHeading}</Text>
            </LinearGradient>

            <DrawerContentScrollView {...props}>

                <View style={styles.drawerContent}>
                    {headerTabs.map((tab, index) => {
                        const isFocused = state.index === index;
                        const color = isFocused ? '#6200ee' : '#333';

                        return (
                            <DrawerItem
                                key={tab.title}
                                label={() => (
                                    <Text style={[styles.drawerItemLabel, { color: color }]}>
                                        {tab.label !== undefined ? tab.label : tab.title}
                                    </Text>
                                )}
                                icon={() => (
                                    <Ionicons
                                        name={isFocused ? tab.activeIcon : tab.icon as string}
                                        size={26}
                                        color={color}
                                    />
                                )}
                                onPress={() => {
                                    navigation.navigate(tab.routeName);
                                }}
                                style={[
                                    styles.drawerItem,
                                    {
                                        backgroundColor: isFocused ? theme.lightPrimary : 'transparent',
                                    },
                                ]}
                            />
                        );
                    })}
                </View>
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
        paddingHorizontal: scale(20),
    },
    theGuardian: {
        fontSize: moderateScale(38),
        fontWeight: 'bold',
    },
    drawerContent: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        paddingLeft: 20,
        color: '#000',
    },
    drawerItem: {
        marginHorizontal: 10,
        borderRadius: 8,
    },
    drawerItemLabel: {
        fontSize: 16,
    },
});
