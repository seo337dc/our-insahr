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
export default calendarAPI;
