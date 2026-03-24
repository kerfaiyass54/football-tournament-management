# Football App Frontend 🏆

[![My Skills](https://skillicons.dev/icons?i=docker,angular,bootstrap,css,git,github,html,idea,npm,postman)](https://skillicons.dev)


## 🚀 Overview

Welcome to **Football App Frontend**, a comprehensive Angular application designed to revolutionize how football enthusiasts, organizers, and administrators interact with football data. This TypeScript-based application provides a complete ecosystem for managing teams, players, tournaments, and more with an intuitive, responsive interface.

### What is Football App Frontend?
Football App Frontend is a **modern, full-featured football management platform** that allows users to:
- **Manage teams, players, and tournaments** with ease
- **Chat with AI assistants** for instant insights and explanations
- **Monitor statistics and analytics** with interactive visualizations
- **Securely authenticate** using Keycloak for role-based access control

### Key Features
✅ **Role-Based Access Control** - Different views for admins, managers, players, and supporters
✅ **AI-Powered Chat Interface** - Chat with specialized AI assistants for each football domain
✅ **Comprehensive Data Management** - Manage all aspects of football operations
✅ **Interactive Visualizations** - Pie charts, statistics cards, and more
✅ **Responsive Design** - Works seamlessly on all devices
✅ **Real-Time Updates** - Stay informed with live data
✅ **Secure Authentication** - Keycloak integration for robust security

### Who This Project Is For
👨‍💻 **Developers** looking to contribute to an open-source football management system
🏟️ **Football Enthusiasts** who want to manage and track football data
🏆 **Organizers** needing to efficiently manage tournaments and matches
👥 **Administrators** responsible for managing users, locations, and resources

---

## ✨ Features

### Core Functionality
- **User Management**: Create, edit, and manage all user roles
- **Team Management**: Track team performance, budgets, and statistics
- **Player Management**: View player stats, contracts, and transfer offers
- **Supporter Management**: Book and track match tickets
- **Organizer Management**: Create and manage tournaments and matches
- **Builder Management**: Manage stadiums and fields
- **Referee Management**: Assign and track match officials

### Technical Features
- **Modular Architecture**: Clean separation of concerns with lazy-loaded routes
- **TypeScript**: Full type safety throughout the application
- **PrimeNG**: Rich UI components for a polished interface
- **Bootstrap 5**: Responsive design framework
- **Keycloak Integration**: Secure authentication and authorization
- **RxJS**: Reactive programming for efficient data handling
- **Angular Animations**: Smooth transitions and animations

### Unique Selling Points
🔹 **Specialized AI Assistants**: Chat with domain-specific AI for each football role
🔹 **Comprehensive Analytics**: Detailed statistics and visualizations
🔹 **Multi-Language Support**: Ready for internationalization
🔹 **Extensible Architecture**: Easy to add new features and integrations

---

## 🛠️ Tech Stack

### Primary Technologies
- **Language**: TypeScript
- **Framework**: Angular 21.1.0
- **UI Framework**: PrimeNG 21.1.1
- **Styling**: Bootstrap 5.3.8, CSS3
- **State Management**: RxJS 7.8.0
- **Authentication**: Keycloak 25.0.0
- **Testing**: Jasmine 5.1.0, Karma 6.4.0

### Supporting Tools
- **Build Tool**: Angular CLI 21.1.0
- **Package Manager**: npm
- **Version Control**: Git
- **Code Quality**: ESLint, EditorConfig
- **Visualization**: Chart.js 4.5.1

### System Requirements
- **Node.js**: v18.16.0 or higher
- **npm**: v9.0.0 or higher
- **Browser**: Modern browsers (Chrome, Firefox, Safari, Edge)
- **Memory**: 2GB+ RAM recommended

---

## 📦 Installation

### Prerequisites
Before you begin, ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v18.16.0 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Angular CLI](https://angular.io/cli) (v21.1.0 or higher)

### Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kerfaiyass54/football-app-frontend.git
   cd football-app-frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Copy `.env.example` to `.env` in the project root
   - Update the variables with your configuration (e.g., API endpoints, Keycloak settings)

4. **Run the development server**:
   ```bash
   ng serve
   ```

5. **Access the application**:
   Open your browser to [http://localhost:4200](http://localhost:4200)

### Alternative Installation Methods

#### Docker Setup
1. **Build the Docker image**:
   ```bash
   docker build -t football-app-frontend .
   ```

2. **Run the container**:
   ```bash
   docker run -p 4200:4200 football-app-frontend
   ```

#### Development Setup
For a more advanced development environment:
```bash
# Install global Angular CLI (if not already installed)
npm install -g @angular/cli@21.1.0

# Set up pre-commit hooks
npm run setup:hooks

# Start the development server with hot module replacement
ng serve --open
```


## 🔧 Configuration

### Environment Variables
Create a `.env` file in the project root to configure environment-specific settings:

```env
# API Base URLs
API_BASE_URL=http://localhost
PLAYER_SERVICE=http://localhost:8051
TEAM_SERVICE=http://localhost:8054
MANAGER_SERVICE=http://localhost:8052
BUILDER_SERVICE=http://localhost:8053
ORGANIZER_SERVICE=http://localhost:8084
REFEREE_SERVICE=http://localhost:8100
SUPPORTER_SERVICE=http://localhost:8091
LOCATION_SERVICE=http://localhost:8091

# Authentication
KEYCLOAK_URL=http://localhost:8080/auth
KEYCLOAK_REALM=football-app
KEYCLOAK_CLIENT_ID=football-app-client

# Application
APP_TITLE=Football App
APP_VERSION=1.0.0
```

### Configuration Files
- **angular.json**: Main Angular configuration with build, serve, and test settings
- **tsconfig.json**: TypeScript compiler options
- **tsconfig.app.json**: Application-specific TypeScript configuration
- **tsconfig.spec.json**: Test-specific TypeScript configuration

### Customization Options
- **Themes**: Customize the application theme using PrimeNG's theme builder
- **Colors**: Modify the color scheme in `src/styles.css`
- **Fonts**: Update the font families in the `index.html` file
- **Animations**: Adjust animation durations and properties in component styles

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can get involved:

### Development Setup
1. **Fork the repository** and clone your fork locally:
   ```bash
   git clone https://github.com/kerfaiyass54/football-app-frontend.git
   cd football-app-frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up pre-commit hooks** (if available):
   ```bash
   npm run setup:hooks
   ```

4. **Run the development server**:
   ```bash
   ng serve
   ```

### Code Style Guidelines
- **TypeScript**: Follow strict TypeScript rules with proper typing
- **Angular**: Adhere to Angular best practices and style guide
- **Formatting**: Use Prettier for consistent code formatting
- **Naming**: Use clear, descriptive names for components, services, and variables
- **Documentation**: Add JSDoc comments for all public APIs

### Pull Request Process
1. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** and ensure they pass all tests

3. **Commit your changes** with a descriptive message:
   ```bash
   git commit -m "feat: add new player management feature"
   ```

4. **Push to the branch**:
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request** on GitHub with a clear title and description

### Testing
- **Unit Tests**: Use Jasmine and Karma for unit testing
- **Integration Tests**: Test component interactions
- **E2E Tests**: Use Protractor for end-to-end testing

Run tests with:
```bash
# Run unit tests
ng test

# Run end-to-end tests
ng e2e
```

---


## 🎉 Get Started Today!

Join the **Football App** community and help shape the future of football management! Whether you're a developer, designer, or football enthusiast, there's a place for you in this project.

👉 **Star this repository** to show your support!
👉 **Fork and contribute** to make Football App even better!
👉 **Share your ideas** in the discussions!

Let's build something amazing together! ⚽💪
```
