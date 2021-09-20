import App from 'next/app';
import '../styles/globals.css'
import 'antd/dist/antd.css';
import {useState} from "react";
import Layout from '../components/Layout'

/**
 * 固定LAYOUT, 保持一些公用状态 redux，给页面传入自定自定义错误
 * @param Component
 * @param pageProps
 * @returns {JSX.Element}
 * @constructor
 */


function MyApp({ Component, pageProps }) {
  console.log('Component----------', Component);
  const [count, setCount] = useState(12);
  return <Layout>
    <Component {...pageProps} count={count} />
  </Layout>
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  console.log('app init');
  let appProps;
  if (App.getInitialProps) {
    appProps = await App.getInitialProps(appContext);
  }

  return { ...appProps }
}

export default MyApp
