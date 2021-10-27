import "./widgetLg.css";

export default function WidgetLg() {
    const Button = ({type}) =>{
        return <button className={"widgetLgBtn " + type}>
            {type}
        </button>
    }

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transcations</h3>
            <table className="widgetLgtable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">S.No</th>
                    <th className="widgetLgTh">Photo</th>
                    <th className="widgetLgTh">Customer Name</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>                                        
                </tr>
                {/* data */}
                <tr className="widgetLgTr">
                    <td className="widgetLgSno">CS/001</td>
                    <td className="widgetLgUser">
                        <img src="./assets/img/phn.jpeg" alt="" className="widgetLgImg"/>
                    </td>
                    <td className="widgetUsername">Dongo Amuza</td>
                    <td className="widgetLgDate">10-21-2021</td>
                    <td className="widgetLgAmount">$259.98</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgSno">CS/002</td>
                    <td className="widgetLgUser">
                        <img src="./assets/img/phn.jpeg" alt="" className="widgetLgImg"/>
                    </td>
                    <td className="widgetUsername">Ruth Ravi</td>
                    <td className="widgetLgDate">8-25-2021</td>
                    <td className="widgetLgAmount">$259.98</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgSno">CS/003</td>
                    <td className="widgetLgUser">
                        <img src="./assets/img/phn.jpeg" alt="" className="widgetLgImg"/>
                    </td>
                    <td className="widgetUsername">Avi David</td>
                    <td className="widgetLgDate">9-21-2021</td>
                    <td className="widgetLgAmount">$259.98</td>
                    <td className="widgetLgStatus">
                        <Button type="Pendding"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgSno">CS/004</td>
                    <td className="widgetLgUser">
                        <img src="./assets/img/phn.jpeg" alt="" className="widgetLgImg"/>
                    </td>
                    <td className="widgetUsername">Tonny Evi</td>
                    <td className="widgetLgDate">10-23-2021</td>
                    <td className="widgetLgAmount">$259.98</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgSno">CS/005</td>
                    <td className="widgetLgUser">
                        <img src="./assets/img/phn.jpeg" alt="" className="widgetLgImg"/>
                    </td>
                    <td className="widgetUsername">Susan Carol</td>
                    <td className="widgetLgDate">6-12-2021</td>
                    <td className="widgetLgAmount">$259.98</td>
                    <td className="widgetLgStatus">
                        <Button type="Cleared"/>
                    </td>
                </tr>
            </table>
        </div>
    )
}
