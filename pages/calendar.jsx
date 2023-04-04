// pages/calendar.jsx
import React, { useState } from 'react';
import Header from '../components/Dashboard/Header';
import AddEventForm from '../components/Calendar/AddEventForm';
import EditEventModal from '../components/Calendar/EditEventModal';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import styles from '../styles/calendar/calendarPage.module.css'

const CalendarPage = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleAddEvent = (event) => {
    setEvents([
      ...events,
      {
        id: Date.now(),
        title: event.title,
        start: event.date,
        allDay: true,
      },
    ]);
  };

  const handleEventClick = ({ event }) => {
    setSelectedEvent(event);
  };

  const handleSaveEvent = (updatedEvent) => {
    setEvents(
      events.map((event) =>
        event.id === updatedEvent.id ? { ...event, title: updatedEvent.title } : event
      )
    );
    setSelectedEvent(null);
  };

  const handleEventChange = ({ event }) => {
    setEvents(
      events.map((e) => (e.id === event.id ? { ...e, start: event.start, end: event.end } : e))
    );
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div>
        <div className='calendarPage'>
      <Header />
      <h1></h1>
       <div className={styles.container}>
          <AddEventForm onAddEvent={handleAddEvent} />
          <div className={styles.calendarWrapper}>
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay',
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              weekends={true}
              events={events}
              eventClick={handleEventClick}
              eventChange={handleEventChange}
              themeSystem="bootstrap"
            />
          </div>
        </div>
        </div>
      {selectedEvent && (
        <EditEventModal
          event={selectedEvent}
          onSave={handleSaveEvent}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
      }
export default CalendarPage;