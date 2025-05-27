# 🚀 Creating E-commerce Website using Laravel 12, Inertia and React js

## Features
-  [✅] User Roles ['customer','admin','staff']
-  [✅] Inventory
-  [✅] Coupons | Discount Coupons
-  [✅] Courier | Courier Company | J&T | Flash
-  [✅] Mode of Payment Cod|Gateway
-  [✅] Add to Cart | manage cart - remove & add
-  [✅] Manage Products
-  [✅] Analytics | Monthly income | Sales Report | Most Ordered Product 
-  [✅] Notifications | E-mail 
-  [✅] OTP | Reset Password | Forgot Password | Sign up | Google Auth
-  [✅] Orders | Transactions
-  [✅] Sales | Money | PHP currency

## Steps by Steps Coding
- [✅] Set Up File structure & Packages | @vite @inertia @laravel
- [✅] Set Up ERD
- [✅] Set Up Flow Chart
- [✅] Set Up Database Schema
- [] Set Up Admin Layout [2-3] days max [8] hours
- [] Set Up Customer Layout [2-3] days max [8] hours
- [] Authentication | admin | Staff
- [] Authentication | Google Auth | E-mail Confirmation for Customers | Gmail
- [] Manage Products | Feedback Table and Stars | count of orders | only the successful?
- [] Product Category
- [] Inventory
- [] Manage Coupons
- [] Manage Couriers
- [] Manage Users
- [] Manage Own Profile
- [] Manage Mode of Payments
- [] Display Products in Customer with Category
- [] Search Product
- [] Add To Cart | Manage Cart add - Remove
- [] Checkout Forms | Coupons applied | Customer address | Phone Number | courier applied | Total | applied all coupons | Delivery Fee(s)
- [] Cancel Orders | Automatic the product will be back in Inventory | Records all transactions | cancels or success | Customers cant cancel the orders if it already approved and transfer or already pick up by the courier
- [] Order Returns with Note or Reason for return | Damages | Wrong Items | Failed to Deliver
- [] Product Feedback or Comments
- [] Customers Transaction History
- [] Manage Customer Profile
- [] Display Count of all customers By Month By Year in Graph
- [] Displaying Sales using Graph | Successful products | Cancel Products by Month By Year
- [] Display Overall Profit from old prices to new prices | records prices in orders|cancel or successful
- [] Display Overall courier profit | display graphs diff courier profits by month by year
- [] Optional | the product will be display in the customer if he/she search related items into it using storing every research products with user_id in the next time he opens it it will display all related items in the index or home of products if hes have no records it will display default most ordered products
-




## 🛠️ Tools I'm Using
- Laravel 12
- Inertia
- react
- tailwind 
- Bootstrap
- Mysql

### ✅ Phase 1: Installing

- [✅] installing all needed [laravel,inertia,react]
- [✅] understanding tailwind css diff than bootstrap
- [✅] tailwind / Bootstrap
- [✅] Routes using Inertia


- command needed
- laravel new "name of app"
- cd name of app
- npm i react react-dom
- npm install --save-dev @vitejs/plugin-react
- code .
- composer require inertiajs/inertia-laravel
- then change the resources/welcome.blade.php into app.blade.php
- go to inertia js installation server-side then copy @vite(resoureces/js/app.js) @inertiaHead @inertia inside in the body tag
- php artisan inertia:middleware
- by following the inertia SSR copy the middleware provided then paste it inside the bootstrap/app.php in the middleware section
- server side is done
- Go in the client side then follow the steps there
- npm install @inertiajs/react
- then copy everything and paste it in the app.js
- then change the app.js into app.jsx
- modify the vite.config.js
- change the file extension there of app.js into app.jsx
- then add the vite plugin that you already install by importing import react from '@vitejs/plugin-react'
- then put the react() in the bottom
- then change also the file extension of app.js in the welcome.blade.php that you've already change into app.jsx then also add in the upper @viteReactRefresh
- then add Pages folder inside the resources/js/Pages
- in the routes change the view into inertia coz view is for blade

- then install tailwind css then go to tailwind css installation then find the framework guid choose laravel then follow all the instruction there
- then go back in the app.jsx then add your tailwind css there using import '../css/app.css'
- then creating an alias for folder inside the vite.config.js
- use the resolve {
    alias : {
        "@" : "/resources/js"
    }
}

- Note use two terminal by using php artisan serve and npm run dev


## 🧠 Notes & Learnings
-- Created 2 diff Layouts Admin | Customer
-- 2 different Css Frameworks Admin-bootstrap Customer-Tailwind
-- 2 diff middleware for admin and customer
- by using diff layouts and css library to avoid conflict i separated it, then i use two HandleInertia request to shared diff data from admin and customer
- to make the code clean i use two diff routes for admin and customer
# Day 2
- Set up ERD, Flowchart, Table Structures and Model
- by setting up all the Model it must be a Singular and PascalCase then the laravel will make that plural when it comes in migrations