'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { Video, UserPlus, Calendar, Settings } from 'lucide-react';

export default function Home() {
  const [roomId, setRoomId] = useState('');
  const router = useRouter();

  const createRoom = () => {
    const newRoomId = uuidv4();
    router.push(`/room/${newRoomId}`);
  };

  const joinRoom = () => {
    if (roomId.trim()) {
      router.push(`/room/${roomId}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Video className="w-12 h-12 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
              Zoom Clone
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Connect with friends, family, and colleagues through high-quality video calls
          </p>
        </header>

        {/* Main Actions */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Create Meeting */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  Start a Meeting
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Create a new meeting room and invite others to join
                </p>
                <button
                  onClick={createRoom}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 w-full"
                >
                  New Meeting
                </button>
              </div>
            </div>

            {/* Join Meeting */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <div className="text-center">
                <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserPlus className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  Join a Meeting
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Enter a meeting ID to join an existing meeting
                </p>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Enter meeting ID"
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                  <button
                    onClick={joinRoom}
                    disabled={!roomId.trim()}
                    className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 w-full"
                  >
                    Join Meeting
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
              Features
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Video className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                  HD Video Calls
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Crystal clear video quality for better communication
                </p>
              </div>
              <div className="text-center">
                <Calendar className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Screen Sharing
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Share your screen for presentations and collaboration
                </p>
              </div>
              <div className="text-center">
                <Settings className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Real-time Chat
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Text chat alongside your video calls
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
