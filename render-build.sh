#!/bin/bash

# Render Build Script for HealthX

echo "🚀 Starting HealthX build process..."

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd backend && npm install && cd ..

# Install frontend dependencies  
echo "📦 Installing frontend dependencies..."
cd frontend && npm install && cd ..

# Install admin dependencies
echo "📦 Installing admin dependencies..."
cd admin && npm install && cd ..

# Build frontend
echo "🏗️ Building frontend..."
cd frontend && npm run build && cd ..

# Build admin
echo "🏗️ Building admin..."
cd admin && npm run build && cd ..

echo "✅ Build completed successfully!"
echo "📁 Frontend built to: dist/frontend/"
echo "📁 Admin built to: dist/admin/"
