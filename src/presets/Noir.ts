import { definePreset } from "@primevue/themes";
import Aura from "@primevue/themes/aura";

const Noir = definePreset(Aura, {
  semantic: {
    primary: {
      50: "#8F92BF",
      100: "#8F92BF",
      200: "#8F92BF",
      300: "#8F92BF",
      400: "#8F92BF",
      500: "#20268C",
      600: "#20268C",
      700: "#20268C",
      800: "#20268C",
      900: "#20268C",
      950: "#20268C",
    },
    colorScheme: {
      light: {
        primary: {
          color: "#20268C",
          contrastColor: "#FFFFFF",
          hoverColor: "#1A1F73",
          activeColor: "#14185A",
        },
        highlight: {
          background: "#8F92BF",
          focusBackground: "#7E81A8",
          color: "#14185A",
          focusColor: "#14185A",
        },
      },
      dark: {
        primary: {
          color: "#8F92BF",
          contrastColor: "#20268C",
          hoverColor: "#7A7DB5",
          activeColor: "#6669A2",
        },
        highlight: {
          background: "#20268C",
          focusBackground: "#1A1F73",
          color: "#FFFFFF",
          focusColor: "#FFFFFF",
        },
      },
    },
  },
});

export default Noir;
