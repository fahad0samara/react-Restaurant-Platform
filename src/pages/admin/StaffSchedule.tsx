import React from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, Users, AlertCircle } from 'lucide-react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

const shifts = [
  {
    id: '1',
    title: 'Morning Shift',
    start: '2024-03-20T06:00:00',
    end: '2024-03-20T14:00:00',
    staff: [
      { name: 'John Smith', role: 'Chef' },
      { name: 'Sarah Johnson', role: 'Server' }
    ]
  },
  {
    id: '2',
    title: 'Evening Shift',
    start: '2024-03-20T14:00:00',
    end: '2024-03-20T22:00:00',
    staff: [
      { name: 'Mike Wilson', role: 'Chef' },
      { name: 'Emily Brown', role: 'Server' }
    ]
  }
];

export default function StaffSchedule() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Staff Schedule</h1>
        <div className="flex gap-2">
          <button className="btn btn-secondary flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Add Shift
          </button>
          <button className="btn btn-primary flex items-center gap-2">
            <Users className="h-5 w-5" />
            Manage Staff
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: 'Total Staff',
            value: '24',
            info: '18 Full-time, 6 Part-time',
            icon: Users
          },
          {
            title: 'Upcoming Shifts',
            value: '8',
            info: 'Next 24 hours',
            icon: Clock
          },
          {
            title: 'Schedule Conflicts',
            value: '2',
            info: 'Needs attention',
            icon: AlertCircle,
            urgent: true
          }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-gray-100 rounded-lg">
                <stat.icon className={`h-6 w-6 ${
                  stat.urgent ? 'text-red-600' : 'text-gray-600'
                }`} />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">{stat.value}</h3>
            <p className="text-sm text-gray-600">{stat.title}</p>
            <p className="text-xs text-gray-500 mt-1">{stat.info}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Schedule Overview</h2>
        <div className="h-[600px]">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin]}
            initialView="timeGridWeek"
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            events={shifts}
            slotMinTime="06:00:00"
            slotMaxTime="24:00:00"
            allDaySlot={false}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Today's Shifts</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Shift
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Staff
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {shifts.map((shift) => (
                <tr key={shift.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {shift.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(shift.start).toLocaleTimeString()} - 
                    {new Date(shift.end).toLocaleTimeString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      {shift.staff.map((member, index) => (
                        <div key={index} className="text-sm">
                          <span className="font-medium text-gray-900">
                            {member.name}
                          </span>
                          <span className="text-gray-500"> - {member.role}</span>
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}