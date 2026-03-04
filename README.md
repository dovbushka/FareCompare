# 🚕 Taxi Compare

![Taxi Compare Home](assets/home.png)

## 📌 Project Overview

Taxi Compare is a full-stack web application that allows users to compare taxi ride prices and choose the most cost-effective option.

The platform simulates price comparison between ride providers (e.g., Uber and Cabify), determines the cheapest option, and calculates a small commission.

---

# 🌍 Website Structure

The website consists of four main pages:

## 1️⃣ Presentation App (Home)

![Home Page Preview](assets/home.png)

- Introduces the Taxi Compare concept  
- Contains a call-to-action button  
- Connects to the backend API  
- Displays ride comparison results  

---

## 2️⃣ Why Riders Love Us

Explains the platform’s value proposition:

- Transparent pricing  
- Instant comparison  
- No hidden fees  
- Smart ride decisions  

---

## 3️⃣ Three Steps to Savings

Shows how the system works in three simple steps:

1. Enter pickup and destination  
2. Compare ride prices  
3. Choose the cheapest option  

---

## 4️⃣ Stupidly Simple Pricing

![Pricing Section Preview](assets/pricing.png)

Explains the pricing model:

- Free ride comparison  
- No subscription required  
- Small commission per successful booking  

---

# ⚙️ How It Works

## Frontend (React + Vite)

- Renders the website pages  
- Handles user interaction  
- Sends POST requests to the backend  
- Receives JSON responses  
- Updates UI dynamically  

Example request:

```http
POST http://localhost:4000/api/compare
Content-Type: application/json
