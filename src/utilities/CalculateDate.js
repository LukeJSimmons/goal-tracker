const CalculateDate = (endDate) => {
    const now = new Date();
    const end = new Date(endDate);
    
    const timeDifference = Math.abs(end - now);
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    const weeksDifference = (daysDifference / 7);

    let response = '';
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

export default CalculateDate;