# Protein Tracker

A lightweight web-based nutrition tracking application built with Python and Flask. Protein Tracker helps users record their daily food intake, monitor protein and other nutritional values, and maintain date-based nutrition records locally.

> **Status:** In Development

---

## Overview

Protein Tracker is designed as a simple and practical nutrition management application.

The application allows users to create a personal nutrition profile, track food consumption, monitor daily nutritional targets, and review previous records.

The project focuses on keeping the application:

* Simple to use
* Clean and modern in design
* Easy to understand and maintain
* Lightweight without requiring a complex database
* Suitable for learning full-stack web development with Python

---

## Features

### User Profile

Users can provide basic information required for nutrition calculations:

* Name
* Age
* Gender
* Weight
* Height
* Fitness goal

Supported goals include:

* Build Muscle
* Maintain Weight
* Lose Weight

---

### Daily Nutrition Dashboard

The dashboard is designed to provide a quick overview of the user's daily nutrition.

Planned metrics include:

* Protein consumed
* Daily protein target
* Calories consumed
* Daily calorie target
* Carbohydrates
* Fats
* Overall daily progress

---

### Food Tracking

Users can record food consumed during the day.

Each food entry can contain:

* Food name
* Quantity
* Unit
* Protein
* Calories
* Carbohydrates
* Fats

The application will use these values to calculate the user's total daily nutrition.

---

### Daily Records

Nutrition data will be stored according to the date.

Example:

```text
data/
├── 2026-08-20.json
├── 2026-08-21.json
└── 2026-08-22.json
```

This approach keeps each day's data separate and makes previous records easier to retrieve.

---

### Nutrition History

Users will be able to view their previous nutrition records by selecting a date.

This will allow the application to work as a simple personal nutrition history system.

---

## Technology Stack

| Technology | Purpose                              |
| ---------- | ------------------------------------ |
| Python     | Backend logic and calculations       |
| Flask      | Web framework                        |
| HTML5      | Page structure                       |
| CSS3       | User interface and responsive design |
| JavaScript | Client-side interactions             |
| JSON       | Local date-based data storage        |
| Git        | Version control                      |
| GitHub     | Source code hosting                  |

---

## Application Architecture

The application follows a simple frontend-backend architecture:

```text
                    Protein Tracker
                          │
                          ▼
                    Web Browser
                          │
                 HTML / CSS / JS
                          │
                          ▼
                       Flask
                          │
                          ▼
                      Python
                          │
              ┌───────────┴───────────┐
              ▼                       ▼
       Nutrition Logic          Data Handling
                                      │
                                      ▼
                              Date-based JSON
                                  Storage
```

### Frontend

The frontend is responsible for:

* Displaying the application interface
* Collecting user input
* Providing navigation
* Showing nutrition progress
* Communicating with the Flask backend

### Backend

Python and Flask are responsible for:

* Receiving user data
* Processing nutrition calculations
* Managing daily records
* Reading and writing JSON files
* Connecting the frontend with application logic

---

## Project Structure

```text
protein-tracker/
│
├── app.py
│
├── templates/
│   └── index.html
│
├── static/
│   ├── style.css
│   └── script.js
│
├── data/
│   └── YYYY-MM-DD.json
│
├── .gitignore
│
└── README.md
```

### File Responsibilities

**`app.py`**

Main Flask application. It handles routes and connects the frontend with the Python backend.

**`templates/index.html`**

Contains the structure of the web application.

**`static/style.css`**

Contains the visual design, layout, typography, responsive styling, and component styles.

**`static/script.js`**

Handles simple frontend interactions such as navigation and dynamic UI behavior.

**`data/`**

Stores daily nutrition records in JSON format.

**`README.md`**

Contains project documentation, setup instructions, architecture, and usage information.

---

## Current Development Progress

### Completed

* [x] Python environment setup
* [x] Flask application setup
* [x] Basic web server
* [x] HTML application structure
* [x] User profile interface
* [x] Dashboard interface
* [x] Add Food interface
* [x] History interface
* [x] Modern responsive UI
* [x] Client-side navigation

