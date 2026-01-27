#!/bin/bash
# Quick Setup Script for Ranju Portfolio React

echo "🚀 Advanced React Portfolio - Quick Setup"
echo "========================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ npm version: $(npm -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"
echo ""

# Create .env.local from .env.example
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local..."
    cp .env.example .env.local
    echo "✅ .env.local created (you can customize it later)"
else
    echo "✅ .env.local already exists"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "📚 Available commands:"
echo "  npm run dev    - Start development server (http://localhost:3000)"
echo "  npm run build  - Build for production"
echo "  npm start      - Start production server"
echo "  npm run lint   - Run ESLint"
echo ""
echo "🚀 To get started, run: npm run dev"
echo ""
echo "📖 Check out SETUP_GUIDE.md for more information"
echo ""
