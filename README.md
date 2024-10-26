# WRE Website - Frontend

This repository contains the frontend code for the WRE website, built using Next.js 14 and TypeScript. The project is designed to handle dynamic content, including slugs in the Thai language.

### Getting Started

To get started with the WRE frontend project, follow these steps:

#### Clone the repository:

    git clone https://app-bit@dev.azure.com/app-bit/WRE/_git/frontend
    cd wre-frontend

#### Configure Environment Variables

If your project requires environment variables, create a .env file in the root directory. You can use the .env.example file as a template:

    cp .env.example .env
    Edit the .env file to configure the necessary variables.

#### Build and Start the Containers

Use Docker Compose to build and start the containers:

    docker-compose up --build

This command will build the Docker images (if not already built) and start the containers. The application will be available at http://localhost:9599 (or another port depending on your configuration).

#### Accessing the Containers

To access the running containers, use the following command:

    docker-compose exec <service_name> sh

Replace <service_name> with the name of the service you want to access (e.g., app, db).

#### Stopping the Containers

To stop the containers without removing them, run:

    docker-compose down

This will stop all running containers.

#### Install the dependencies:

    yarn install

#### Start the development server:

    yarn dev

#### Open your browser and navigate to `http://localhost:9599` to see the application running.

## Features

- **Next.js 14**: The latest version of Next.js, optimized for performance and ease of use.
- **TypeScript**: Type-safe code to reduce errors and improve maintainability.
- **Dynamic Routing**: Pages are dynamically generated based on slugs, supporting SEO and easy content management.
- **Tailwind CSS**: (Optional) Utility-first CSS framework for rapid UI development.

###### _This content created by chatGPT._
