// import React from 'react';
// import { render, fireEvent } from '@testing-library/react-native';
// import Setting from '../src/Screens/Setting/Setting';
// import { ThemeProvider, useTheme } from '../src/Contexts/ThemeContext'; 

// jest.mock('../src/Contexts/ThemeContext', () => ({
//   useTheme: jest.fn(() => ({
//     theme: { background: 'white', primary: 'black', name: 'Light' },
//     toggleTheme: jest.fn(),
//   })),
// }));

// describe('Setting component', () => {
//   it('renders correctly with mocked theme', () => {

//     const { getByText } = render(
//       <ThemeProvider>
//         <Setting />
//       </ThemeProvider>
//     );

//     expect(getByText('Customize Theme')).toBeTruthy();
//     expect(getByText('Color Theme')).toBeTruthy();
//     expect(getByText('Light')).toBeTruthy();
//   });

//   // it('opens modal on press', () => {
//   //   const { getByText } = render(
//   //     <ThemeProvider>
//   //       <Setting />
//   //     </ThemeProvider>
//   //   );

//   //   fireEvent.press(getByText('Color Theme'));
//   //   expect(getByText('Select Theme')).toBeTruthy();
//   // });

// });
