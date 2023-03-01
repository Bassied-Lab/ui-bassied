import { MantineThemeOverride } from "@mantine/core";

export const lightTheme: MantineThemeOverride = {
  colorScheme: "light",
  colors: {},
  components: {
    Button: {
      defaultProps: {
        variant: "contained",
        fullWidth: true,
      },
      styles: {
        root: {
          backgroundColor: "red",
          borderRadius: "2.25rem",
          "&:hover": {
            background: "black",
          },
        },
      },
    },
  },
};
