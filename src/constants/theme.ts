import { extendTheme } from "@chakra-ui/react";
import { FaBluetooth } from "react-icons/fa";
const REM_UNIT = '16'


const options = {
    fonts: {
        heading: 'var(--font-inter)',
        body: 'var(--font-inter)',
        italic: 'var(--font-playfair)',
    },
    fontSizes: {
        "2xs": `calc(10/${REM_UNIT} * 1rem)`,
        "xs": `calc(12/${REM_UNIT} * 1rem)`,
        "sm": `calc(14/${REM_UNIT} * 1rem)`,
        "md": `calc(16/${REM_UNIT} * 1rem)`,
        "lg": `calc(18/${REM_UNIT} * 1rem)`,
        "xl": `calc(24/${REM_UNIT} * 1rem)`,
        "2xl": `calc(26/${REM_UNIT} * 1rem)`,
        "3xl": `calc(34/${REM_UNIT} * 1rem)`,
    },
    fontWeights: {
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
    },
}
const lightColors = {
    text: {
        black: "#000000",
        dark: "#504E4E",
        grey: "#6A6969",
        white: "#FFFFFF",
        primary: 'rgba(7, 29, 85, 1)',
    },
    brand: {
        black: "#000000",
        dark: "#504E4E",
        grey: "#514949",
        white: "#FFFFFF",
        offWhite: "rgba(243, 243, 243, 1)",
        primary: 'rgba(53, 86, 171, 1)',
        primaryGrade: 'linear-gradient(#892063, #DA2A42)',
        secondary: '#DA2A42',
        active: '#DA2A42',
        active50: '#FCF8F9',
        active100: '#FEF2F7',
        highlight: '#4299e199',
        shadow: "#DED8D8",
        border: "#C8C8C8",
        hover: "rgba(0,0,0,0.06)",
        crimson: '#BF1010',
        lemon: 'rgba(205, 229, 61, 1)',
        yellow: 'rgba(242, 201, 76, 1)',
        green: 'rgba(83, 218, 105, 1)',
        blue: 'rgba(7, 29, 85, 1)',
        buttonBlue: 'rgba(18, 62, 177, 1)',
        buttonRed: 'rgba(114, 13, 13, 1)',
        dropShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    }
}
const darkColors: typeof lightColors = {
    text: {
        black: "#FFFFFF",
        dark: "#504E4E",
        grey: "#6A6969",
        white: "#000000",
        primary: 'rgba(7, 29, 85, 1)',
    },
    brand: {
        black: "#FFFFFF",
        dark: "#504E4E",
        grey: "#514949",
        white: "#000000",
        offWhite: "rgba(243, 243, 243, 1)",
        primary: 'rgba(53, 86, 171, 1)',
        primaryGrade: 'linear-gradient(#892063, #DA2A42)',
        secondary: '#DA2A42',
        active: '#DA2A42',
        active50: '#FCF8F9',
        active100: '#FEF2F7',
        highlight: '#4299e199',
        shadow: "#DED8D8",
        border: "#C8C8C8",
        hover: "rgba(0,0,0,0.06)",
        crimson: '#DA2A42',
        lemon: 'rgba(205, 229, 61, 1)',
        yellow: 'rgba(242, 201, 76, 1)',
        green: 'rgba(83, 218, 105, 1)',
        blue: 'rgba(7, 29, 85, 1)',
        buttonBlue: 'rgba(18, 62, 177, 1)',
        buttonRed: 'rgba(114, 13, 13, 1)',
        dropShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    }
}
export enum TextColor {
    black = "text.black",
    dark = "text.dark",
    grey = "text.grey",
    white = "text.white",
    primary = "text.primary",
}
export enum BrandColor {
    black = "brand.black",
    dark = "brand.dark",
    grey = "brand.grey",
    white = "brand.white",
    offWhite = "brand.offWhite",
    primary = "brand.primary",
    primaryGrade = "brand.primaryGrade",
    secondary = "brand.secondary",
    active = "brand.active",
    active50 = "brand.active50",
    active100 = "brand.active100",
    highlight = "brand.highlight",
    shadow = "brand.shadow",
    border = "brand.border",
    hover = "brand.hover",
    crimson = "brand.crimson",
    lemon = "brand.lemon",
    yellow = "brand.yellow",
    green = "brand.green",
    blue = "brand.blue",
    buttonBlue = "brand.buttonBlue",
    buttonRed = "brand.buttonRed",
    dropShadow = "brand.dropShadow",
}


const lightTheme = extendTheme({
    ...options,
    colors: lightColors,
    config: {
        initialColorMode: 'system',
        useSystemColorMode: false
    }
})
const darkTheme = extendTheme({
    ...options,
    colors: darkColors,
    config: {
        initialColorMode: 'system',
        useSystemColorMode: false
    }
})
export const theme = { 
    'light': lightTheme,
    'dark': darkTheme,
}