import './Clinician.scss';
import logout from '../../assets/logout.png'
import { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { Calendar, dateFnsLocalizer,Views} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';



const locales = {
    'en-US': enUS,
  }
  
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  })


function Clinician({handleLogout , user}){
  const navigate = useNavigate();

async function onClick(){
  handleLogout();
  navigate('/');
}



//for each user.fullClientObject grab lastApp and nexApp
// convert format into a timestamp
const calendarData = [];

for (const clientObject of user.fullClientObjects) {
  const events = [];

  const lastAppDate = new Date(clientObject.lastApp);
  const thirtyMinutesLater = lastAppDate.setMinutes(lastAppDate.getMinutes() + 30);

  events.push({
    title: clientObject.name,
    start: lastAppDate.getTime(),
    end: thirtyMinutesLater,
  });

  if (clientObject.nextApp) {
    events.push({
      title: clientObject.name,
      start: new Date(clientObject.nextApp).getTime(),
      end: new Date(clientObject.nextApp).setMinutes(new Date(clientObject.nextApp).getMinutes() + 30),
    });
  }

  calendarData.push(...events);
}

    return(
        <div className='clinician'>
            <p>Welcome {user.name.split(" ")[0]}!</p>
            <img className='logout' src={logout} onClick={onClick}/>
            <Calendar
      localizer={localizer}
      events={calendarData}
      views={[Views.MONTH, Views.AGENDA]}
      toolbarClassName="my-toolbar-class"
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
        </div>
    )
}

export default Clinician;