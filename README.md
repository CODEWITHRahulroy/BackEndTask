# User Management System with WhatsApp Integration

## Overview

This project involves the development of a robust back-end system that manages user data and integrates with the WhatsApp Business API to send automated notifications upon user registration. This assignment showcases the ability to design databases, implement triggers, and work with third-party APIs.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Architecture](#architecture)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **Node.js**: JavaScript runtime for building the server-side application.
- **Express.js**: Web framework for Node.js.
- **Infobip API**: For sending WhatsApp notifications.
- **MongoDB**: Database for storing user data.
- **Mongoose**: ODM library for MongoDB and Node.js.

## Architecture

This project follows the MVC (Model-View-Controller) architecture pattern:

- **Model**: Defines the data structure and handles database interactions.
- **View**: Not applicable as this is a back-end application.
- **Controller**: Contains the logic for handling requests, processing data, and interacting with the model and external APIs.

## Features

- User registration with data validation.
- Automated WhatsApp notifications upon successful registration.
- Database triggers for managing user events.
- RESTful API endpoints for user management.

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/CODEWITHRahulroy/whatsapp-message-sender
2. **Install the modules**:
    ```bash
    npm i
3. **Start the development server with**:
   ```bash
   npm run dev
