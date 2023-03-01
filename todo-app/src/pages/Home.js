import React from 'react'
import { Eventcalendar, getJson, toast } from '@mobiscroll/react';
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

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
          calendar: { labels: true }
      };
  }, []);

  return (
    
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
    // ,
    
    //  {
    //     start: new Date(2020, 11, 18, 9, 0),
    //     end: new Date(2020, 11, 20, 13, 0),
    //     title: 'Multi day event'
    // }
    ]}
    
/>
  )
}
