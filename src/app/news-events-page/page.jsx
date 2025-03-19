import React from 'react'
import EventCalendar from "@components/componentsHomePage/EventCalendar";

function NewsEventPage() {

  const eventsSample = [
    {
      id: 1,
      title: 'ประชุมทีม',
      description: 'ประชุมทีมพัฒนาเว็บไซต์',
      date: '2025-03-20T09:00:00'
    },
    {
      id: 2,
      title: 'นำเสนอโปรเจค',
      description: 'นำเสนอความคืบหน้าของโปรเจค',
      date: '2025-03-22T13:30:00'
    },
    {
      id: 3,
      title: 'อบรม Next.js',
      description: 'อบรมการใช้งาน Next.js 15 เบื้องต้น',
      date: '2025-03-25T10:00:00'
    }
  ];

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Event Page</h1>
      <EventCalendar events={eventsSample} />
    </div>
  )
}

export default NewsEventPage
