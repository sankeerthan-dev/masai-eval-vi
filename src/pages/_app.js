import '@/styles/globals.css'
import Nav from './nav'

export default function App({ Component, pageProps }) {
  return <div><Nav/><Component {...pageProps} /></div>
}
