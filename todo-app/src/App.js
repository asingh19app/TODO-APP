import './App.css';
import NavigationBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Eventcalendar } from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

function App() {
  return (
    <>
      <p>Hello testing</p>
      <NavigationBar />

      <Eventcalendar 
    data={[{
        start: new Date(),
        title: 'Today\'s event'
    }
    // , {
    //     start: new Date(2020, 11, 18, 9, 0),
    //     end: new Date(2020, 11, 20, 13, 0),
    //     title: 'Multi day event'
    // }
    ]}
/>
    </>
  );
}

export default App;
