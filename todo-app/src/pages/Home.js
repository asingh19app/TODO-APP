import React from 'react'
import { Eventcalendar, getJson, toast, Select, CalendarNav, CalendarPrev, CalendarNext, CalendarToday, momentTimezone } from '@mobiscroll/react';
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import NavigationBar from '../components/NavBar'

import moment from 'moment-timezone';
import {useState, useMemo, useEffect, useCallback} from 'react'

// setup Mobiscroll Moment plugin
momentTimezone.moment = moment;

export default function Home() {
    const [timezone, setTimezone] = useState('utc');
    
    const timezones = useMemo(() => {
        return [{
            text: 'America/Los Angeles',
            value: 'America/Los_Angeles'
        }, {
            text: 'America/Chicago',
            value: 'America/Chicago'
        }, {
            text: 'America/New York',
            value: 'America/New_York'
        }, {
            text: 'UTC',
            value: 'utc'
        }, {
            text: 'Europe/London',
            value: 'Europe/London'
        }, {
            text: 'Europe/Berlin',
            value: 'Europe/Berlin'
        }, {
            text: 'Europe/Bucharest',
            value: 'Europe/Bucharest'
        }, {
            text: 'Asia/Shanghai',
            value: 'Asia/Shanghai'
        }, {
            text: 'Asia/Tokyo',
            value: 'Asia/Tokyo'
        }]
    }, []);
    
  const [myEvents, setEvents] = useState([]);

    const onChange = useCallback((ev) => {
        setTimezone(ev.value);
    }, []);
    
    
    useEffect(() => {
      getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
          setEvents(events);
      }, 'jsonp');
  }, []);
  
    const onEventClick = useCallback((event) => {
      toast({
          message: event.event.title
      });
  }, []);
  
    const view = useMemo(() => {
        return {
            calendar: { popover: true, count: true }
        };
    }, []);

        const myHeader = () => {
        return <>
            <CalendarNav className="md-timezone-nav" />
            <div className="md-timezone-header">
                <CalendarPrev/>
                <CalendarToday />
                <CalendarNext />
                <Select data={timezones} inputStyle="box" touchUi={false} display="anchored" value={timezone} onChange={onChange} />
            </div>
        </>;
    }

  return (
    <>
      <NavigationBar />
      
      <Eventcalendar 
        
        theme="ios" 
        themeVariant="dark"
        clickToCreate={true}
        dragToCreate={true}
        dragToMove={true}
        dataTimezone='utc'
        displayTimezone='local'
        timezonePlugin={momentTimezone}
        dragToResize={true}
        eventDelete={true}
        view={view}
        onEventClick={onEventClick}
        data={[{
        start: new Date(),
        title: 'Today\'s event'},{myEvents}]}
        renderHeader={myHeader}
  />
  </>
  )
}
