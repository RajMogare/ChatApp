# Chat Application

This is a real-time chat application built using React and Firebase. Users can register, login, search for other users, send messages, images, and emojis, and block/unblock users.

## Features

- **User Authentication**: Secure registration and login using Firebase Authentication.
- **Real-Time Messaging**: Send and receive messages instantly.
- **Image and Emoji Support**: Enhance your chats with images and emojis.
- **User Search**: Easily find and add other users to your chat list.
- **Block/Unblock Users**: Control who can interact with you by blocking and unblocking users.
- **Firebase Firestore and Storage**: Efficiently manage and store user data and media.

## Technologies Used

- **React**: For building the user interface.
- **Firebase Authentication**: For user authentication and security.
- **Firebase Firestore**: For real-time database functionality.
- **Firebase Storage**: For storing images and other media files.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/chat-application.git
   cd chat-application
2. Install dependencies:
    npm install
3. Create a Firebase project and set up Firebase Authentication, Firestore, and Storage.

4. Add your Firebase configuration to a .env file or create firebase.js file:
   - REACT_APP_FIREBASE_API_KEY=your_api_key
   - REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   - REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   - REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   - REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   - REACT_APP_FIREBASE_APP_ID=your_app_id
5.Run the application:
    npm run dev

