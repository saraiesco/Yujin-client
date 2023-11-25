import './Clinician.scss';
import logout from '../../assets/logout.png'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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


function Clinician(){
    return(
        <div className='clinician'>
            <p>Welcome Hira!</p>
            <img className='logout' src={logout}/>
            <Calendar
      localizer={localizer}g
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
        </div>
    )
}

export default Clinician;