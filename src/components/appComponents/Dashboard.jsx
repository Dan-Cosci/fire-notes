import React from 'react'

const Dashboard = () => {

  const notes = [
    {
      id: 'n1a2b3',
      title: 'Project Ideas',
      content: 'Brainstorm possible thesis or final project ideas for the semester.',
      createdAt: '2026-03-01T09:15:00',
      updatedAt: '2026-03-01T10:20:00'
    },
    {
      id: 'n4c5d6',
      title: 'React Router Notes',
      content: 'Remember to use useParams() to access dynamic route values like :id.',
      createdAt: '2026-03-02T13:05:00',
      updatedAt: '2026-03-02T14:00:00'
    },
    {
      id: 'n7e8f9',
      title: 'Firebase Setup',
      content: 'Initialize Firebase app, configure auth provider, and connect Firestore.',
      createdAt: '2026-03-03T11:30:00',
      updatedAt: '2026-03-03T11:45:00'
    },
    {
      id: 'n10g11',
      title: 'UI Improvements',
      content: 'Align buttons at the bottom using flexbox with margin-top: auto.',
      createdAt: '2026-03-04T08:10:00',
      updatedAt: '2026-03-04T09:00:00'
    },
    {
      id: 'n12h13',
      title: 'Study Reminder',
      content: 'Review number system conversions for quiz (binary and hexadecimal).',
      createdAt: '2026-03-05T18:00:00',
      updatedAt: '2026-03-05T18:20:00'
    }
  ];

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      
    </div>
  )
}

export default Dashboard