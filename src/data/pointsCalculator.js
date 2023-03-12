import { getMonthNames } from './monthsSelector';

export const calculatePerMonth = (month) => {
    let monthTotalPoints = 0;
    month.transactions.forEach(transaction => {
        if(transaction.paymentUSD > 100) {
            monthTotalPoints += (transaction.paymentUSD-100)*2;
            monthTotalPoints += 50;
        }
        if(transaction.paymentUSD >= 50 && transaction.paymentUSD <=100 ) {
            monthTotalPoints += (transaction.paymentUSD-50);
        }
    })
    return monthTotalPoints;
}

export const calculate3MonthsTotalPoints = (history) => {
    let threeMonthsTotalPoints = 0;
    const last3MonthsNames = getMonthNames();

    const last3MonthsHistory = history.filter(month => {
        if (last3MonthsNames.includes(month.month)) {
            return month.month;
        }
    })

    last3MonthsHistory.forEach(month => {
       threeMonthsTotalPoints += calculatePerMonth(month);
    })
    return threeMonthsTotalPoints;
}
