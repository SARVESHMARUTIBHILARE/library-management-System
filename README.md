📚 Library Management System
📌 Project Overview

The Library Management System (LMS) is a web-based application developed to digitize and simplify the management of library operations. It provides a centralized platform for managing books, members, book issuing, book returning, due dates, and fines.

The system offers a clean and responsive user interface that allows librarians to efficiently maintain library records, monitor book availability, and track borrowing activities. It reduces manual paperwork and makes library information easier to search, update, and manage.

🎯 Project Objectives
No.	Objective
1	Digitize library records and daily operations
2	Manage books and their availability efficiently
3	Maintain member information in an organized manner
4	Track book issuing and returning activities
5	Monitor due dates and overdue books
6	Calculate fines for overdue books
7	Provide quick search and filtering functionality
8	Reduce manual paperwork and improve efficiency
✨ Key Features
Module	Description
📊 Dashboard	Displays total books, available books, issued books, members, and fines
📚 Book Management	Add, edit, delete, search, and manage books
👨‍🎓 Member Management	Register, update, search, and manage library members
🔄 Issue Management	Issue books to registered members and record issue dates
↩️ Return Management	Record returned books and update availability
📅 Due Date Tracking	Monitor book return deadlines
⚠️ Overdue Tracking	Identify books that have exceeded their due dates
💰 Fine Management	Calculate fines for overdue books
🔍 Search & Filter	Quickly find books and member records
📱 Responsive UI	Supports desktop, laptop, tablet, and mobile screens
🛠️ Technology Stack
Technology	Purpose
HTML5	Creates the structure and content of web pages
CSS3	Provides styling, layouts, animations, and responsive design
JavaScript	Handles application logic and user interactions
LocalStorage	Stores library data directly in the browser
📊 Dashboard

The dashboard provides a quick overview of library activities.

Statistic	Description
Total Books	Total number of books registered in the system
Available Books	Books currently available for issuing
Issued Books	Books currently borrowed by members
Total Members	Number of registered library members
Overdue Books	Books that have passed their due date
Total Fine	Total calculated overdue fine
📚 Book Management

The Book Management module allows the librarian to maintain complete book records.

Book Information
Field	Description
Book ID	Unique identification number
Title	Name of the book
Author	Book author
Category	Book category or subject
ISBN	International Standard Book Number
Quantity	Total number of copies
Available Copies	Currently available copies
Status	Available, issued, or unavailable
👨‍🎓 Member Management

The Member Management module maintains information about students or other registered library members.

Field	Description
Member ID	Unique member identification
Name	Member's full name
Email	Member's email address
Phone	Contact number
Join Date	Membership registration date
Status	Active or inactive
🔄 Book Issue & Return

The system records every book circulation transaction.

Information	Description
Issue ID	Unique transaction ID
Book	Issued book
Member	Member borrowing the book
Issue Date	Date the book was issued
Due Date	Expected return date
Return Date	Actual return date
Status	Issued or returned
Fine	Applicable overdue amount
💰 Fine Calculation

For overdue books, the system calculates the fine according to the number of overdue days.

Fine = Overdue Days × ₹5

Example:

Overdue Days	Fine
1 day	₹5
3 days	₹15
5 days	₹25
10 days	₹50
💾 Data Storage

The current version uses Browser LocalStorage for storing application data.

Data	Storage
Books	LocalStorage
Members	LocalStorage
Issue Records	LocalStorage
Return Records	LocalStorage
Fine Information	LocalStorage

Note: LocalStorage is suitable for this frontend/academic version. A production system can be connected to a backend and database such as MySQL or MongoDB.

📂 Project Modules
Library Management System
│
├── Dashboard
├── Book Management
├── Member Management
├── Issue Book
├── Return Book
├── Due Date Tracking
├── Overdue Management
└── Fine Management
🚀 How to Run
Using Visual Studio Code
Download and extract the project.
Open the project folder in Visual Studio Code.
Install the Live Server extension.
Open index.html.
Right-click on the file.
Select Open with Live Server.
The application will open in your web browser.
Main Entry File
index.html
📱 Responsive Design

The application is designed to provide a consistent experience across:

Device	Support
Desktop	✅
Laptop	✅
Tablet	✅
Mobile	✅
🔮 Future Scope
Feature	Description
🔐 Authentication	Secure librarian and member login
🗄️ Database	MySQL or MongoDB integration
🌐 Backend API	Connect frontend with a server-side application
📖 Online Reservation	Allow members to reserve books online
📷 QR/Barcode	Scan books using QR or barcode technology
🔔 Notifications	Automatic due-date and overdue notifications
💳 Advanced Fine System	More flexible fine calculation and payment tracking
📊 Advanced Analytics	Detailed reports and library statistics
☁️ Cloud Deployment	Host the system online
⚛️ React + TypeScript	Upgrade the frontend to a component-based architecture
🎯 Project Benefits
Benefit	Description
Efficiency	Reduces manual library management work
Organization	Keeps records structured and easy to access
Accuracy	Reduces errors in book circulation records
Accessibility	Makes information easier to search
Monitoring	Helps track issued and overdue books
User Experience	Provides a simple and responsive interface
📜 License

This project is developed for educational and academic purposes.

👨‍💻 Technology Summary
Category	Technology
Frontend	HTML5, CSS3, JavaScript
Data Storage	Browser LocalStorage
Development Tool	Visual Studio Code
Local Testing	Live Server
Version Control	Git / GitHub
📚 Library Management System

A simple, efficient, and user-friendly digital solution for modern library management.
