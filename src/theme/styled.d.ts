import 'styled-components';

type Color = string

interface Palette {
  main: Color
  contrastText: Color
}

interface Dimmer {
  color: Color
  opacity: string
}

interface Hoverable {
  main: Color
  hover: Color
}

interface Navigation {
  regular: Palette,
  transparent: Palette
}

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadiusSmall: string
    borderRadiusNormal: string
    disabledOpacity: string
    dimmer: Dimmer
    palette: {
      separator: Color
      chevron: Hoverable
      background: Palette
      jumbo: Palette
      card: Palette
      primary: Palette
      secondary: Palette
      navigation: Navigation
      footer: Palette
    }
  }
}