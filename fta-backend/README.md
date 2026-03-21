
# Football Management Microservices Backend 🏟️🔥

![GitHub Stars](https://img.shields.io/github/stars/kerfaiyass54/football-app-back?style=social)
![GitHub Forks](https://img.shields.io/github/forks/kerfaiyass54/football-app-back?style=social)
![Java CI](https://github.com/kerfaiyass54/football-app-back/actions/workflows/java-ci.yml/badge.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

A comprehensive **Spring Boot microservices** architecture for managing all aspects of football tournaments, teams, players, and events. This backend system provides a robust foundation for building a complete football management platform with support for all key stakeholders.

---

## ✨ Features

✅ **Modular Microservices Architecture** - Each domain has its own service (Teams, Players, Matches, etc.).

✅ **Multi-Database Support** - PostgreSQL for relational data, MongoDB for flexible document storage.

✅ **Authentication & Authorization** - Secure with Keycloak integration.

✅ **Event-Driven Architecture** - Built with Spring Cloud Stream for real-time updates.

✅ **Service Discovery** - Eureka server for dynamic service registration.

✅ **API Gateway** - Unified entry point with routing and security.

✅ **Configuration Management** - Centralized configuration with Config Server.

✅ **Monitoring & Tracing** - Zipkin integration for distributed tracing.

✅ **Dockerized** - Complete containerized deployment with Docker Compose.

✅ **Comprehensive CRUD Operations** - Full support for all football management operations.

---

## 🛠️ Tech Stack

### Core Technologies
- **Language**: Java 21
- **Framework**: Spring Boot 3.4+
- **Microservices**: Spring Cloud (Netflix Eureka, Config Server, Gateway)
- **Databases**: PostgreSQL, MongoDB
- **Authentication**: Keycloak
- **Event Streaming**: Apache Kafka (via Spring Cloud Stream)
- **Containerization**: Docker
- **Orchestration**: Docker Compose

### Supporting Tools
- **Build Tool**: Maven
- **Code Generation**: Lombok
- **Database Migration**: Flyway
- **Monitoring**: Zipkin
- **Testing**: JUnit 5, Mockito

---

## 📦 Installation

### Prerequisites

Before you begin, ensure you have the following installed:
- [Java JDK 21](https://www.oracle.com/java/technologies/javase/jdk21-archive-downloads.html)
- [Maven 3.9+](https://maven.apache.org/install.html)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Git](https://git-scm.com/downloads)

### Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kerfaiyass54/football-app-back.git
   cd football-app-back
   ```

2. **Build all microservices**:
   ```bash
   mvn clean package
   ```

3. **Start the services with Docker Compose**:
   ```bash
   docker-compose up --build
   ```

4. **Access the services**:
   - Keycloak Admin Console: [http://localhost:7080](http://localhost:7080)
   - PostgreSQL: [http://localhost:5433](http://localhost:5433) (via pgAdmin at [http://localhost:5050](http://localhost:5050))
   - MongoDB: [http://localhost:27017](http://localhost:27017) (via Mongo Express at [http://localhost:8081](http://localhost:8081))
   - API Gateway: [http://localhost:8080](http://localhost:8080)

---

## 🔧 Configuration

### Environment Variables

| Variable                     | Description                          | Default Value |
|------------------------------|--------------------------------------|---------------|
| `SPRING_PROFILES_ACTIVE`     | Active Spring profiles               | `dev`         |
| `KEYCLOAK_URL`               | Keycloak server URL                  | `http://localhost:7080` |
| `EUREKA_CLIENT_SERVICEURL_DEFAULTZONE` | Eureka server URL | `http://localhost:8761/eureka/` |
| `DATABASE_URL`               | Database connection URL              | `jdbc:postgresql://localhost:5433/football` |

### Configuration Files

- **Config Server**: Located in `config-server/src/main/resources/configurations/`
  Example file: `application.yml` for each microservice
- **Application Properties**: Each microservice has its own `application.yml` in `src/main/resources/`

### Customization Options

1. **Database Configuration**:
   ```yaml
   spring:
     datasource:
       url: jdbc:postgresql://${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}
       username: ${DATABASE_USERNAME}
       password: ${DATABASE_PASSWORD}
   ```

2. **Keycloak Configuration**:
   ```yaml
   spring:
     security:
       oauth2:
         resourceserver:
           jwt:
             issuer-uri: ${KEYCLOAK_URL}/realms/football-realm
   ```

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can get involved:

### Development Setup

1. **Fork the repository**:
   ```bash
   git clone https://github.com/kerfaiyass54/football-app-back.git
   cd football-app-back
   ```

2. **Set up your environment**:
   ```bash
   # Install dependencies
   mvn install

   # Start the services
   docker-compose up --build
   ```

3. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

### Code Style Guidelines

- Use **Java 21** features where applicable
- Follow **Spring Boot best practices**
- Use **Lombok** for reducing boilerplate code
- Write **unit tests** for all new features
- Follow **RESTful API conventions**

### Pull Request Process

1. **Submit a PR** with a clear description of your changes
2. **Ensure tests pass** before submitting
3. **Address any feedback** from maintainers
4. **Celebrate your contribution!** 🎉

---

## 🐛 Issues & Support

### Reporting Issues

If you encounter any problems or have feature requests, please open an issue on GitHub with:
- A clear description of the issue
- Steps to reproduce (if applicable)
- Any relevant logs or screenshots

### Getting Help

- **Discussions**: Join our [GitHub Discussions](https://github.com/kerfaiyass54/football-app-back/discussions)
- **Community Slack**: [Join our Slack channel](https://join.slack.com/t/footballapp)
- **Email**: contact@footballapp.com

### FAQ

**Q: How do I deploy this to production?**
A: Use the provided Docker Compose file with environment variables for production settings. Consider adding monitoring, logging, and scaling configurations.

**Q: Can I extend the microservices?**
A: Absolutely! Each microservice is designed to be modular. You can add new endpoints, services, or even new microservices as needed.

**Q: How do I add a new database?**
A: Follow the existing patterns in the `builder`, `player`, or other microservices. Ensure you update the `docker-compose.yml` file to include the new database container.

---


## 🚀 Getting Started Today

Ready to dive in? Follow these steps to get started:

1. **Fork and clone** the repository
2. **Set up your environment** with Docker and Java
3. **Build and run** the services using Docker Compose
4. **Explore the codebase** and start contributing!

Join us in building the future of football management! 🏆

```bash
# Run the services
docker-compose up --build

# Access the API Gateway
curl http://localhost:8080/api/teams
```

Happy coding! 💻😊
```
