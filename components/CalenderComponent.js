import React, { useEffect, useState, useMemo } from 'react';
import calendarAPI from '../api/calendarAPI';
import { BsCheck } from 'react-icons/bs';

const CalenderComponent = ({ sData }) => {
    const [today, setToday] = useState(new Date());
    const [checkColor, setCheckColor] = useState({
        total: true,
        task: false,
        officialSchedule: false,
        internalMeeting: false,
        externalMeeting: false,
        outsideWork: false,
        ect: false,
    });
    const [viewState, setViewState] = useState({ month: true, week: false, day: false });

    useEffect(() => {
        calendarAPI.clear();
        calendarAPI.createSchedules(
            sData.map((data) => {
                switch (data.calendarId) {
                    case '1':
                        return { ...data, borderColor: '#176db8', bgColor: '#176db8' };

                    case '2':
                        return { ...data, borderColor: '#eb678f', bgColor: '#eb678f' };

                    case '3':
                        return { ...data, borderColor: '#b38ae4', bgColor: '#b38ae4' };

                    case '4':
                        return { ...data, borderColor: '#fedf7b', bgColor: '#fedf7b' };

                    case '5':
                        return { ...data, borderColor: '#9bdba0', bgColor: '#9bdba0' };

                    default:
                        return { ...data, borderColor: '#999999', bgColor: '#999999' };
                }
            })
        );
    }, []);

    useEffect(() => {
        //전체 선택 시 : 캘린더 전체
        if (checkColor.total) {
            if (checkColor.total) {
                calendarAPI.toggleSchedules('1', false, true);
                calendarAPI.toggleSchedules('2', false, true);
                calendarAPI.toggleSchedules('3', false, true);
                calendarAPI.toggleSchedules('4', false, true);
                calendarAPI.toggleSchedules('5', false, true);
                calendarAPI.toggleSchedules('99', false, true);
            } else {
                calendarAPI.toggleSchedules('1', true, true);
                calendarAPI.toggleSchedules('2', true, true);
                calendarAPI.toggleSchedules('3', true, true);
                calendarAPI.toggleSchedules('4', true, true);
                calendarAPI.toggleSchedules('5', true, true);
                calendarAPI.toggleSchedules('99', true, true);
            }
            return;
        }

        //업무,공식일정,내부미팅,외부미팅,외근,기타 선택 시 : 선택 된 캘린더
        checkColor.task ? calendarAPI.toggleSchedules('1', false, true) : calendarAPI.toggleSchedules('1', true, true);
        checkColor.officialSchedule ? calendarAPI.toggleSchedules('2', false, true) : calendarAPI.toggleSchedules('2', true, true);
        checkColor.internalMeeting ? calendarAPI.toggleSchedules('3', false, true) : calendarAPI.toggleSchedules('3', true, true);
        checkColor.externalMeeting ? calendarAPI.toggleSchedules('4', false, true) : calendarAPI.toggleSchedules('4', true, true);
        checkColor.outsideWork ? calendarAPI.toggleSchedules('5', false, true) : calendarAPI.toggleSchedules('5', true, true);
        checkColor.ect ? calendarAPI.toggleSchedules('99', false, true) : calendarAPI.toggleSchedules('99', true, true);
    }, [checkColor]);

    const onHandleView = (view) => {
        //월,주,일 -> 이미 선택 했으면 취소
        if (viewState[view]) {
            return;
        }

        switch (view) {
            case 'month':
                setViewState({ month: true, week: false, day: false });
                calendarAPI.changeView('month', true);

                break;
            case 'week':
                setViewState({ month: false, week: true, day: false });
                calendarAPI.changeView('week', true);

                break;
            case 'day':
                setViewState({ month: false, week: false, day: true });
                calendarAPI.changeView('day', true);
                break;

            default:
                break;
        }
    };

    const onHandleCalColor = (calendarId) => {
        //전체, 업무,공식일정,내부미팅,외부미팅,외근,기타 아이콘 변경
        switch (calendarId) {
            case 1:
                if (checkColor.task) {
                    setCheckColor({ ...checkColor, total: false, task: false });
                } else {
                    setCheckColor({ ...checkColor, total: false, task: true });
                }
                break;

            case 2:
                if (checkColor.officialSchedule) {
                    setCheckColor({ ...checkColor, total: false, officialSchedule: false });
                } else {
                    setCheckColor({ ...checkColor, total: false, officialSchedule: true });
                }
                break;

            case 3:
                if (checkColor.internalMeeting) {
                    setCheckColor({ ...checkColor, total: false, internalMeeting: false });
                } else {
                    setCheckColor({ ...checkColor, total: false, internalMeeting: true });
                }
                break;

            case 4:
                if (checkColor.externalMeeting) {
                    setCheckColor({ ...checkColor, total: false, externalMeeting: false });
                } else {
                    setCheckColor({ ...checkColor, total: false, externalMeeting: true });
                }
                break;

            case 5:
                if (checkColor.outsideWork) {
                    setCheckColor({ ...checkColor, total: false, outsideWork: false });
                } else {
                    setCheckColor({ ...checkColor, total: false, outsideWork: true });
                }
                break;

            case 99:
                if (checkColor.ect) {
                    setCheckColor({ ...checkColor, total: false, ect: false });
                } else {
                    setCheckColor({ ...checkColor, total: false, ect: true });
                }
                break;

            default:
                if (checkColor.total) {
                    setCheckColor({
                        total: false,
                        task: false,
                        officialSchedule: false,
                        internalMeeting: false,
                        externalMeeting: false,
                        outsideWork: false,
                        ect: false,
                    });
                } else {
                    setCheckColor({
                        total: true,
                        task: false,
                        officialSchedule: false,
                        internalMeeting: false,
                        externalMeeting: false,
                        outsideWork: false,
                        ect: false,
                    });
                }
                break;
        }
    };

    return (
        <div className="calender-container">
            <div className="calender-date">
                <div className="date-btn">{`<`}</div>
                <div className="date">
                    {today.getFullYear()}.{today.getMonth() + 1}
                </div>
                <div className="date-btn">{`>`}</div>
            </div>
            <div className="calender-menu">
                <div className="calender-color">
                    <div onClick={() => onHandleCalColor(0)}>
                        <div className="total">{checkColor.total && <BsCheck color="white" />}</div>
                        <p>전체</p>
                    </div>
                    <div onClick={() => onHandleCalColor(1)}>
                        <div className="task">{checkColor.task && <BsCheck color="white" />}</div>
                        <p>업무</p>
                    </div>
                    <div onClick={() => onHandleCalColor(2)}>
                        <div className="official-schedule">{checkColor.officialSchedule && <BsCheck color="white" />}</div>
                        <p>공식 일정</p>
                    </div>
                    <div onClick={() => onHandleCalColor(3)}>
                        <div className="internal-meeting">{checkColor.internalMeeting && <BsCheck color="white" />}</div>
                        <p>내부미팅</p>
                    </div>
                    <div onClick={() => onHandleCalColor(4)}>
                        <div className="external-meeting">{checkColor.externalMeeting && <BsCheck color="white" />}</div>
                        <p>외부미팅</p>
                    </div>
                    <div onClick={() => onHandleCalColor(5)}>
                        <div className="outside-work">{checkColor.outsideWork && <BsCheck color="white" />}</div>
                        <p>외근</p>
                    </div>
                    <div onClick={() => onHandleCalColor(99)}>
                        <div className="ect">{checkColor.ect && <BsCheck color="white" />}</div>
                        <p>기타</p>
                    </div>
                </div>
                <div className="calender-category">
                    <div className={viewState['month'] ? 'disable-on' : 'disable-off'} onClick={() => onHandleView('month')}>
                        <img src="img/month-icons.png" />
                    </div>
                    <div className={viewState['week'] ? 'disable-on' : 'disable-off'} onClick={() => onHandleView('week')}>
                        <img src="img/week-icons.png" />
                    </div>
                    <div className={viewState['day'] ? 'disable-on' : 'disable-off'} onClick={() => onHandleView('day')}>
                        <img src="img/day-icons.png" />
                    </div>
                </div>
            </div>
            <div className="calendar-main">
                <div id="calendar" />
            </div>
        </div>
    );
};

export default CalenderComponent;
