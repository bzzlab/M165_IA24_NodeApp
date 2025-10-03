# M165_IA24_NodeApp

A simple pagination implementation in Node.js using Express and MongoDB. This project demonstrates how to fetch and display paginated data from a MongoDB database via a RESTful API.

## Description

This application is a basic Node.js backend with Express.js that connects to MongoDB. It includes pagination functionality to retrieve a limited number of records per page, making it efficient for handling large datasets. 

### Features
- Connects to MongoDB for data storage and retrieval.
- Uses MongoDB’s `mflix-sample` dataset from [MongoDB Sample Datasets]([https://www.mongodb.com/docs/atlas/sample-data/](https://www.mongodb.com/docs/atlas/sample-data/sample-mflix/))
- Implements server-side pagination for API endpoints.
- Simple RESTful API to query paginated data (e.g., users or sample records).
- Error handling and basic logging.

## Prerequisites
- Node.js (v14 or higher) installed.
- MongoDB (local or cloud instance) **must be running**. 
- Basic knowledge of npm and MongoDB.

## Installation

1. **Clone the repository**:
   ```
   git clone https://github.com/bzzlab/M165_IA24_NodeApp.git
   cd M165_IA24_NodeApp
   ```

2. **Install dependencies**:
   ```
   npm install
   ```
   This installs Express, Mongoose (for MongoDB), and other required packages.


## Usage

1. **Start the server**:
   ```
   npm start
   ```
   The server will run on `http://localhost:3000` (or the port specified in `.env`).


## Troubleshooting
- **MongoDB connection error**: Ensure MongoDB is running and your URI is correct.
- **No data returned**: Seed your database with sample records.


## Acknowledgments
- Based on the excellent tutorial by [Adnan Tech](https://adnan-tech.com/pagination-node-js-mongo-db-express/).
- Built for educational purposes in the M165 course (IA24).

