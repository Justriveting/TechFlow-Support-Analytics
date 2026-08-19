# 📊 Product Information Quality Dashboard

A React and TypeScript dashboard designed to monitor product catalog completeness, identify information-quality gaps, and surface products that require data enrichment.

The dashboard analyzes product records across multiple categories and converts product information scores into clear, actionable metrics for business users.

## 🎯 Business Problem

Incomplete or inconsistent product information can affect customer experience, catalog accuracy, and operational efficiency.

Manually reviewing individual product records makes it difficult to quickly identify which items are missing important information.

This dashboard provides a centralized view of product information quality so users can identify gaps, filter product records, and prioritize products that require enrichment.

## 💡 Approach

The application analyzes product records and calculates key catalog-quality metrics, including:

* Total number of products
* Number of electronics products
* Number of grocery products
* Average product information score
* Number of products requiring enrichment

Products with an **information score below 2** are automatically flagged so they can be prioritized for review.

Users can also filter the product catalog by category to focus on specific groups of products.

## ✨ Key Features

* Product information quality monitoring
* Automatic identification of low-information products
* Category filtering for electronics and grocery products
* Average information-score calculation
* Summary metric cards
* Dedicated flagged-products view
* Reusable dashboard and table components
* Responsive user interface

## 🛠️ Technologies

* TypeScript
* React
* Vite
* Tailwind CSS
* shadcn/ui
* Lucide React
* React Hooks
* Git & GitHub

## ⚙️ How It Works

1. Product records are loaded into the application.
2. The dashboard calculates catalog-level metrics from the product data.
3. Products are grouped and counted by category.
4. An average information-quality score is calculated.
5. Products with an information score below 2 are automatically flagged.
6. Users can filter the catalog by product category.
7. Product tables display both the complete catalog and products requiring enrichment.

## 📊 Business Value

The dashboard demonstrates how a business can turn product-level data into actionable quality insights.

By automatically surfacing incomplete product records, teams can more quickly identify catalog gaps, prioritize enrichment work, and improve the completeness of product information.

## 🧩 Technical Highlights

* Type-safe development with TypeScript
* React state management with `useState`
* Memoized calculations and filtering with `useMemo`
* Reusable React components
* Conditional product filtering
* Programmatic calculation of dashboard metrics
* Automated flagging based on information-score thresholds
* Responsive dashboard layout

## 📁 Project Structure

* `src/pages/` — main application pages
* `src/components/` — reusable dashboard and UI components
* `src/data/` — product dataset
* `src/hooks/` — custom React hooks
* `src/lib/` — supporting utilities
* `src/tests/` — application tests
* `public/` — static assets

## 🚀 Skills Demonstrated

* React application development
* TypeScript
* Front-end data processing
* Dashboard development
* Business-data visualization
* Component-based application architecture
* Data filtering and aggregation
* Translating business requirements into a functional user interface

## 👩🏾‍💻 Project Contribution

I developed and customized this dashboard to transform product information data into an accessible business-facing interface. My work included implementing product-quality metrics, category filtering, flagged-product logic, dashboard presentation, and the overall user experience.

## 📌 Project Context

Developed as part of my hands-on work in building technology solutions that translate business data into practical, actionable insights.



