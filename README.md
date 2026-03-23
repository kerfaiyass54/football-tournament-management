
# Football Tournament Management System 🏆⚽

[![My Skills](https://skillicons.dev/icons?i=py,docker,spring,angular,bootstrap,css,git,github,html,idea,mongodb,npm,postman,githubactions,postgres,elasticsearch,ts,vscode)](https://skillicons.dev)


A **modular microservices architecture** for comprehensive football tournament management, featuring a complete ecosystem for all stakeholders in the football industry. This system provides a robust foundation for managing teams, players, matches, tournaments, and all related operations with modern cloud-native technologies.

---

## 🌟 Why This Project?

✅ **Complete Football Ecosystem** - Manage everything from player stats to tournament organization

✅ **Microservices Architecture** - Scalable, maintainable, and independently deployable services

✅ **Multi-Database Support** - PostgreSQL for relational data, MongoDB for flexible document storage

✅ **Modern Authentication** - Secure with Keycloak integration

✅ **Real-time Capabilities** - Built with Spring Cloud Stream for event-driven architecture

✅ **Full-Stack Solution** - Includes both backend microservices and Angular frontend

✅ **AI Integration** - Built-in AI explainer service for data interpretation

✅ **Containerized** - Dockerized for easy deployment and scaling

---

## 🛠️ Tech Stack

### Backend
- **Language**: TypeScript (with Java backend)
- **Framework**: Spring Boot 3.4+
- **Microservices**: Spring Cloud (Netflix Eureka, Config Server, Gateway)
- **Databases**: PostgreSQL, MongoDB
- **Authentication**: Keycloak
- **Event Streaming**: Apache Kafka (via Spring Cloud Stream)
- **Build Tool**: Maven
- **Code Generation**: Lombok
- **Database Migration**: Flyway
- **Monitoring**: Zipkin

### Frontend
- **Framework**: Angular 21+
- **Styling**: Bootstrap 5, PrimeNG
- **Authentication**: Keycloak JS
- **State Management**: RxJS

### DevOps
- **Containerization**: Docker
- **Orchestration**: Docker Compose
- **CI/CD**: GitHub Actions

---

## 📦 Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- [Java JDK 21](https://www.oracle.com/java/technologies/javase/jdk21-archive-downloads.html)
- [Maven 3.9+](https://maven.apache.org/install.html)
- [Node.js v18.16.0+](https://nodejs.org/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Git](https://git-scm.com/downloads)

### Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kerfaiyass54/football-tournament-management.git
   cd football-tournament-management
   ```

2. **Set up the backend**:
   ```bash
   # Navigate to backend directory
   cd fta-backend

   # Build all microservices
   mvn clean package

   # Start services with Docker Compose
   docker-compose up --build
   ```

3. **Set up the frontend**:
   ```bash
   # Navigate to frontend directory
   cd ../fta-ui

   # Install dependencies
   npm install

   # Start development server
   ng serve
   ```

4. **Access the application**:
   - Backend services will be available at various ports (see Docker Compose)
   - Frontend will be available at [http://localhost:4200](http://localhost:4200)
   - Keycloak Admin Console: [http://localhost:7080](http://localhost:7080)
   - Database administration tools:
     - PostgreSQL: [http://localhost:5050](http://localhost:5050) (pgAdmin)
     - MongoDB: [http://localhost:8081](http://localhost:8081) (Mongo Express)

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can get involved:

### Development Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kerfaiyass54/football-tournament-management.git
   cd football-tournament-management
   ```

2. **Set up your development environment**:
   ```bash
   # For backend
   cd fta-backend
   mvn clean install

   # For frontend
   cd ../fta-ui
   npm install
   ```

3. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

### Code Style Guidelines

1. **TypeScript/Java**:
   - Use consistent indentation (2 spaces)
   - Follow the existing code style in the repository
   - Add proper Javadoc comments for public methods
   - Use Lombok annotations where appropriate

2. **Angular**:
   - Follow Angular style guide: https://angular.io/guide/styleguide
   - Use component-based architecture
   - Keep components focused and single-purpose
   - Use proper naming conventions (PascalCase for components, kebab-case for files)

3. **General**:
   - Write clear, concise commit messages
   - Follow the existing project structure
   - Add proper tests for new functionality
   - Keep pull requests focused on one feature or fix

### Pull Request Process

1. **Fork the project** and create your feature branch from `main`.
2. **Commit your changes** with descriptive messages.
3. **Push your branch** to GitHub.
4. **Open a Pull Request** with a clear description of your changes.
5. **Wait for feedback** and make any requested changes.
6. **Once approved**, your changes will be merged into the main branch.



## 🎉 Success Stories

While this project is still in development, here are some potential use cases:

1. **Football Clubs**: Manage player contracts, training schedules, and match results
2. **Tournament Organizers**: Create and manage tournaments with multiple teams
3. **Stadium Managers**: Schedule matches, manage facilities, and handle ticket sales
4. **Supporters**: Book tickets, track match results, and engage with their favorite teams
5. **Referees**: Manage match assignments and view match details
6. **Coaches**: Monitor player performance and training progress

---

## 📚 Resources

### Documentation
- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [Angular Documentation](https://angular.io/docs)
- [Keycloak Documentation](https://www.keycloak.org/documentation)
- [Docker Documentation](https://docs.docker.com/)

### Learning Materials
- [Microservices with Spring Boot](https://spring.io/guides/gs/microservices/)
- [Angular Architecture](https://angular.io/guide/architecture)
- [Docker for Developers](https://docker-curriculum.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

### Community
- [Spring Community](https://spring.io/community)
- [Angular Community](https://angular.io/community)
- [Keycloak Community](https://www.keycloak.org/community)
- [Docker Community](https://www.docker.com/community)


## 🎯 Contribution Ideas

Looking for ways to contribute? Here are some ideas:

1. **Feature Development**:
   - Add mobile application support
   - Implement advanced analytics dashboard
   - Create VR/AR stadium visualization

2. **Improvements**:
   - Enhance error handling and logging
   - Improve test coverage
   - Optimize database queries

3. **Documentation**:
   - Add detailed API documentation
   - Create deployment guides
   - Write tutorials for specific features

4. **Localization**:
   - Add support for multiple languages
   - Localize all UI elements

5. **Performance**:
   - Optimize microservices communication
   - Improve caching strategies
   - Enhance API response times


## 🙌 Thank You

Thank you for your interest in the Football Tournament Management System! We hope this project helps you manage football operations more efficiently and provides a solid foundation for building your own football management applications.

If you have any questions or need further assistance, please don't hesitate to reach out to our community or open an issue on GitHub.

Let's make football management easier, smarter, and more connected!
