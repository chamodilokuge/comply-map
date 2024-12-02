# Comply-Map 🌍

## 🌍 Explore Nearby Food Places with Comply-Map 🍽️

Find the best restaurants and eateries within 1 km of ComplyCube's headquarters, powered by LeafletJS and React. Seamlessly discover local food spots on an interactive map, right at your fingertips!

**ComplyMap** is a web application built using **React** and **LeafletJS** that helps users find food places within a 1 km radius of ComplyCube's headquarters using geolocation APIs. The application integrates interactive maps and displays nearby restaurants on a map, enhancing user experience through dynamic map interactions.

---

## Table of Contents

- [Features](#features)
- [Optimizations](#optimizations)
- [Libraries Used](#libraries-used)
- [How to Run the Project](#how-to-run-the-project)
- [Tests](#tests)
- [Future Improvements](#future-improvements)
- [OpenStreetMap Preview](#open-street)

---

## 📝 Requirements

This web app fetches food places within 1 km of ComplyCube's headquarters using LeafletJS in a React app. The app should:

- Initialize a map with LeafletJS centered on ComplyCube's HQ.
- Use a geolocation API to retrieve nearby food places within a specified radius (1 km).
- Display restaurants on the map.

## 🛠️ Features

- **Map Initialization**: The app initializes a LeafletJS map, centered around ComplyCube's headquarters.
- **Nearby Food Places**: Uses a geolocation API to fetch food places within a 1 km radius of the headquarters.
- **Interactive Map**: Displays food places on the map as markers that users can interact with.
- **Data Fetching**: Handles errors and loading states, ensuring smooth UI transitions when fetching data.

---

## 🚀 Optimizations

- **Efficient Data Fetching**: Data fetching is done asynchronously, ensuring non-blocking operations and a seamless user experience. The app shows a loading text indicator while fetching data.
- **Error Handling**: Error handling for network or API issues to ensure that users are informed if something goes wrong.
- **Separation of Concerns**: Seperated the presentation layer from the logic.

---

## 🔧 Libraries Used

- **React**: JavaScript library for building user interfaces.
- **LeafletJS**: A leading open-source JavaScript library for interactive maps.
- **Jest**: Testing framework for ensuring application quality.
- **React Testing Library**: Utility for testing React components by interacting with them as the user would.

---

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/comply-map.git
   ```
2. Navigate to the project folder:

```bash
cd comply-map
```

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open your browser and go to http://localhost:3000 to view the app.

## 🧪 Tests

- The project includes tests for fetching data and rendering map markers:

## 🔧 Future Improvements

- Internationalization (i18n): Add support for multiple languages to enhance the global reach of the application. - This would involve integrating an i18n library like react-i18next.

- Advanced Search Filters: Allow users to filter restaurants based on cuisine type, rating, or price range.

- Location-based Notifications: Implement push notifications to alert users when they are near specific types of restaurants.

- User Contributions: Allow users to submit new food places to be added to the map.

- Accessibility: Improve accessibility by adding screen reader support and ensuring all interactive elements are keyboard navigable.

## 🌐 OpenStreetMap Preview

The app uses OpenStreetMap for displaying interactive maps. Here's a preview of what the map looks like:

![OpenStreetMap Preview](https://www.openstreetmap.org/history)
<p align="center">
<img width="296" alt="Screenshot 2024-12-02 at 21 19 58" src="https://github.com/user-attachments/assets/a00da60b-5fe2-49da-912c-4edd6950988f">
</p>
