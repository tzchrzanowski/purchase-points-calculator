import {UserListMock} from '../../utils/mock/userList.mock';
import {calculate3MonthsTotalPoints, calculatePerMonth} from "../pointsCalculator";

test('check if sum of points per month from mock is correct', () => {
    expect(calculatePerMonth(UserListMock[0].purchaseHistory[0])).toEqual(54);
});

test('check if sum of mocked month is correct', () => {
    const mockedMonth = {
            month: "3-2023",
            transactions: [
                {
                    transactionId: "tr1",
                    products: [],
                    paymentUSD: 150
                },
                {
                    transactionId: "tr2",
                    products: [],
                    paymentUSD: 120
                },
                {
                    transactionId: "tr3",
                    products: [],
                    paymentUSD: 20
                }
            ]
        };
    expect(calculatePerMonth(mockedMonth)).toEqual(240);
});

test('check if sum of total points is correct', () => {
    expect(calculate3MonthsTotalPoints(UserListMock[0].purchaseHistory)).toEqual(64);
});
