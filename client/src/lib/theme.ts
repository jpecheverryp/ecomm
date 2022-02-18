import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#F6F6EB'
      }
    }
  },
  colors: {
    brand: {
      100: "#F6F6EB"
    }
  }
})

export default theme