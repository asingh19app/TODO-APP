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
    id: "",
    start: '',
    end: '',
    title: '',
    category: '',
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
        required: true},  
    free: {
        required: true},   
    id: {
        required: true},    
}       
)
  


    const loadPopupForm = React.useCallback((event) => {
        setTitle(event.title);
        setDescription(event.description);
        setDate([event.start, event.end]);
        setAllDay(event.allDay || false);
        setStatus(event.status || 'busy');
        setSelectedColor(event.color || '');
    }, []);