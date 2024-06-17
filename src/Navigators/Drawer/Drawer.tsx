import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import settingIcon from '../../Components/General/settingIcon';
import CustomDrawerContent from './CustomDrawerContent';
import TabViewExample from '../TabView/TabView';

type DrawerParamList = {
    Tabs: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => {

    const MemoizedDrawerContent = React.useCallback((props: any) => <CustomDrawerContent {...props} />, []);

    return (

        <Drawer.Navigator initialRouteName="Tabs"
            drawerContent={MemoizedDrawerContent}
        >
            <Drawer.Screen
                name="Tabs"
                options={{
                    headerRight: () => (settingIcon()),
                    drawerLabel: 'Home',
                    title: 'Home',
                }}
                component={TabViewExample} />

        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
