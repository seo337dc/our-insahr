import Link from 'next/link';
import Layout from '../components/Layout/Layout';

const Index = (props) => {
    return (
        <Layout>
            <h1>메인 페이지 화면</h1>
        </Layout>
    );
};

export async function getServerSideProps(context) {
    //서버 api 데이터 로직
    //
    //
    //

    return {
        props: {},
    };
}

export default Index;
