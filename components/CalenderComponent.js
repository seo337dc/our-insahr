import React, { useEffect } from 'react';
import Calendar from 'tui-calendar';
import 'tui-calendar/dist/tui-calendar.css';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

//2차 방식
const CalenderComponent = ({ sData }) => {
    console.log(sData);

    useEffect(() => {
        const calendar = new Calendar('#calendar', {
            defaultView: 'month',
            taskView: true,
            useCreationPopup: true,
            useDetailPopup: true,
            template: {
                monthGridHeader: function (model) {
                    var date = new Date(model.date);
                    var template = '<span class="tui-full-calendar-weekday-grid-date">' + date.getDate() + '</span>';
                    return template;
                },
            },
        });

        calendar.createSchedules(
            sData.map((data) => {
                return {
                    id: data.id,
                    title: data.title,
                    start: data.start,
                    end: data.end,
                    isReadOnly: data.isReadOnly,
                    category: data.category,
                    isReadOnly: false, //data.isReadOnly,
                    calendarId: data.calendarId,
                };
            })
        );
    }, []);

    return <div id="calendar" style={{ height: 800 + 'px' }}></div>;
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
