const date = require('date-fns');

const getStartEndDate = (requestDate, frequency) => {

    const datesFilter = {};

    switch (frequency) {
        case 'daily':
            datesFilter.startDate = date.startOfDay(new Date(requestDate));
            datesFilter.endDate = date.endOfDay(new Date(requestDate));
            datesFilter.frequency = 'hour';
            break;
        case 'weekly':
            datesFilter.startDate = date.startOfWeek(new Date(requestDate));
            datesFilter.endDate = date.endOfWeek(new Date(requestDate));
            datesFilter.frequency = 'day';
            break;
        case 'monthly':
            datesFilter.startDate = date.startOfMonth(new Date(requestDate));
            datesFilter.endDate = date.endOfMonth(new Date(requestDate));
            datesFilter.frequency = 'day';
            break;
    }

    return datesFilter;
};

module.exports = {
    getStartEndDate
};