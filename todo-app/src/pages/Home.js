import React from 'react'
import { Eventcalendar, getJson, toast } from '@mobiscroll/react';
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

import NavigationBar from '../components/NavBar'

export default function Home() {
  
  const [myEvents, setEvents] = React.useState([]);

  React.useEffect(() => {
      getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
          setEvents(events);
      }, 'jsonp');
  }, []);
  
  const onEventClick = React.useCallback((event) => {
      toast({
          message: event.event.title
      });
  }, []);
  
    const view = React.useMemo(() => {
        return {
            calendar: { popover: true, count: true }
        };
    }, []);

  return (
    <>
      <NavigationBar />
      
      <Eventcalendar 
        
        theme="ios" 
              themeVariant="dark"
              clickToCreate={true}
              dragToCreate={true}
              dragToMove={true}
              dragToResize={true}
              eventDelete={true}
              view={view}
              onEventClick={onEventClick}
              data={[{
          start: new Date(),
          title: 'Today\'s event'
      }
      ]}
      
  />
  </>
  )
}
