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

    return response;
}

const calculateRecur = (dateCreated, dueDate) => {
    const timeDifference = (new Date(dueDate) - dateCreated);
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    let recurDate = new Date(dueDate);
    recurDate.setDate(dueDate.getDate() + daysDifference);

    return recurDate;
}

export {calculateDate, convertDateToString, calculateRecur};