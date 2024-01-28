import React,{ useState } from "react";
import Event from './Event'

const Calendar =({ onHideCalendar })=> {
    const [showCalendar, setShowCalendar] = useState(true);
    const handleToggleClick = () => {
        setShowCalendar(!showCalendar);
        onHideCalendar(); 
    };
    return(
        <div className={`Calendar ${showCalendar ? "show" : "hide"}`}>
            <table>
                <thead>
                <tr>
                    <th></th>
                    <th>Sunday</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8 am</td>
                        <Event event='We Arrive 🎩' color ='green' location ='Maple and Ash'  />
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Get breakfast at Roots Cafe ' color='green'/>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <td></td>
                        <td></td>
                        <Event event='Go to salt flats' color='pink'/>
                        <td></td>
                        <Event event='Visit downtown square' color='pink'/>
                        <Event event='Visit the park' color='green'/>
                        <Event event='Return car rental' color='blue'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">10 am</td>          
            {/*}               <Event event='Get Rental car' color='blue'/>*/}
            {/*}               <Event event='Do some work meetings' color='pink'/>*/}
                        <td></td>
                        <td></td>           
            {/*}              <Event event='Visit muesuem of history' color='pink'/>*/}
                        <td></td>
            {/*}              <Event event='Relax at a spa' color='pink'/>*/}
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
            {/*}               <Event event='Road Trip Begins ' color='blue'/>*/}
                        <td></td>
            {/*}               <Event event='Do some work meetings' color='pink'/>*/}
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                        <td></td>
                        <Event event='Do some work meetings' color='pink'/>
                        <td></td>
                        <td></td>
            {/*}              <Event event='Get some lunch' color='green'/>*/}
                        <td></td>
            {/*}              <Event event='Get some lunch' color='green'/>*/}
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
            {/*}              <Event event='Drive to Salt Lake City' color='blue'/>*/}
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
            {/*}              <Event event = 'Bryce Canyon Park' color = 'pink'/>*/}
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event = 'Camping' color = 'green'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <button id="toggle-btn" onClick={handleToggleClick}>
                {showCalendar ? "View Cards" : "View Calendar"}
            </button>
        </div>
    );
};

export default Calendar;