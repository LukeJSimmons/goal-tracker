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
    let parts = input.split(' ');
    if (parts.length <= 1) {
        return null;
    }
    if (parts.length > 2) {
        parts = parts.filter(part => part.trim() !== '');
    }
    const number = Number(parts[0]);
    const type = parts[1];

    let typeNumber = 1;

    if (type.toLowerCase() === 'week' || type.toLowerCase() ==='weeks') {
        typeNumber = 7;
    } else if (type.toLowerCase() === 'day' || type.toLowerCase() ==='days') {
        typeNumber = 1;
    } else {
        return null;
    }

    return number * typeNumber;
}


export {calculateDate, convertDateToString, convertWordsToInterval};