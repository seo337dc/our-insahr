import dynamic from 'next/dynamic';
import schedule_data from '../config/schedule_data';

const DynamicComponentWithNoSSR = dynamic(() => import('../components/CalenderComponent'), { ssr: false });

const Index = ({ sData }) => {
    return (
        <div>
            <DynamicComponentWithNoSSR sData={sData} />
        </div>
    );
};

export async function getServerSideProps(context) {
    //서버 api 접근

    return {
        props: { sData: schedule_data },
    };
}

export default Index;
