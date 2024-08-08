const calculateDate = (endDate, recur=false) => {
    const now = new Date();
    const end = new Date(endDate);
    
    const timeDifference = (end - now);
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    if (recur) {
        let currentDate = new Date();

        let dueDate = new Date(currentDate);
        dueDate.setDate(currentDate.getDate() + daysDifference);

        let recurDate = new Date(dueDate);
        recurDate.setDate(dueDate.getDate() + daysDifference);

        return currentDate < dueDate ? 'future' : 'past';
    }

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

export {calculateDate, convertDateToString};