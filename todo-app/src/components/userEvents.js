let userEvents;
// const defaultEvents = [{
//     id: 1,
//     start: '2023-03-08T13:00',
//     end: '2023-03-08T13:45',
//     title: 'Lunch @ Butcher\'s',
//     description: '',
//     allDay: false,
//     free: true,
//     color: '#009788'
// },

  const [formData, setFormData] = useState({
    title: '',
    start: '',
    end: '',
    category: '',
    id: 1,
    description: '',
    allDay: false,
    free: true,
    color: '#009788'
    
  })

  const myformsschema = new mongoose.Schema({
    title: { 
        type: String, 
        default: '', 
        required: true, 
    },
    start: {
        type: Date,
    },
    end: {
        type: Date,
    },
    color: {
        type: String,
        default: '',
    },
    description: {
        type: String,
        default: '',
        required: true},
    allDay: {
        requiredfalse},    
})
  


    const loadPopupForm = React.useCallback((event) => {
        setTitle(event.title);
        setDescription(event.note);
        setDate([event.startTime, event.end]);
        setAllDay(event.allDay || false);
        setStatus(event.status || 'busy');
        setSelectedColor(event.color || '');
    }, []);