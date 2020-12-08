import dynamic from 'next/dynamic';
import schedule_data from '../config/schedule_data';
import Layout from '../components/Layout/Layout';

const DynamicComponentWithNoSSR = dynamic(() => import('../components/CalenderComponent'), { ssr: false });

const calender = ({ sData }) => {
    return (
        <Layout>
            <h1>aaaa</h1>
            <DynamicComponentWithNoSSR sData={sData} />
        </Layout>
    );
};

export async function getServerSideProps(context) {
    //서버 api 데이터 로직
    //
    //
    //

    return {
        props: { sData: schedule_data },
    };
}
export default calender;
