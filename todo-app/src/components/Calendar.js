
import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar, snackbar, setOptions, Popup, Button, Input, Textarea, Switch, Datepicker, SegmentedGroup, SegmentedItem } from '@mobiscroll/react';


const now = new Date();
let userEvents;
const defaultEvents = [{
    id: 1,
    start: '2023-03-08T13:00',
    end: '2023-03-08T13:45',
    title: 'Lunch @ Butcher\'s',
    description: '',
    allDay: false,
    free: true,
    color: '#009788'
}, {
    id: 2,
    start: '2023-03-05T15:00',
    end: '2023-03-05T16:00',
    title: 'General orientation',
    description: '',
    allDay: false,
    free: false,
    color: '#ff9900'
}, {
    id: 3,
    start: '2023-03-04T18:00',
    end: '2023-03-04T22:00',
    title: 'Dexter BD',
    description: '',
    allDay: false,
    free: true,
    color: '#3f51b5'
}, {
    id: 4,
    start: '2023-03-06T10:30',
    end: '2023-03-06T11:30',
    title: 'Stakeholder mtg.',
    description: '',
    allDay: false,
    free: false,
    color: '#f44437'
}];

const viewSettings = {
    calendar: { labels: true }
};
const responsivePopup = {
    medium: {
        display: 'anchored',
        width: 400,
        fullScreen: false,
        touchUi: false
    }
};
const colorPopup = {
    medium: {
        display: 'anchored',
        touchUi: false,
        buttons: []
    }
}
const colors = ['#ffeb3c', '#ff9900', '#f44437', '#ea1e63', '#9c26b0', '#3f51b5', '', '#009788', '#4baf4f', '#7e5d4e'];

