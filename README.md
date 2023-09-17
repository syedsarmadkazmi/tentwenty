# Diet Doctor React Native Code Assignment - Sarmad Kazmi

This repository showcases a feature implementation for the Diet Doctor mobile app using React Native. The task assigned was to develop a feature or screen of the app and style it according to personal preferences. For this assignment, I chose to create the `Recipe Search Screen with Filters`.

## Features and Implementation Details

-   **React Navigation**: I've implemented React Navigation to enable seamless navigation between different screens.

-   **Code Quality**: To maintain code quality and consistency, ESLint and Prettier have been integrated with specific rules configured to catch syntax errors.

-   **TypeScript**: TypeScript has been utilized to enhance code quality, avoid bugs, and ensure scalability.

-   **Apollo Client**: The application fetches real-time data from DietDoctor's GraphQL APIs using Apollo Client.

-   **Redux Toolkit**: Redux Toolkit serves as a global state management library, implementing the Flux architecture to manage app-wide data and state.

-   **Directory Structure**: I've established a scalable directory structure for the project, making it easier to manage and navigate code files.

-   **Designs**: Custom components have been designed as needed, with the assistance of the NativeBase design library.

-   **Barrel Expports**: to rollup exports from several modules into a single convenient module allowing neat import statements.

-   **Async Storage**: Although I couldn't complete the Async Storage feature due to time constraints, I'm proficient in using it for offline user data access and caching.

## Implementation Screenshots

<img src="https://github.com/syedsarmadkazmi/dietdoctor/assets/36984862/87ef3816-2264-48bf-a78f-3b7571913853" alt="Recipes Screen" style="width:200px;"/>
<img src="https://github.com/syedsarmadkazmi/dietdoctor/assets/36984862/e4b5edbc-b40d-4313-86ed-e4c2a21ed0e0" alt="Mealplan Screen" style="width:200px;"/>
<img src="https://github.com/syedsarmadkazmi/dietdoctor/assets/36984862/3794bbaa-1761-4e2f-97ed-29e160b55d80" alt="Search Filters" style="width:200px;"/>
<img src="https://github.com/syedsarmadkazmi/dietdoctor/assets/36984862/0dedabfc-2eb4-492b-bc80-0e1398d6ff10" alt="Filters Applied" style="width:200px;"/>


## How To Run The Project

### Prerequisites

Before you can run this project, you need to have the following installed on your machine:

-   [Node.js](https://nodejs.org/) (LTS version recommended)
-   [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) package manager
-   [Expo CLI](https://docs.expo.dev/get-started/installation/) (install globally)

### Installation

1. Clone this repository to your local machine:

```command
git clone https://github.com/syedsarmadkazmi/dietdoctor.git
```
2. Navigate to the project directory:

```command
cd your-project
```

3. Install project dependencies:

```command
npm install # or yarn install
```

### Running the App

To start the development server and run the app, use the following command:


```command 
expo start
```

This will open the Expo DevTools in your default web browser. You can run the app on an emulator or a physical device. To do this, follow the instructions provided in the Expo DevTools.

## Available Scripts

In the project directory, you can also run the following scripts:

-   `npm run ios`: Open the app in the iOS simulator (Mac only).
-   `npm run android`: Open the app in the Android emulator or a connected Android device.
-   `npm test`: Launch the test runner in interactive mode.

## Assignment Context
Diet Doctor is actively seeking skilled developers to contribute to their mobile app.
The assignment allows candidates to showcase their problem-solving and coding abilities.
The main goal is to understand how candidates tackle tasks within a limited timeframe.

