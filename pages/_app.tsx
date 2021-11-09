import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from 'next/app'
import SearchFilterNotesProvider from '../context/SearchFilterNotesProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SearchFilterNotesProvider>
      <Component {...pageProps} />
    </SearchFilterNotesProvider>
  )
}
export default MyApp
