export const getMonthNames = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth()+1;
    const last3Months = [];
    let month = currentMonth

    last3Months.push(`${currentMonth}-${currentDate.getFullYear()}`);

    for (let i = 0; i<2; i++) {
        if (month == 1) {
            last3Months.push(`12-${currentDate.getFullYear()}`);
            month = 12;
        } else {
            last3Months.push(`${month-1}-${currentDate.getFullYear()}`);
            month -=1;
        }
    }
    return last3Months;
}

export const lastThreeMonthsHistory = (history) => {
    return history.filter(month => {
        if (getMonthNames().includes(month.month)) {
            return month;
        }
    });
}
