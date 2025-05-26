import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    theme:{
        textStyles:{
            "5xl":{
                fontSize: "48px",
                lineHeight: "60px"
            },
            "4xl":{
                fontSize: "36px",
                lineHeight: "44px"
            },
            "3xl":{
                fontSize: "30px",
                lineHeight: "38px"
            },
            "2xl":{
                fontSize: "24px",
                lineHeight: "32px"
            },
            "xl":{
                fontSize: "20px",
                lineHeight: "30px"
            },
            "lg":{
                fontSize: "18px",
                lineHeight: "28px"
            },
            "md":{
                fontSize: "16px",
                lineHeight: "24px"
            },
            "sm":{
                fontSize: "14px",
                lineHeight: "20px"
            },
            "xs":{
                fontSize: "12px",
                lineHeight: "18px"
            }
        },
        colors:{
            gray:{
                50: "#F7FAFC",
                100: "#EDF2F7",
                200: "#E2E8F0",
                300: "#CBD5E0",
                400: "#A0AEC0",
                500: "#718096",
                600: "#4A5568",
                700: "#2D3748",
                800: "#1A202C",
                900: "#171923"
            },
            teal:{
                50: "#E6FFFA",
                100: "#B2F5EA",
                200: "#81E6D9",
                300: "#4FD1C5",
                400: "#38B2AC",
                500: "#319795",
                600: "#319795",
                700: "#319795",
                800: "#234E52",
                900: "#1D4044",
            },
            blue:{
                50: "#EBF8FF",
                100: "#CEEDFF",
                200: "#CEEDFF",
                300: "#CEEDFF",
                400: "#CEEDFF",
                500: "#3182CE",
                600: "#2A69AC",
                700: "#1E4E8C",
                800: "#153E75",
                900: "#1A365D",
            }
        },
    }

})

export default theme