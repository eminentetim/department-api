# Department Management API

A robust backend API built with **NestJS**, **GraphQL**, **TypeORM**, **PostgreSQL**, and **TypeScript**. This project provides a secure and scalable system for managing departments and sub-departments, complete with input validation, authentication, and full CRUD functionality.

---

## 📝 Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Authentication](#authentication)
- [GraphQL API Endpoints](#graphql-api-endpoints)
  - [Create Department](#create-department)
  - [Get Departments](#get-departments)
  - [Update Department](#update-department)
  - [Delete Department](#delete-department)
  - [CRUD Sub-Departments](#crud-sub-departments)
- [Validation Rules](#validation-rules)
- [License](#license)

---

## 📌 Project Description

This backend service allows authenticated users to interact with protected endpoints that manage **departments** and their associated **sub-departments**. It provides:

- A GraphQL API for managing hierarchical data
- JWT-based authentication
- Input validation using decorators and DTOs
- Secure CRUD operations

---

## 🚀 Features

- JWT Authentication
- GraphQL API (via Apollo Server)
- Input validation with class-validator
- Relational modeling using TypeORM
- Nested entity support (departments and sub-departments)
- Full CRUD for both departments and sub-departments

---

## 🛠 Tech Stack

- **NestJS**
- **GraphQL (Apollo Server)**
- **TypeORM**
- **PostgreSQL**
- **TypeScript**
- **JWT Authentication**

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (v18 or later)
- PostgreSQL
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/department-api.git
cd department-api

# Install dependencies
npm install

# Configure environment variables
cp  .env
# Add DB connection and JWT secret

# Run database migrations
npm typeorm migration:run

# Start the application
npm start:dev
🔐 Authentication
Endpoint: POST /login

Auth Strategy: JWT

Required in Authorization header for all protected endpoints

Sample Login Request (via GraphQL Playground):
graphql
Copy
Edit
mutation {
  login(input: { username: "admin", password: "securePassword" }) {
    accessToken
  }
}
Use the returned token as a Bearer token in the Authorization header.

📡 GraphQL API Endpoints
✅ Create Department
Create either a single department or a department with multiple sub-departments.

Mutation
graphql
Copy
Edit
mutation {
  createDepartment(input: {
    name: "Finance",
    subDepartments: [
      { name: "Accounts" },
      { name: "Audit" }
    ]
  }) {
    id
    name
    subDepartments {
      id
      name
    }
  }
}
📥 Get Departments
Query all departments and sub-departments hierarchically.

Query
graphql
Copy
Edit
query {
  getDepartments {
    id
    name
    subDepartments {
      id
      name
    }
  }
}
Example Output
json
Copy
Edit
[
  {
    "id": 1,
    "name": "Finance",
    "subDepartments": [
      { "id": 2, "name": "Accounts" },
      { "id": 3, "name": "Audit" }
    ]
  }
]
✏️ Update Department
Update a department's name.

Mutation
graphql
Copy
Edit
mutation {
  updateDepartment(id: 1, name: "New Finance") {
    id
    name
  }
}
❌ Delete Department
Deletes a department and all its sub-departments.

Mutation
graphql
Copy
Edit
mutation {
  deleteDepartment(id: 1) {
    success
    message
  }
}
🧩 CRUD Sub-Departments
You can manage sub-departments separately if needed:

Create Sub-Department
graphql
Copy
Edit
mutation {
  createSubDepartment(input: {
    name: "Payroll",
    departmentId: 1
  }) {
    id
    name
  }
}
Update Sub-Department
graphql
Copy
Edit
mutation {
  updateSubDepartment(id: 2, name: "Internal Audit") {
    id
    name
  }
}
Delete Sub-Department
graphql
Copy
Edit
mutation {
  deleteSubDepartment(id: 2) {
    success
    message
  }
}
✅ Validation Rules
name must be at least 2 characters.

subDepartments (if provided) must contain objects with valid names.

All input validation is enforced using DTOs and class-validator.

📄 License
This project is licensed under the MIT License.

🙌 Contributing
Feel free to open issues or submit PRs for improvements!

📧 Contact
For any questions, reach out at: etimeminent@gmail.com
