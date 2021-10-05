export const lightTheme = {
    body: '#E2E2E2',
    text: '#363537',
    header: 'rgba(0, 105, 137, 0.4)',
    navHover: 'rebeccapurple',
    mobileNavPrimary: '#fff',
    mobileNavSecondary: '#000',
    mobileNavTertiary: 'rgb(235, 235, 235)',
}

export const darkTheme = {
    body: 'rgba(0, 0, 25, 1)',
    text: '#FAFAFA',
    header: 'rgba(44, 62, 80, 1)',
    navHover: 'rgba(197, 239, 247, 1)',
    mobileNavPrimary: 'rgba(52, 73, 94, 1)',
    mobileNavSecondary: '#fff',
    mobileNavTertiary: 'rgb(27, 50, 70, 0.8)',
}

export type ThemeType = typeof lightTheme;
