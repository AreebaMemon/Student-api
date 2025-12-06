# Student API

A simple Node.js REST API for managing students.

## How to Install
Run this command in the project folder:
```bash
npm install
````

## How to Run

Start the server:

```bash
node server.js
```


## API Endpoints

* GET `/api/students` → Get all students
* GET `/api/students/:id` → Get one student
* POST `/api/students` → Add a new student
* PUT `/api/students/:id` → Update a student
* DELETE `/api/students/:id` → Delete a student

## Example (Create Student)

```bash
curl -X POST http://localhost:3000/api/students \
  -H "Content-Type: application/json" \
  -d '{"name": "Areeba Memon", "roll_no": "K21SW056"}'
