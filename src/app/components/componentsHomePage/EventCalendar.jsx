// components/EventCalendar.jsx
'use client';

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const EventCalendar = ({ events = [] }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [calendarDays, setCalendarDays] = useState([]);
  
  // Function to get events for a specific date
  const getEventsForDate = (date) => {
    if (!date) return [];
    
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getDate() === date.getDate() &&
             eventDate.getMonth() === date.getMonth() &&
             eventDate.getFullYear() === date.getFullYear();
    });
  };

  // Navigate to previous month
  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  // Navigate to next month
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  // Generate days for the current month view
  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    
    const startDay = firstDayOfMonth.getDay(); // 0 for Sunday, 1 for Monday, etc.
    const totalDays = lastDayOfMonth.getDate();
    
    // Get days from previous month to fill the first week
    const daysFromPrevMonth = startDay;
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    
    const days = [];
    
    // Add days from previous month
    for (let i = daysFromPrevMonth - 1; i >= 0; i--) {
      days.push({
        day: prevMonthLastDay - i,
        month: month - 1,
        year,
        isCurrentMonth: false
      });
    }
    
    // Add days from current month
    for (let i = 1; i <= totalDays; i++) {
      days.push({
        day: i,
        month,
        year,
        isCurrentMonth: true
      });
    }
    
    // Add days from next month
    const remainingCells = 42 - days.length; // 42 = 6 rows * 7 days
    for (let i = 1; i <= remainingCells; i++) {
      days.push({
        day: i,
        month: month + 1,
        year,
        isCurrentMonth: false
      });
    }
    
    setCalendarDays(days);
  }, [currentDate]);

  // Format date to show month and year
  const formatMonthYear = (date) => {
    const options = { month: 'long', year: 'numeric' };
    return date.toLocaleDateString('th-TH', options);
  };

  // Handle date selection
  const handleDateClick = (day, month, year) => {
    setSelectedDate(new Date(year, month, day));
  };

  // Check if a day has events
  const hasEvents = (day, month, year) => {
    return events.some(event => {
      const eventDate = new Date(event.date);
      return eventDate.getDate() === day &&
             eventDate.getMonth() === month &&
             eventDate.getFullYear() === year;
    });
  };

  // Get Thai day names
  const dayNames = ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'];

  return (
    <div className="event-calendar">
      <div className="calendar-header d-flex justify-content-between align-items-center mb-3">
        <button className="btn btn-outline-primary" onClick={prevMonth}>
          &lt; เดือนก่อนหน้า
        </button>
        <h3 className="mb-0">{formatMonthYear(currentDate)}</h3>
        <button className="btn btn-outline-primary" onClick={nextMonth}>
          เดือนถัดไป &gt;
        </button>
      </div>
      
      <div className="calendar-grid">
        <div className="calendar-days bg-light">
          {dayNames.map((day, index) => (
            <div key={index} className="calendar-day-header text-center py-2 fw-bold">
              {day}
            </div>
          ))}
        </div>
        
        <div className="calendar-dates">
          {calendarDays.map((dayInfo, index) => {
            const { day, month, year, isCurrentMonth } = dayInfo;
            const hasEventClass = hasEvents(day, month, year) ? 'has-event' : '';
            const today = new Date();
            const isToday = day === today.getDate() && 
                          month === today.getMonth() && 
                          year === today.getFullYear();
            
            return (
              <div 
                key={index}
                className={`calendar-date ${isCurrentMonth ? '' : 'text-muted'} ${hasEventClass} ${isToday ? 'today' : ''}`}
                onClick={() => handleDateClick(day, month, year)}
              >
                <div className="date-number">{day}</div>
                {hasEvents(day, month, year) && <div className="event-dot"></div>}
              </div>
            );
          })}
        </div>
      </div>
      
      {selectedDate && (
        <div className="selected-date-events mt-4">
          <h4>{selectedDate.toLocaleDateString('th-TH', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</h4>
          <div className="events-list">
            {getEventsForDate(selectedDate).length > 0 ? (
              getEventsForDate(selectedDate).map((event, index) => (
                <div key={index} className="event-item card mb-2">
                  <div className="card-body">
                    <h5 className="card-title">{event.title}</h5>
                    <p className="card-text">{event.description}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        {new Date(event.date).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })}
                      </small>
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-events">ไม่มีกิจกรรมในวันนี้</p>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        .event-calendar {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .calendar-grid {
          border: 1px solid #dee2e6;
          border-radius: 4px;
          overflow: hidden;
        }
        
        .calendar-days {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          border-bottom: 1px solid #dee2e6;
        }
        
        .calendar-dates {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          grid-auto-rows: minmax(80px, auto);
        }
        
        .calendar-date {
          padding: 10px;
          border-right: 1px solid #f0f0f0;
          border-bottom: 1px solid #f0f0f0;
          position: relative;
          cursor: pointer;
          min-height: 80px;
        }
        
        .calendar-date:hover {
          background-color: #f8f9fa;
        }
        
        .calendar-date.text-muted {
          color: #adb5bd;
          background-color: #f9f9f9;
        }
        
        .date-number {
          font-weight: 500;
        }
        
        .has-event {
          position: relative;
        }
        
        .event-dot {
          width: 6px;
          height: 6px;
          background-color: #0d6efd;
          border-radius: 50%;
          position: absolute;
          bottom: 8px;
          right: 8px;
        }
        
        .today {
          background-color: #e8f4ff;
        }
        
        .today .date-number {
          font-weight: bold;
          color: #0d6efd;
        }
        
        .selected-date-events {
          padding: 15px;
          border: 1px solid #dee2e6;
          border-radius: 4px;
        }
        
        .no-events {
          font-style: italic;
          color: #6c757d;
        }
      `}</style>
    </div>
  );
};

export default EventCalendar;