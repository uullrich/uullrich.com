import * as React from 'react'
import { useEffect, useState, useContext } from 'react'
import { getCookieConsentValue } from 'react-cookie-consent'

type ProviderProps = {
  children?: React.ReactNode
}

export type CookieStatus = {
  googleAnalytics: {
    decided: boolean
    enabled: boolean | undefined
  }
}

export type Context = {
  cookieStatus: CookieStatus
  changeGoogleAnalyticsCookie: (value: boolean) => void
}

const defaultValue: Context = {
  cookieStatus: {
    googleAnalytics: {
      decided: false,
      enabled: undefined,
    },
  },
  changeGoogleAnalyticsCookie: (value: boolean) => {},
}

const GlobalContext = React.createContext<Context>(defaultValue)
export const useGlobalContext = () => useContext(GlobalContext)

const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [cookieStatus, setCookieStatus] = useState<CookieStatus>({
    googleAnalytics: {
      decided: false,
      enabled: undefined,
    },
  })

  useEffect(() => {
    if (getCookieConsentValue('gatsby-gdpr-google-analytics') === 'true') {
      setCookieStatus(cookieStatus => ({
        ...cookieStatus,
        googleAnalytics: {
          decided: true,
          enabled: true,
        },
      }))
    } else if (
      getCookieConsentValue('gatsby-gdpr-google-analytics') === 'false'
    ) {
      setCookieStatus(cookieStatus => ({
        ...cookieStatus,
        googleAnalytics: {
          decided: true,
          enabled: false,
        },
      }))
    } else {
      setCookieStatus(cookieStatus => ({
        ...cookieStatus,
        googleAnalytics: {
          decided: false,
          enabled: undefined,
        },
      }))
    }
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        cookieStatus,
        changeGoogleAnalyticsCookie: (value: boolean) => {
          setCookieStatus({
            ...cookieStatus,
            googleAnalytics: {
              decided: true,
              enabled: value,
            },
          })
        },
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default Provider
