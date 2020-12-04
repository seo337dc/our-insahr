import Head from 'next/head';
import '../styles/calender.scss';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>인사 인트라넷 </Head>
            <Component {...pageProps} />
        </>
    );
}
