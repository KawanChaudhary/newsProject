import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import React from "react";
import DrawerNavigator from "../Drawer/Drawer";
import Setting from "../../Screens/Setting/Setting";
import { useTheme } from "../../Contexts/ThemeContext";

export type StackParamList = {
    Drawer: undefined;
    Setting: undefined;
}

const Stack = createStackNavigator<StackParamList>();

const StackNavigator: React.FC = () => {

    const { theme } = useTheme();

    return (
        <Stack.Navigator initialRouteName="Drawer"
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS,
            }}

        >
            <Stack.Screen options={{ headerShown: false }}
                name="Drawer"
                component={DrawerNavigator}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: theme.primary,
                    },
                    headerTintColor: theme.background,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        letterSpacing:2,
                    },
                    title: 'Settings',
                }}

                name="Setting" component={Setting} />
        </Stack.Navigator>
    )
}

export default StackNavigator;