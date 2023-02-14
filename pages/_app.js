import { ConfigProvider } from 'antd';
import '../styles/main.css'

export default function App({ Component, pageProps }) {
  return (
    <ConfigProvider
            theme={{
                token: {
                    fontFamily: 'Ubuntu, sans-serif',
                },
            }}
        >
            <Component {...pageProps} />
        </ConfigProvider>
  )
    
}
