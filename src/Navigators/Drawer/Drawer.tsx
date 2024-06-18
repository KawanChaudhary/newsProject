import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import settingIcon from '../../Components/General/settingIcon';
import CustomDrawerContent from './CustomDrawerContent';
import TabView from '../TabView/TabView';
import { RootNavigationParamList } from '../../Types/Navigation';
import { useTheme } from '../../Contexts/ThemeContext';


const Drawer = createDrawerNavigator<RootNavigationParamList>();

const DrawerNavigator = () => {

    const {theme} = useTheme();

    const MemoizedDrawerContent = React.useCallback((props: any) => <CustomDrawerContent {...props} />, []);

    return (

        <Drawer.Navigator initialRouteName="Tabs"
            drawerContent={MemoizedDrawerContent}
        >
            <Drawer.Screen
                name="Tabs"
                options={{
                    headerRight: () => settingIcon(),
                    drawerLabel: 'NewsFeed',
                    title: 'NewsFeed',
                    headerTintColor: theme.primary,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        letterSpacing: 1,
                    },
                }}
                component={TabView} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