### In Progress

* [ ] Connect profile form to Flask
* [ ] Receive form data in Python
* [ ] Calculate nutrition requirements
* [ ] Implement food entry processing
* [ ] Calculate daily nutrition totals
* [ ] Save daily data to JSON
* [ ] Load previous dates
* [ ] Connect dashboard to real data
* [ ] Input validation
* [ ] Error handling
* [ ] Final testing

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/protein-tracker.git
```

### 2. Navigate to the project

```bash
cd protein-tracker
```

### 3. Create a virtual environment

```bash
python -m venv venv
```

### 4. Activate the virtual environment

#### Windows

```powershell
venv\Scripts\activate
```

#### macOS / Linux

```bash
source venv/bin/activate
```

### 5. Install dependencies

```bash
pip install flask
```

### 6. Run the application

```bash
python app.py
```

### 7. Open the application

Open the local Flask address shown in the terminal, normally:

```text
http://127.0.0.1:5000
```

---

## How It Will Work

The planned application flow is:

```text
Create Profile
      ↓
Enter Personal Information
      ↓
Calculate Daily Nutrition Target
      ↓
Open Dashboard
      ↓
Add Food
      ↓
Calculate Nutrition
      ↓
Update Daily Progress
      ↓
Save Daily Record
      ↓
View History
```

---

## Data Storage

Protein Tracker uses local JSON files instead of a database during the initial version.

Each date receives its own file:

```text
data/2026-08-20.json
```

A typical record will contain information similar to:

```json
{
    "date": "2026-08-20",
    "profile": {
        "name": "User",
        "age": 21,
        "gender": "male",
        "weight": 63,
        "height": 175,
        "goal": "build_muscle"
    },
    "foods": [
        {
            "name": "Egg",
            "quantity": 3,
            "unit": "pieces",
            "protein": 18,
            "calories": 210,
            "carbs": 2,
            "fats": 15
        }
    ]
}
```

This structure keeps the project simple while providing a clear path toward a database-based version in the future.

---

## Design Principles

The interface is designed around the following principles:

### Simplicity

The application should be understandable without requiring technical knowledge.

### Minimalism

Only useful information and actions should be presented to the user.

### Consistency

Colors, typography, spacing, buttons, and cards follow a consistent visual system.

### Responsiveness

The interface is intended to work across desktop, tablet, and mobile screen sizes.

### Maintainability

The project avoids unnecessary frameworks and complicated architecture so that the code remains easy to understand and modify.

---

## Future Improvements

Possible future versions may include:

* SQLite or PostgreSQL database
* User authentication
* Food database
* Searchable food library
* Custom foods
* Meal categories
* Weekly nutrition charts
* Monthly progress reports
* Weight tracking
* Protein streaks
* Export nutrition data
* REST API
* Cloud deployment
* Mobile-friendly PWA version

---

## Learning Objectives

This project is also being developed as a practical learning project.

The main concepts covered include:

* Python programming
* Flask web development
* HTTP request handling
* HTML forms
* CSS responsive design
* JavaScript DOM manipulation
* Data validation
* File handling
* JSON data structures
* CRUD operations
* Git and GitHub
* Basic web application architecture

---

## Project Goals

The primary goal is to build a functional nutrition tracker while understanding how each part of a web application works.

Rather than relying on complex frameworks or pre-built systems, the project focuses on understanding the fundamentals:

```text
Frontend
   ↓
Request
   ↓
Flask
   ↓
Python Logic
   ↓
Data Storage
   ↓
Response
   ↓
Frontend
```

---

## License

This project is intended primarily as a learning and portfolio project.

A formal open-source license can be added when the project is prepared for public contribution.

---

## Author

**Shubham Mali**

Computer Science Student
Interested in software development, web applications, and practical technology projects.

---

## Project Status

Protein Tracker is currently under active development.

The user interface has been implemented, while backend functionality, nutrition calculations, and persistent data storage are being developed incrementally.
