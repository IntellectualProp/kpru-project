// components/EventCalendar.jsx
'use client';

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EventCalendar.css'; // Custom styles for the calendar

const EventCalendar = ({ events = [] }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [calendarDays, setCalendarDays] = useState([]);
  const [viewMode, setViewMode] = useState('desktop'); // 'desktop' or 'mobile'

  // Check window size and set view mode
  useEffect(() => {
    const handleResize = () => {
      setViewMode(window.innerWidth < 992 ? 'mobile' : 'desktop');
    };

    // Set initial view mode
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  // Navigate to current month
  const goToToday = () => {
    setCurrentDate(new Date());
    setSelectedDate(new Date());
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
        year: month === 0 ? year - 1 : year,
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
        year: month === 11 ? year + 1 : year,
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

  // Get number of events for a day
  const getEventCount = (day, month, year) => {
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getDate() === day &&
        eventDate.getMonth() === month &&
        eventDate.getFullYear() === year;
    }).length;
  };

  // Get Thai day names
  const dayNames = ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'];
  const fullDayNames = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'];

  return (
    <div className="event-calendar-section">
      <div className="calendar-container">
        <div className="calendar-grid shadow">
          <div className="calendar-header">
            <div className="custon-calendar-header d-flex mb-3 mb-md-0">
              <h2 className="current-month mb-0 ms-2 d-flex align-items-center">
                {formatMonthYear(currentDate)}
              </h2>
              <div className="d-flex custom-button-group">
                <button className="btn me-2" onClick={goToToday}>
                  วันนี้
                </button>
                <button className="btn me-2" onClick={prevMonth}>{"<"} เดือนก่อนหน้า</button>
                <button className="btn" onClick={nextMonth}>เดือนถัดไป {">"}</button>
              </div>
            </div>
          </div>
          <div className="calendar-days">
            {dayNames.map((day, index) => (
              <div key={index} className={`calendar-day-header text-center py-2 fw-bold ${index === 0 || index === 6 ? 'weekend' : ''}`}>
                {viewMode === 'desktop' ? fullDayNames[index] : day}
              </div>
            ))}
          </div>

          <div className="calendar-dates">
            {calendarDays.map((dayInfo, index) => {
              const { day, month, year, isCurrentMonth } = dayInfo;
              const eventCount = getEventCount(day, month, year);
              const today = new Date();
              const isToday = day === today.getDate() &&
                month === today.getMonth() &&
                year === today.getFullYear();

              const isSelected = selectedDate &&
                day === selectedDate.getDate() &&
                month === selectedDate.getMonth() &&
                year === selectedDate.getFullYear();

              const isWeekend = index % 7 === 0 || index % 7 === 6;

              return (
                <div
                  key={index}
                  className={`calendar-date ${isCurrentMonth ? '' : 'faded'} 
                            ${isToday ? 'today' : ''} 
                            ${isSelected ? 'selected' : ''} 
                            ${isWeekend && isCurrentMonth ? 'weekend' : ''}`}
                  onClick={() => handleDateClick(day, month, year)}
                >
                  <div className="date-content">
                    <div className="date-number">{day}</div>
                    {eventCount > 0 && (
                      <div className="event-indicator">
                        {eventCount > 3 ? (
                          <span className="event-count">{eventCount}</span>
                        ) : (
                          [...Array(eventCount)].map((_, i) => (
                            <div key={i} className="event-dot"></div>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="events-panel">
          {selectedDate ? (
            <div className="selected-date-events shadow-sm">
              <div className="event-header">
                <h4 className="mb-0">
                  {selectedDate.toLocaleDateString('th-TH', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                </h4>
              </div>
              <div className="events-list">
                {getEventsForDate(selectedDate).length > 0 ? (
                  getEventsForDate(selectedDate).map((event, index) => (
                    <div key={index} className="event-item">
                      <div className="event-time">
                        {new Date(event.date).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })}
                      </div>
                      <div className="event-content">
                        <h5 className="event-title">{event.title}</h5>
                        <p className="event-description">{event.description}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="no-events">
                    <p>ไม่มีกิจกรรมในวันนี้</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="no-date-selected shadow-sm">
              <div className="empty-state">
                <p>กรุณาเลือกวันที่เพื่อดูรายละเอียดกิจกรรม</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;