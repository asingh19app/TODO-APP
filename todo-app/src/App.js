import './App.css';
import NavigationBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { Eventcalendar, getJson, toast } from '@mobiscroll/react';
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

function App() {

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
    <>
      <p>Hello testing</p>
      <NavigationBar />

      <Eventcalendar 
      theme="ios" 
            themeVariant="light"
            clickToCreate={false}
            dragToCreate={false}
            dragToMove={false}
            dragToResize={false}
            eventDelete={false}
            data={myEvents}
            view={view}
            onEventClick={onEventClick}
            
    data={[{
        start: new Date(),
        title: 'Today\'s event'
    }]}
    
/>
    </>
  );
}

export default App;
