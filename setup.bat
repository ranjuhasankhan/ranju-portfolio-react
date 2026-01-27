@echo off
REM Quick Setup Script for Ranju Portfolio React (Windows)

echo.
echo 🚀 Advanced React Portfolio - Quick Setup
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    echo Download from: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js version:
node -v
echo ✅ npm version:
npm -v
echo.

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo ✅ Dependencies installed successfully
echo.

REM Create .env.local from .env.example
if not exist .env.local (
    echo 📝 Creating .env.local...
    copy .env.example .env.local >nul
    echo ✅ .env.local created (you can customize it later)
) else (
    echo ✅ .env.local already exists
)

echo.
echo 🎉 Setup complete!
echo.
echo 📚 Available commands:
echo   npm run dev    - Start development server (http://localhost:3000)
echo   npm run build  - Build for production
echo   npm start      - Start production server
echo   npm run lint   - Run ESLint
echo.
echo 🚀 To get started, run: npm run dev
echo.
echo 📖 Check out SETUP_GUIDE.md for more information
echo.
pause
