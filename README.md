# 📚 Library Management System

A modern and user-friendly **Library Management System** designed to digitize and simplify library operations. The system allows librarians to manage books, members, book issuing and returning, due dates, overdue records, and fines through a centralized web interface.

---

## 📌 Project Overview

The **Library Management System (LMS)** is a web-based application developed to reduce manual library work and improve the organization of library records. It provides an interactive dashboard and dedicated modules for managing books, members, issue/return transactions, due dates, and fines.

The system is designed with a clean and responsive user interface so that library information can be easily accessed, searched, updated, and maintained.

---

### 📸 Screenshots Section 1 ###

<table width="100%">
    <tr>
        <td width="33%"><img alt="Screenshot of hospital management system "src=images/12.jpg title="Ai " /></td>
        <td width="33%"><img alt="Screenshot of hospital management system "src=images/11.jpg title="Ai " /></td>     
</tr>
 <tr>
        <td width="33%"><img alt="Screenshot of hospital management system "src=images/23.jpg title="Ai " /></td>
        <td width="33%"><img alt="Screenshot of hospital management system "src=images/33.jpg title="Ai " /></td>      
</tr> 
</table>

## 🎯 Project Objectives

| No. | Objective |
|---:|---|
| 1 | Digitize library records and daily operations |
| 2 | Simplify book management and circulation |
| 3 | Maintain member information efficiently |
| 4 | Track issued and returned books |
| 5 | Monitor book availability and due dates |
| 6 | Identify overdue books |
| 7 | Calculate overdue fines |
| 8 | Provide quick search and filtering |
| 9 | Reduce manual paperwork |
| 10 | Improve overall library management efficiency |

---

## ✨ Key Features

| Module | Description |
|---|---|
| 📊 Dashboard | Displays important library statistics |
| 📚 Book Management | Add, edit, delete, search, and manage books |
| 👨‍🎓 Member Management | Register, update, search, and manage members |
| 🔄 Issue Management | Issue books to registered members |
| ↩️ Return Management | Record returned books |
| 📅 Due Date Tracking | Monitor book return deadlines |
| ⚠️ Overdue Management | Identify books that have passed their due dates |
| 💰 Fine Management | Calculate fines for overdue books |
| 🔍 Search & Filter | Quickly find books and member records |
| 📱 Responsive UI | Supports desktop, laptop, tablet, and mobile screens |

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Creates the structure of web pages |
| CSS3 | Provides styling and responsive layouts |
| JavaScript | Handles application logic and interactions |
| LocalStorage | Stores application data in the browser |
| Visual Studio Code | Development environment |
| Live Server | Local development and testing |

---

## 📊 Dashboard

The dashboard provides a quick overview of the library.

| Statistic | Description |
|---|---|
| Total Books | Total number of books registered |
| Available Books | Books currently available for issuing |
| Issued Books | Books currently borrowed by members |
| Total Members | Number of registered members |
| Overdue Books | Books that have passed their due date |
| Total Fine | Total calculated overdue fine |

---

## 📚 Book Management

The Book Management module allows librarians to maintain complete book records.

### Book Information

| Field | Description |
|---|---|
| Book ID | Unique identification number |
| Title | Name of the book |
| Author | Author of the book |
| Category | Book category or subject |
| ISBN | International Standard Book Number |
| Quantity | Total number of copies |
| Available Copies | Number of currently available copies |
| Status | Current availability status |

### Book Operations

- Add new books
- Edit book information
- Delete books
- Search books
- Filter books
- Check availability
- Manage book categories

---

## 👨‍🎓 Member Management

The Member Management module maintains information about registered library members.

| Field | Description |
|---|---|
| Member ID | Unique member identification |
| Name | Member's full name |
| Email | Member's email address |
| Phone | Member's contact number |
| Join Date | Membership registration date |
| Status | Active or inactive |

### Member Operations

- Add members
- Edit member information
- Delete members
- Search members
- View member details
- Track borrowing activity

---

## 🔄 Book Issue & Return Management

The Issue and Return module manages book circulation.

| Information | Description |
|---|---|
| Issue ID | Unique transaction ID |
| Book | Book issued to the member |
| Member | Member borrowing the book |
| Issue Date | Date when the book was issued |
| Due Date | Expected return date |
| Return Date | Actual return date |
| Status | Issued or returned |
| Fine | Applicable overdue amount |

### Operations

- Issue available books
- Select registered members
- Set due dates
- Return books
- Update book availability
- Track issue history
- Identify overdue books

---

## 💰 Fine Calculation

The system calculates overdue fines based on the number of overdue days.

### Formula

```text
Fine = Number of Overdue Days × ₹5
