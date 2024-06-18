import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from '../../Contexts/ThemeContext';

const CustomizeStatusBar: React.FC = () => {
    const { theme } = useTheme();


    const [barStyle, setBarStyle] = useState<'default' | 'light-content' | 'dark-content'>('light-content');

    return (
        <StatusBar barStyle={barStyle} backgroundColor={theme.primary} />
    );
};

export default CustomizeStatusBar;