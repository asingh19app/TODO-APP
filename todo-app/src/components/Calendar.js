
import React, { useState } from 'react'
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar, toast, Popup, Input, CalendarNav, CalendarPrev, CalendarNext, CalendarToday, getJson, formatDate  } from '@mobiscroll/react';

export default function Calendar() {
    const [theme] = useState(localStorage.getItem('theme'));
    const [calEvents, setCalEvents] = React.useState([]);
    const [listEvents, setListEvents] = React.useState([]);
    const [mySelectedEvent, setSelectedEvent] = React.useState([]);
    const [isOpen, setOpen] = React.useState(false);
    const [currentDate, setCurrentDate] = React.useState(new Date());
    const [searchInput, setSearchInput] = React.useState(null);
    const inputRef = React.useRef();
    const timerRef = React.useRef(null);
    
    const calView = React.useMemo(() => {
        return {
            calendar: {
                labels: true
            }
        };
    }, []);
    
    const listView = React.useMemo(() => {
        return {
            agenda: {
                type: 'year',
                size: 5
            }
        };
    }, []);
    
    const onSearch = React.useCallback((ev) => {
        const text = ev.target.value;
        
        if(timerRef.current) {
            clearTimeout(timerRef.current);
        }
        
        timerRef.current = setTimeout(() => {
            if (text.length > 0) {
                getJson('https://trial.mobiscroll.com/searchevents/?text=' + text, (data) => {
                    setListEvents(data);
                    setOpen(true);
                }, 'jsonp');
            } else {
                setOpen(false);
            }
        }, 200);
    }, []);
    
    const onFocus  = React.useCallback((ev) => {
        if (ev.target.value.length > 0) {
            setOpen(true)
        }
    }, []);
        
    const myHeader = () => {
        return <React.Fragment>
            <CalendarNav />
            <div className="md-seach-header-bar mbsc-flex-1-0">
                <Input startIcon="material-search" ref={inputRef} onChange={onSearch} onFocus={onFocus} inputStyle="box" placeholder="Search events" />
            </div>
            <CalendarPrev />
            <CalendarToday />
            <CalendarNext />
        </React.Fragment>;
    }
    
    const onPageLoading =  React.useCallback((args) => {
        const start = formatDate('YYYY-MM-DD', args.viewStart);
        const end = formatDate('YYYY-MM-DD', args.viewEnd);
        //Poplate calendar
        setTimeout(() => {
            getJson('https://trial.mobiscroll.com/searchevents/?start=' + start + '&end=' + end, (data) => {
                setCalEvents(data);
            }, 'jsonp');
        });
    }, []);
    
    const popupInit = React.useCallback(() => {
        setSearchInput(inputRef.current.nativeElement);
    }, []);
    
    const popupClose = React.useCallback(() => {
        setOpen(false);
    }, []);
    
    // const onEventClick = React.useCallback((event) => {
    //     toast({
    //         message: event.event.title
    //     });
    // }, []);

    // const view = React.useMemo(() => {
    //     return {
    //         calendar: { popover: true, count: true }
    //     };
    // }, []);
    
    const eventClick = React.useCallback((args) => {
        setCurrentDate(args.event.start);
        setSelectedEvent([args.event]);
        setOpen(false);
    }, []);
    
    return (
        <>
            <Eventcalendar
                theme="ios" 
                themeVariant={theme}
                className="md-search-events"
                clickToCreate={true}
                dragToCreate={true}
                dragToMove={true}
                dragToResize={true}
                selectMultipleEvents={true}
                view={calView}
                data={calEvents}
                selectedEvents={mySelectedEvent} 
                selectedDate={currentDate}
                renderHeader={myHeader}
                onPageLoading={onPageLoading}
            />
            <Popup
                className="md-search-popup"
                display="anchored"
                showArrow={false}
                showOverlay={false}
                scrollLock={false}
                contentPadding={false}
                focusOnOpen={false}
                focusOnClose={false}
                anchor={searchInput}
                focusElm={searchInput}
                isOpen={isOpen}
                onInit={popupInit}
                onClose={popupClose}
            >
                <Eventcalendar
                    className="mbsc-popover-list"
                    view={listView}
                    data={listEvents}
                    showControls={false}
                    onEventClick={eventClick}
                />
            </Popup>
        </>
    ); 
}

// import React from 'react'
// import { Eventcalendar, Page, Input, getJson, toast, Select, CalendarNav, CalendarPrev, CalendarNext, CalendarToday, momentTimezone ,formatDate, setOptions }from '@mobiscroll/react';
// setOptions({
//     theme: 'ios',
//     themeVariant: 'light'
// });
// export default function Calendar() { 

