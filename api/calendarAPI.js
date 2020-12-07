import Calendar from 'tui-calendar';
import 'tui-calendar/dist/tui-calendar.css';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

// 캘린더 API 세팅
const calendarAPI = new Calendar('#calendar', {
    defaultView: 'month',
    taskView: true,
    useCreationPopup: true,
    useDetailPopup: true,
    template: {
        monthGridHeader: function (model) {
            const date = new Date(model.date);
            return '<span class="tui-full-calendar-weekday-grid-date">' + date.getDate() + '</span>';
        },
    },
});

//캐린더 이벤트 핸들링
const event = calendarAPI.on({
    clickSchedule: function (e) {
        console.log('clickSchedule', e);
    },
    beforeCreateSchedule: function (e) {
        console.log('beforeCreateSchedule', e);
        const newDataObj = {
            calendarId: '1',
            isReadOnly: true,
            isAllDay: e.isAllDay,
            end: new Date(e.end.getTime()).toJSON(),
            start: new Date(e.end.getTime()).toJSON(),
            title: e.title,
            location: e.location,
        };
        calendarAPI.createSchedules([newDataObj]);
        console.log(calendarAPI.getSchedule());
    },
    beforeUpdateSchedule: function (e) {
        console.log('beforeUpdateSchedule', e);
        e.schedule.start = e.start;
        e.schedule.end = e.end;
        cal.updateSchedule(e.schedule.id, e.schedule.calendarId, e.schedule);
    },
    beforeDeleteSchedule: function (e) {
        console.log('beforeDeleteSchedule', e);
        cal.deleteSchedule(e.schedule.id, e.schedule.calendarId);
    },
});

export { event };
export default calendarAPI;
