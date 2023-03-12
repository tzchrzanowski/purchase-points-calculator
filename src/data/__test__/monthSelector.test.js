import {getMonthNames, lastThreeMonthsHistory} from "../monthsSelector";
import {UserListMock} from '../../utils/mock/userList.mock';

test('checks if last 3 months are as expected', () => {
    const monthsToTest = getMonthNames()
    expect(monthsToTest).toEqual(["3-2023", "2-2023", "1-2023"]);
});

test('checks if only months from last 3 months are added', () => {
    const expected = [
        {
            month: "3-2023",
            transactions: [
                {
                    transactionId: "tr0001",
                    products: [],
                    paymentUSD: 150
                },
                {
                    transactionId: "tr876878",
                    products: [],
                    paymentUSD: 120
                },
            ]
        },
        {
            month: "2-2023",
            transactions: [
                {
                    transactionId: "tr2134111",
                    products: [],
                    paymentUSD: 60
                },
            ]
        }
    ];
    expect(lastThreeMonthsHistory(UserListMock[1].purchaseHistory)).toEqual(expected);
});