//     const [calEvents, setCalEvents] = React.useState([]);
//     const [listEvents, setListEvents] = React.useState([]);
//     const [mySelectedEvent, setSelectedEvent] = React.useState([]);
//     const [showList, setShowList] = React.useState(false);
//     const [isOpen, setOpen] = React.useState(false);
//     const [currentDate, setCurrentDate] = React.useState(new Date());
//     const [searchInput, setSearchInput] = React.useState(null);
//     const inputRef = React.useRef();
//     const timerRef = React.useRef(null);

//     const calView = React.useMemo(() => {
//         return {
//             calendar: {
//                 labels: true
//             }
//         };
//     }, []);


//     const onSearch = React.useCallback((ev) => {
//         const text = ev.target.value;
        
//         if(timerRef.current) {
//             clearTimeout(timerRef.current);
//         }
        
//         timerRef.current = setTimeout(() => {
//             if (text.length > 0) {
//                 getJson('https://trial.mobiscroll.com/searchevents/?text=' + text, (data) => {
//                     setListEvents(data);
//                     setOpen(true);
//                 }, 'jsonp');
//             } else {
//                 setOpen(false);
//             }
//         }, 200);
//     }, []);
//  Tried to implement extra things but rejected
    
//     // const timezones = React.useMemo(() => {
//     //     return [{
//     //         text: 'America/Los Angeles',
//     //         value: 'America/Los_Angeles'
//     //     }, {
//     //         text: 'America/Chicago',
//     //         value: 'America/Chicago'
//     //     }, {
//     //         text: 'America/New York',
//     //         value: 'America/New_York'
//     //     }, {
//     //         text: 'UTC',
//     //         value: 'utc'
//     //     }, {
//     //         text: 'Europe/London',
//     //         value: 'Europe/London'
//     //     }, {
//     //         text: 'Europe/Berlin',
//     //         value: 'Europe/Berlin'
//     //     }, {
//     //         text: 'Europe/Bucharest',
//     //         value: 'Europe/Bucharest'
//     //     }, {
//     //         text: 'Asia/Shanghai',
//     //         value: 'Asia/Shanghai'
//     //     }, {
//     //         text: 'Asia/Tokyo',
//     //         value: 'Asia/Tokyo'
//     //     }]
//     // }, []);
    
//   const [myEvents, setEvents] = React.useState([]);

//     // const onChange = React.useCallback((ev) => {
//     //     setTimezone(ev.value);
//     // }, []);
    
    
//     React.useEffect(() => {
//       getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
//           setEvents(events);
//       }, 'jsonp');
//   }, []);
  
//     const onEventClick = React.useCallback((event) => {
//       toast({
//           message: event.event.title
//       });
//   }, []);
  
//     const view = React.useMemo(() => {
//         return {
//             calendar: { popover: true, count: true }
//         };
//     }, []);

//     const myHeader = () => {
//         return (<React.Fragment>
//             <CalendarNav className="md-timezone-nav" />
//             <div className="md-seach-header-bar mbsc-flex-1-0">
//                 <Input startIcon="material-search" ref={inputRef} onChange={onSearch} onFocus={onFocus} inputStyle="box" placeholder="Search events" />
//             </div>
//             </React.Fragment>
// )
// }

//             {/* <div className="md-timezone-header">
//                 <CalendarPrev/>
//                 <CalendarToday />
//                 <CalendarNext />
//                 <Select data={timezones} inputStyle="box" touchUi={false} display="anchored" value={timezone} onChange={onChange} />
//             </div>
//         </React.Fragment>;
//     } */}
// {/* 
// //Search bar for events
//     const onPageLoading =  React.useCallback((args) => {
//         const start = formatDate('YYYY-MM-DD', args.viewStart);
//         const end = formatDate('YYYY-MM-DD', args.viewEnd);
        
//         setTimeout(() => {
//             getJson('https://trial.mobiscroll.com/searchevents/?start=' + start + '&end=' + end, (data) => {
//                 setCalEvents(data);
//             }, 'jsonp');
//         });
//     }, []);
    
//     const popupInit = React.useCallback(() => {
//         setSearchInput(inputRef.current.nativeElement);
//     }, []);
    
//     const popupClose = React.useCallback(() => {
//         setOpen(false);
//     }, []);
    
//     const eventClick = React.useCallback((args) => {
//         setCurrentDate(args.event.start);
//         setSelectedEvent([args.event]);
//         setOpen(false);
//     }, []);
//      */}

//     return (

// <>
//      <Eventcalendar 
//         theme="ios" 
//         themeVariant="dark"
//         className="md-search-events"

//         clickToCreate={true}
//         dragToCreate={true}
//         dragToMove={true}
//         // dataTimezone='utc'
//         // displayTimezone='local'
//         // timezonePlugin={momentTimezone}
//         dragToResize={true}
//         eventDelete={true}
//         view={view}
//         onEventClick={onEventClick}
//         data={[{
//         start: new Date(),
//         title: 'Today\'s event'},{myEvents}]}
//         renderHeader={myHeader}
//   />


// </>
//     )
// }