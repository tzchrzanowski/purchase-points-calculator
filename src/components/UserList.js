import React from 'react';
import {UserListMock} from '../utils/mock/userList.mock';
import './UserList.css';
import {calculatePerMonth, calculate3MonthsTotalPoints} from "../data/pointsCalculator";
import { getMonthNames, lastThreeMonthsHistory } from "../data/monthsSelector";
import { getUserList } from "../data/apiRequests";

export const UserListComponent = () => {
    const [list, setList] = React.useState([]);
    const lastThreeMonthsNames = getMonthNames();

    React.useEffect(() => {
        const dataFetch = async () => {
            const data = await getUserList();
            setList(data);
        }
        dataFetch();
    }, []);

    return (
        <>
            <table className="marginAuto">
                <tbody>
                    <tr className="fb fRow fSBetween">
                        <th>User</th>
                        <th>Total Points</th>
                        {lastThreeMonthsNames.map((month, id) => {
                            return (<th key={`${id}-${month}`}>{month}</th>);
                        })}
                    </tr>
                    {/*----- use mock if api doesnt work -----*/}
                    {/*{UserListMock.map((el, id) => {*/}
                    {list.map((el, id) => {
                        return (<tr className="fb fRow fSBetween" key={`${id}`}>
                            <td>{el.userName}</td>
                            <td>{calculate3MonthsTotalPoints(el.purchaseHistory)}</td>
                            {lastThreeMonthsNames.map((monthName, key) => {
                                const currentMonth = lastThreeMonthsHistory(el.purchaseHistory).filter(month => month.month == monthName);
                                return (currentMonth.length > 0)
                                    ? (<td key={`${id}-${key}`}>{calculatePerMonth(currentMonth[0])}</td>)
                                    : (<td key={`${id}-${key}`}>0</td>);
                            })}
                        </tr>);
                    })}
                </tbody>
            </table>
        </>
    );
}
