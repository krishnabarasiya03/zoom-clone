# Zoom Clone

A modern video calling application built with Next.js, TypeScript, and Tailwind CSS. This Zoom clone provides essential video conferencing features including video calls, audio controls, screen sharing, and real-time chat.

## 🚀 Features

- **HD Video Calls**: Crystal clear video quality for better communication
- **Audio Controls**: Toggle microphone on/off during calls
- **Screen Sharing**: Share your screen for presentations and collaboration
- **Real-time Chat**: Text chat alongside your video calls
- **Room Management**: Create new meetings or join existing ones with room IDs
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, professional interface with dark theme

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Real-time Communication**: WebRTC API
- **State Management**: React Hooks
- **Deployment**: Vercel-ready

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/krishnabarasiya03/zoom-clone.git
cd zoom-clone
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Usage

### Creating a Meeting
1. Visit the home page
2. Click "New Meeting" to create a new video call room
3. Share the room ID with participants

### Joining a Meeting
1. Enter the meeting ID in the "Join a Meeting" section
2. Click "Join Meeting" to enter the room

### During a Call
- **Toggle Video**: Click the video icon to turn your camera on/off
- **Toggle Audio**: Click the microphone icon to mute/unmute
- **Screen Share**: Click the monitor icon to share your screen
- **Chat**: Click the message icon to open the chat sidebar
- **Leave Call**: Click the red phone icon to exit the meeting

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

### Project Structure

```
src/
├── app/
│   ├── room/[roomId]/
│   │   └── page.tsx        # Video call room page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── VideoCall.tsx      # Main video call interface
│   └── Chat.tsx           # Chat sidebar component
└── lib/                   # Utility functions (future)
```

## 🌟 Key Components

### VideoCall Component
- Handles WebRTC functionality
- Manages local video stream
- Controls for audio, video, and screen sharing
- Room management and participant display

### Chat Component
- Real-time messaging interface
- Message history with timestamps
- Responsive design for sidebar display

## 🔮 Future Enhancements

- **Real-time Signaling**: Implement Socket.io for multi-user support
- **User Authentication**: Add login and user management
- **Recording**: Meeting recording capabilities
- **Virtual Backgrounds**: Background blur and replacement
- **File Sharing**: Share documents during meetings
- **Meeting Scheduling**: Calendar integration
- **Mobile App**: React Native implementation

## 📱 Browser Compatibility

This application requires modern browsers with WebRTC support:
- Chrome/Chromium 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Icons by [Lucide](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
