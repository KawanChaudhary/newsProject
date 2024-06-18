import { Header } from '../../Types/types';

export const headerIcons = {
    headerSetting: 'dots-vertical',
};

export const headerText = {
    drawerHeading: 'theGuardian',
};

export const home: Header = {
    title: 'Home',
    label: 'Home',
    routeName: 'home',
    icon: 'home-outline',
    activeIcon: 'home',
};

export const world: Header = {
    title: 'World',
    label: 'World',
    routeName: 'world',
    icon: 'globe-outline',
    activeIcon: 'globe',
};

export const science: Header = {
    title: 'Science',
    label: 'Science',
    routeName: 'science',
    icon: 'football-outline',
    activeIcon: 'football',
};

export const headerTabs: Header[] = [home, world, science];
