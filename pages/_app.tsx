import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { IntlProvider } from "react-intl";

import useGetTranslations from "../hooks/useGetTranslations";

function MyApp({ Component, pageProps }: AppProps) {
  const { messages, currentLocale } = useGetTranslations();

  if (!messages) return null

  return <IntlProvider messages={messages} defaultLocale='en-US' locale={currentLocale} >
    <Component {...pageProps} />
    </IntlProvider>
}
export default MyApp
