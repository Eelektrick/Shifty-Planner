const now = new Date()

export default [
  {
    id: 0,
    title: 'Long Event',
    start: new Date(2020, 9, 22),
    end: new Date(2020, 9, 22),  
  },
  {
    id: 1,
    title: 'Music Event',
    start: new Date(2020, 9, 22, 16, 0 , 0),
    end: new Date(2020, 9, 22, 18, 30, 0),  
  },
  {
    id: 2,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
  {
    id: 3,
    title: 'Video Record',
    start: new Date(2020, 9, 24, 17, 30, 0),
    end: new Date(2020, 9, 24, 19, 0, 0),
  },
]