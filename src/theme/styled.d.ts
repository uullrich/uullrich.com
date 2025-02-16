import 'styled-components'

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
  regular: Palette
  transparent: Palette
  hover: Color
}

interface Buzzword {
  unselected: Palette
  selected: Palette
  hover: Palette
  githubFill: Color
}

interface Button {
  standard: {
    palette: Palette
    borderRadius: string
    enabled: {
      opacity: string
    }
    disabled: {
      opacity: string
    }
  }
  alternative: {
    palette: Palette
    borderRadius: string
    enabled: {
      opacity: string
    }
    disabled: {
      opacity: string
    }
  }
}

interface Inputs {
  border: string
  outline: string
  outlineColor: string
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
      buzzword: Buzzword
      button: Button
      inputs: Inputs
      iconPrimary: Color
      iconSecondary: Color
    }
  }
}
