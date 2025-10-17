import React from 'react';

const SelfCareTracker = () => {
  return (
    <div className="content-wrapper p-6 md:p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-sidebar-primary-foreground">Parent Self-Care Tracker</h1>
      <p className="text-center text-gray-600 mb-8">You can't pour from an empty cup. Track small daily moments of restoration.</p>

      <table className="min-w-full divide-y divide-gray-300 border border-gray-200 text-sm mb-4">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-3 py-3 text-left font-medium text-gray-700">Day</th>
            <th className="px-3 py-3 text-left font-medium text-gray-700">My Calm Moment</th>
            <th className="px-3 py-3 text-left font-medium text-gray-700">One Gratitude</th>
            <th className="px-3 py-3 text-left font-medium text-gray-700">Sleep Quality (1-5)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
            <tr key={day}>
              <td className="px-3 py-3 whitespace-nowrap font-semibold">{day}</td>
              <td className="px-3 py-3 whitespace-nowrap"></td> {/* Placeholder for input */}
              <td className="px-3 py-3 whitespace-nowrap"></td> {/* Placeholder for input */}
              <td className="px-3 py-3 whitespace-nowrap"></td> {/* Placeholder for input */}
            </tr>
          ))}
        </tbody>
      </table>
      
      <p className="mt-8 text-sm text-center text-gray-500">Reminder: Your calm is the cue your child learns from most.</p>
    </div>
  );
};

export default SelfCareTracker;
