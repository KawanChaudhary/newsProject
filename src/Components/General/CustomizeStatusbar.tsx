import React, { useState } from 'react';
import { StatusBar, View } from 'react-native';
import { useTheme } from '../../Contexts/ThemeContext';

const CustomizeStatusBar: React.FC = () => {
    const { theme } = useTheme();


    const [barStyle, setBarStyle] = useState<'default' | 'light-content' | 'dark-content'>('light-content');

    return (
        <View testID="status-bar">

            <StatusBar barStyle={barStyle} backgroundColor={theme.primary} />
        </View>
    );
};

export default CustomizeStatusBar;