export default function Calendar () {
 const [eventDatabase, setDatabase] =useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/TODO/v1/myforms').then(res => {
    //   console.log(res.data)
      defaultEvents= res.data
      console.log("userEvents")
console.log(userEvents[2])
      //   setDatabase(res.data)  
    })
  }, [])

    
    const [theme] = useState(localStorage.getItem('theme'));
    const [myEvents, setMyEvents] = React.useState(userEvents);
    const [tempEvent, setTempEvent] = React.useState(null);
    const [isOpen, setOpen] = React.useState(false);
    const [isEdit, setEdit] = React.useState(false);
    const [anchor, setAnchor] = React.useState(null);
    const [start, startRef] = React.useState(null);
    const [end, endRef] = React.useState(null);
    const [popupEventTitle, setTitle] = React.useState('');
    const [popupEventDescription, setDescription] = React.useState('');
    const [popupEventAllDay, setAllDay] = React.useState(true);
    const [popupEventDate, setDate] = React.useState([]);
    const [popupEventStatus, setStatus] = React.useState('busy');
    const [mySelectedDate, setSelectedDate] = React.useState(now);
    const [colorPickerOpen, setColorPickerOpen] = React.useState(false);
    const [colorAnchor, setColorAnchor] = React.useState(null);
    const [selectedColor, setSelectedColor] = React.useState('');
    const [tempColor, setTempColor] = React.useState('');
    const colorPicker = React.useRef();
    const colorButtons = React.useMemo(() => [
        'cancel',
        {
            text: 'Set',
            keyCode: 'enter',
            handler: () => {
                setSelectedColor(tempColor);
                setColorPickerOpen(false);
            },
            cssClass: 'mbsc-popup-button-primary'
        }
    ], [tempColor]);

    const saveEvent = React.useCallback(() => {
        const newEvent = {
            id: tempEvent.id,
            title: popupEventTitle,
            note: popupEventDescription,
            startTime: popupEventDate[0],
            endTime: popupEventDate[1],
            allDay: popupEventAllDay,
            status: popupEventStatus,
            color: tempEvent.color,
            color: selectedColor
        };
        if (isEdit) {
            // update the event in the list
            const index = myEvents.findIndex(x => x.id === tempEvent.id);;
            const newEventList = [...myEvents];

            newEventList.splice(index, 1, newEvent);
            setMyEvents(newEventList);
            // here you can update the event in your storage as well
            // ...
        } else {
            // add the new event to the list
            setMyEvents([...myEvents, newEvent]);
            // here you can add the event to your storage as well
            // ...
        }
        setSelectedDate(popupEventDate[0]);
        // close the popup
        setOpen(false);
    }, [isEdit, myEvents, popupEventAllDay, popupEventDate, popupEventDescription, popupEventStatus, popupEventTitle, tempEvent, selectedColor]);

    const deleteEvent = React.useCallback((event) => {
        setMyEvents(myEvents.filter(item => item.id !== event.id));
        setTimeout(() => {
            snackbar({
                button: {
                    action: () => {
                        setMyEvents(prevEvents => [...prevEvents, event]);
                    },
                    text: 'Undo'
                },
                message: 'Event deleted'
            });
        });
    }, [myEvents]);

    const loadPopupForm = React.useCallback((event) => {
        setTitle(event.title);
        setDescription(event.note);
        setDate([event.startTime, event.end]);
        setAllDay(event.allDay || false);
        setStatus(event.status || 'busy');
        setSelectedColor(event.color || '');
    }, []);

    // handle popup form changes

    const titleChange = React.useCallback((ev) => {
        setTitle(ev.target.value);
    }, []);

    const descriptionChange = React.useCallback((ev) => {
        setDescription(ev.target.value);
    }, []);

    const allDayChange = React.useCallback((ev) => {
        setAllDay(ev.target.checked);
    }, []);

    const dateChange = React.useCallback((args) => {
        setDate(args.value);
    }, []);

    const statusChange = React.useCallback((ev) => {
        setStatus(ev.target.value);
    }, []);

    const onDeleteClick = React.useCallback(() => {
        deleteEvent(tempEvent);
        setOpen(false);
    }, [deleteEvent, tempEvent]);

    // scheduler options

    const onSelectedDateChange = React.useCallback((event) => {
        setSelectedDate(event.date);
    });

    const onEventClick = React.useCallback((args) => {
        setEdit(true);
        setTempEvent({ ...args.event });
        // fill popup form with event data
        loadPopupForm(args.event);
        setAnchor(args.domEvent.target);
        setOpen(true);
    }, [loadPopupForm]);

    const onEventCreated = React.useCallback((args) => {
        // createNewEvent(args.event, args.target)
        setEdit(false);
        setTempEvent(args.event)
        // fill popup form with event data
        loadPopupForm(args.event);
        setAnchor(args.target);
        // open the popup
        setOpen(true);
    }, [loadPopupForm]);

    const onEventDeleted = React.useCallback((args) => {
        deleteEvent(args.event)
    }, [deleteEvent]);

    const onEventUpdated = React.useCallback((args) => {
        // here you can update the event in your storage as well, after drag & drop or resize
        // ...
    }, []);

    // datepicker options
    const controls = React.useMemo(() => popupEventAllDay ? ['date'] : ['datetime'], [popupEventAllDay]);
    const respSetting = React.useMemo(() => popupEventAllDay ? {
        medium: {
            controls: ['calendar'],
            touchUi: false
        }
    } : {
            medium: {
                controls: ['calendar', 'time'],
                touchUi: false
            }
        }, [popupEventAllDay]);

    // popup options
    const headerText = React.useMemo(() => isEdit ? 'Edit event' : 'New Event', [isEdit]);
    const popupButtons = React.useMemo(() => {
        if (isEdit) {
            return [
                'cancel',
                {
                    handler: () => {
                        saveEvent();
                    },
                    keyCode: 'enter',
                    text: 'Save',
                    cssClass: 'mbsc-popup-button-primary'
                }
            ];
        }
        else {
            return [
                'cancel',
                {
                    handler: () => {
                        saveEvent();
                    },
                    keyCode: 'enter',
                    text: 'Add',
                    cssClass: 'mbsc-popup-button-primary'
                }
            ];
        }
    }, [isEdit, saveEvent]);

    const onClose = React.useCallback(() => {
        if (!isEdit) {
            // refresh the list, if add popup was canceled, to remove the temporary event
            setMyEvents([...myEvents]);
        }
        setOpen(false);
    }, [isEdit, myEvents]);

    const selectColor = React.useCallback((color) => {
        setTempColor(color)
    }, []);

    const openColorPicker = React.useCallback((ev) => {
        selectColor(selectedColor || '');
        setColorAnchor(ev.currentTarget);
        setColorPickerOpen(true);
    }, [selectColor, selectedColor]);

    const changeColor = React.useCallback((ev) => {
        const color = ev.currentTarget.getAttribute('data-value');
        selectColor(color);
        if (!colorPicker.current.s.buttons.length) {
            setSelectedColor(color);
            setColorPickerOpen(false);
        }
    }, [selectColor, setSelectedColor]);

    return <div>
        <Eventcalendar
           theme="ios" 
           themeVariant={theme}
            view={viewSettings}
            data={myEvents}
            clickToCreate="double"
            dragToCreate={true}
            dragToMove={true}
            dragToResize={true}
            selectedDate={mySelectedDate}
            onSelectedDateChange={onSelectedDateChange}
            onEventClick={onEventClick}
            onEventCreated={onEventCreated}
            onEventDeleted={onEventDeleted}
            onEventUpdated={onEventUpdated}
        />
        <Popup
            display="bottom"
            fullScreen={true}
            contentPadding={false}
            headerText={headerText}
            anchor={anchor}
            buttons={popupButtons}
            isOpen={isOpen}
            onClose={onClose}
            responsive={responsivePopup}
        >
            <div className="mbsc-form-group">
                <Input label="Title" value={popupEventTitle} onChange={titleChange} />
                <Textarea label="Description" value={popupEventDescription} onChange={descriptionChange} />
            </div>
            <div className="mbsc-form-group">
                <Switch label="All-day" checked={popupEventAllDay} onChange={allDayChange} />
                <Input ref={startRef} label="Starts" />
                <Input ref={endRef} label="Ends" />
                <Datepicker
                    select="range"
                    controls={controls}
                    touchUi={true}
                    startInput={start}
                    endInput={end}
                    showRangeLabels={false}
                    responsive={respSetting}
                    onChange={dateChange}
                    value={popupEventDate}
                />
                <div onClick={openColorPicker} className="event-color-c">
                    <div className="event-color-label">Color</div>
                    <div className="event-color" style={{ background: selectedColor }}></div>
                </div>
                <SegmentedGroup onChange={statusChange}>
                    <SegmentedItem value="busy" checked={popupEventStatus === 'busy'}>Show as busy</SegmentedItem>
                    <SegmentedItem value="free" checked={popupEventStatus === 'free'}>Show as free</SegmentedItem>
                </SegmentedGroup>
                {isEdit ? <div className="mbsc-button-group"><Button className="mbsc-button-block" color="danger" variant="outline" onClick={onDeleteClick}>Delete event</Button></div> : null}
            </div>
        </Popup>
        <Popup
            display="bottom"
            contentPadding={false}
            showArrow={false}
            showOverlay={false}
            anchor={colorAnchor}
            isOpen={colorPickerOpen}
            buttons={colorButtons}
            responsive={colorPopup}
            ref={colorPicker}
        >
            <div className="crud-color-row">
                {colors.map((color, index) => {
                    if (index < 5) {
                        return <div key={index} onClick={changeColor} className={"crud-color-c " + (tempColor === color ? 'selected' : '')} data-value={color}>
                            <div className="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style={{ background: color }}></div>
                        </div>
                    } else return null;
                })}
            </div>
            <div className="crud-color-row">
                {colors.map((color, index) => {
                    if (index >= 5) {
                        return <div key={index} onClick={changeColor} className={"crud-color-c " + (tempColor === color ? 'selected' : '')} data-value={color}>
                            <div className="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style={{ background: color }}></div>
                        </div>
                    } else return null;
                })}
            </div>
        </Popup>
    </div>
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
