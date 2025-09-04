'use client';

import { useParams } from 'next/navigation';
import VideoCall from '@/components/VideoCall';

export default function RoomPage() {
  const params = useParams();
  const roomId = params.roomId as string;

  return (
    <div className="min-h-screen bg-gray-900">
      <VideoCall roomId={roomId} />
    </div>
  );
}