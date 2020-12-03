import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() => import('../components/CalenderComponent'), { ssr: false });
const Index = ({ sData }) => {
    return (
        <div>
            <DynamicComponentWithNoSSR sData={sData} />
        </div>
    );
};

export async function getServerSideProps(context) {
    // calendarId: "99"
    // category: "time"
    // end: "2020-11-28T18:00"
    // id: "149"
    // isAllDay: false
    // isReadOnly: true
    // start: "2020-11-28T13:00"
    // title: "한국심리측정평가학회 2020 연구방법론 기초학교 과정8 : 문항반응이론"

    //서버 api 접근
    const sData = [
        {
            id: '149',
            title: '한국심리측정평가학회 2020 연구방법론 기초학교 과정8 : 문항반응이론',
            calendarId: '99',
            category: 'time',
            calendarId: '99',
            start: '2020-12-28T13:00',
            end: '2020-12-31T18:00',
            isAllDay: false,
            isReadOnly: true,
        },
    ];

    return {
        props: { sData }, // will be passed to the page component as props
    };
}

export default Index;
