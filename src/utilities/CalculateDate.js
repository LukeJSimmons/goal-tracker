const calculateDate = (dueDate) => {
    const now = new Date();
    const end = new Date(dueDate);
    
    const timeDifference = (end - now);
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysDifference;
}

const convertDateToString = (daysDifference) => {
    let response = '';

    const weeksDifference = daysDifference / 7;
    
    if (daysDifference % 7 === 0) {
        response = `Due in ${weeksDifference} Week`;
        if (weeksDifference > 1) {
            response += 's';
        }
    } else {
        response = `Due in ${daysDifference} Day`;
        if (daysDifference > 1) {
            response += 's';
        }
    }

    if (daysDifference <= 0) {
        response = 'Due Today';
    }

    return response;
}

const convertWordsToInterval = (input) => {
    const parts = input.split(' ');
    if (parts.length <= 1) {
        
    }
    const number = Number(parts[0]);
    const type = parts[1];

    let typeNumber = 1;

    if (type === 'week' || type ==='weeks') {
        typeNumber = 7;
    } else if (type === 'month' || type === 'months') {
        typeNumber = 30;
    } else {
        typeNumber = 1;
    }

    return number * typeNumber;
}


export {calculateDate, convertDateToString, convertWordsToInterval};