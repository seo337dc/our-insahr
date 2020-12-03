import Calendar from 'tui-calendar';
import 'tui-calendar/dist/tui-calendar.css';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

const calendarAPI = new Calendar('#calendar', {
    defaultView: 'month',
    taskView: true,
    useCreationPopup: true,
    useDetailPopup: true,
    template: {
        monthGridHeader: function (model) {
            var date = new Date(model.date);
            console.log(model);
            var template = '<span class="tui-full-calendar-weekday-grid-date">' + date.getDate() + '</span>';
            return template;
        },
    },
});

export default calendarAPI;
