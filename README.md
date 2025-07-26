# React Frontend Application

A React application that connects to a Node.js backend API.

## Project Structure

```
frontend/
└── client/                 # React application
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── App.js          # Main React component
    │   ├── App.css         # Styles
    │   └── index.js        # React entry point
    ├── package.json        # Frontend dependencies
    └── .env                # Environment variables (PORT=8000)
```

## Frontend Application

React application that consumes a backend API and displays the response.

- Runs on: `http://localhost:8000`  
- Calls backend API: `http://localhost:8001/api/hello`
- Displays the message from the API response

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation & Setup

1. **Create the project structure**
```bash
mkdir frontend
cd frontend
```

2. **Set up the React Application**
```bash
# Create React app
npx create-react-app client
cd client

# Set custom port (8000)
echo "PORT=8000" > .env
```

3. **Update React files**
- Replace `src/App.js` with the provided React component code
- Replace `src/App.css` with the provided CSS styles

### Running the Application

```bash
cd frontend/client
npm start
# Frontend will open on http://localhost:8000
```

### Usage

1. Make sure your backend API is running on `http://localhost:8001`
2. Open your browser and go to `http://localhost:8000`
3. The React app will automatically fetch data from the backend API
4. You should see the message from your API displayed on the page

## API Integration

The React app uses the `fetch` API to call the backend:

```javascript
fetch('http://localhost:8001/api/hello')
  .then(response => response.json())
  .then(data => {
    // Handle the response
    console.log(data.msg);
  });
```

## Features

- **Auto-fetch**: Automatically calls the API when the page loads
- **Error Handling**: Shows helpful error messages if the backend is unavailable
- **Loading States**: Displays loading indicator while fetching data
- **Refresh Button**: Allows users to manually refresh the data
- **Responsive Design**: Works on both desktop and mobile devices

## Development

### Frontend Development
- Built with Create React App
- Uses React hooks (useState, useEffect) for state management
- Fetches data from backend on component mount
- Includes error handling and loading states

## Troubleshooting

### Connection Issues
- Ensure your backend server is running on `http://localhost:8001`
- Check that the API endpoint `/api/hello` is responding
- Verify the backend has CORS enabled to allow frontend requests

### Port Conflicts
- Frontend runs on port 8000 (configured in `.env` file)
- Make sure port 8000 is available
- You can change the port by modifying the `PORT` value in `.env`

## Technologies Used

- React 18
- Create React App
- Fetch API for HTTP requests
- CSS3 for styling

## Next Steps

- Add more API integrations
- Implement form handling for POST requests
- Add state management with Context API or Redux
- Include a UI component library
- Add routing with React Router
- Implement user authentication
- Add unit tests with Jest and React Testing Library