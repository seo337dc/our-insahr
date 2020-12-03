import React, { useEffect, useState } from 'react';
import calendarAPI from '../api/calendarAPI';

//2차 방식
const CalenderComponent = ({ sData }) => {
    useEffect(() => {
        calendarAPI.createSchedules([
            {
                id: '1',
                calendarId: '1',
                title: 'my schedule',
                category: 'time',
                dueDateClass: '',
                start: '2020-12-02T22:30:00+09:00',
                end: '2020-12-19T02:30:00+09:00',
            },
            {
                id: '2',
                calendarId: '1',
                title: 'second schedule',
                category: 'time',
                dueDateClass: '',
                start: '2018-01-18T17:30:00+09:00',
                end: '2018-01-19T17:31:00+09:00',
                isReadOnly: true, // schedule is read-only
            },
        ]);
    });

    const handleView = (view) => {
        switch (view) {
            case 'month':
                calendarAPI.changeView('month', true);
                break;
            case 'week':
                calendarAPI.changeView('week', true);
                break;
            case 'day':
                calendarAPI.changeView('day', true);
                break;

            default:
                break;
        }
    };

    return (
        <div>
            <div>
                <button onClick={() => handleView('month')}>M</button>
                <button onClick={() => handleView('week')}>W</button>
                <button onClick={() => handleView('day')}>D</button>
            </div>
            <div id="calendar"></div>
        </div>
    );
};

export default CalenderComponent;

/* ----------------  스케쥴 생성 예시 -------------- */
// calendar.createSchedules([
// {
//     id: '1',
//     calendarId: '1',
//     title: 'my schedule',
//     category: 'time',
//     dueDateClass: '',
//     start: '2020-12-02T22:30:00+09:00',
//     end: '2020-12-19T02:30:00+09:00',
// },
// {
//     id: '2',
//     calendarId: '1',
//     title: 'second schedule',
//     category: 'time',
//     dueDateClass: '',
//     start: '2018-01-18T17:30:00+09:00',
//     end: '2018-01-19T17:31:00+09:00',
//     isReadOnly: true, // schedule is read-only
// },
// ]);
