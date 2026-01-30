# Backend API Documentation

Base URL: `http://localhost:5000/api`

## Authentication (`/auth`)

### 1. Register User

- **Endpoint**: `POST /auth/register`
- **Access**: Public
- **Description**: Registers a new user.
- **Payload** (JSON):
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "Password123"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": { ... },
      "token": "jwt_token_here"
    }
  }
  ```

### 2. Login User

- **Endpoint**: `POST /auth/login`
- **Access**: Public
- **Description**: Authenticates a user and returns a token.
- **Payload** (JSON):
  ```json
  {
    "email": "john@example.com",
    "password": "Password123"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Login successful",
    "data": {
      "user": { ... },
      "token": "jwt_token_here"
    }
  }
  ```

### 3. Get Current User

- **Endpoint**: `GET /auth/me`
- **Access**: Private (Bearer Token)
- **Description**: Returns details of the currently logged-in user.
- **Payload**: None
- **Response**:
  ```json
  {
    "success": true,
    "data": {
      "user": { ... }
    }
  }
  ```

---

## Users (`/users`)

### 1. Get User Profile

- **Endpoint**: `GET /users/me`
- **Access**: Private
- **Description**: Fetches the profile details of the authenticated user.
- **Payload**: None
- **Response**:
  ```json
  {
    "success": true,
    "data": {
      "profile": { ... }
    }
  }
  ```

### 2. Update User Profile

- **Endpoint**: `PUT /users/me`
- **Access**: Private
- **Description**: Updates the user's profile information.
- **Payload** (JSON):
  ```json
  {
    "role": "Frontend Developer",
    "experience": 3,
    "skills": ["React", "Node.js"]
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Profile updated successfully",
    "data": {
      "profile": { ... }
    }
  }
  ```

---

## Questions (`/questions`)

### 1. Generate Question

- **Endpoint**: `POST /questions/generate`
- **Access**: Private
- **Description**: Generates an AI interview question based on parameters.
- **Payload** (JSON):
  ```json
  {
    "role": "Software Engineer",
    "topic": "React",
    "difficulty": "medium",
    "experience": 2
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Question generated successfully",
    "data": {
      "question": "Explain the virtual DOM...",
      ...
    }
  }
  ```

### 2. Get Hint

- **Endpoint**: `POST /questions/hint`
- **Access**: Private
- **Description**: Generates a hint for a specific question.
- **Payload** (JSON):
  ```json
  {
    "question": "Explain the virtual DOM...",
    "topic": "React",
    "difficulty": "medium"
  }
  ```

### 3. Evaluate Answer (Standalone)

- **Endpoint**: `POST /questions/evaluate`
- **Access**: Private
- **Description**: Evaluates an answer without saving it to a session.
- **Payload** (JSON):
  ```json
  {
    "question": "...",
    "answer": "...",
    "role": "...",
    "topic": "...",
    "experience": 2
  }
  ```

---

## Answers (`/answers`)

### 1. Evaluate & Save Answer

- **Endpoint**: `POST /answers/evaluate`
- **Access**: Private
- **Description**: Evaluates an answer and saves it to a session.
- **Payload** (JSON):
  ```json
  {
    "sessionId": "mongo_id",
    "question": "...",
    "answer": "...",
    "role": "...",
    "topic": "...",
    "difficulty": "medium",
    "experience": 0
  }
  ```

### 2. Get Session Attempts

- **Endpoint**: `GET /answers/session/:sessionId`
- **Access**: Private
- **Description**: Retrieves all question attempts for a specific session.

### 3. Get Answer History

- **Endpoint**: `GET /answers/history`
- **Access**: Private
- **Description**: Retrieves user's answer history with pagination.
- **Query Params**:
  - `limit`: Number of items (default 20)
  - `page`: Page number (default 1)
  - `topic`: Filter by topic
  - `difficulty`: Filter by difficulty

---

## Sessions (`/sessions`)

### 1. Start Session

- **Endpoint**: `POST /sessions/start`
- **Access**: Private
- **Description**: Starts a new interview session.
- **Payload** (JSON):
  ```json
  {
    "topicsCovered": ["React", "JavaScript"] // Optional
  }
  ```

### 2. End Session

- **Endpoint**: `PATCH /sessions/:id/end`
- **Access**: Private
- **Description**: Ends an active session.
- **Payload** (JSON):
  ```json
  {
    "avgScore": 8.5,
    "topicsCovered": ["React"]
  }
  ```

### 3. List Sessions

- **Endpoint**: `GET /sessions`
- **Access**: Private
- **Description**: Lists all sessions for the user.
- **Query Params**:
  - `limit`, `page`, `sortBy`

### 4. Get Session Details

- **Endpoint**: `GET /sessions/:id`
- **Access**: Private
- **Params**: `id` (Session ID)

---

## Analytics (`/analytics`)

### 1. Skills Analytics

- **Endpoint**: `GET /analytics/skills`
- **Access**: Private
- **Description**: Returns analytics focused on user skills and strengths.

### 2. Weaknesses

- **Endpoint**: `GET /analytics/weaknesses`
- **Access**: Private
- **Description**: Returns analytics focused on areas for improvement.

### 3. Summary

- **Endpoint**: `GET /analytics/summary`
- **Access**: Private
- **Description**: Returns a comprehensive analytics summary.

### 4. Topic Stats

- **Endpoint**: `GET /analytics/topic/:topic`
- **Access**: Private
- **Description**: Returns detailed statistics for a specific topic.
