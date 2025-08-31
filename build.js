const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

console.log("🚀 Starting HealthX build process...");

function runCommand(command, cwd = process.cwd()) {
  try {
    console.log(`Running: ${command} in ${cwd}`);
    execSync(command, {
      cwd,
      stdio: "inherit",
      env: { ...process.env, NODE_ENV: "production" },
    });
  } catch (error) {
    console.error(`❌ Command failed: ${command}`);
    console.error(error.message);
    process.exit(1);
  }
}

function checkAndCreateDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`📁 Created directory: ${dirPath}`);
  }
}

// Create dist directories
console.log("📁 Creating build directories...");
checkAndCreateDir(path.join(__dirname, "dist"));
checkAndCreateDir(path.join(__dirname, "dist", "frontend"));
checkAndCreateDir(path.join(__dirname, "dist", "admin"));

// Install dependencies for all projects
console.log("📦 Installing backend dependencies...");
if (fs.existsSync(path.join(__dirname, "backend", "package.json"))) {
  runCommand("npm install", path.join(__dirname, "backend"));
}

console.log("📦 Installing frontend dependencies...");
if (fs.existsSync(path.join(__dirname, "frontend", "package.json"))) {
  runCommand("npm install", path.join(__dirname, "frontend"));
}

console.log("📦 Installing admin dependencies...");
if (fs.existsSync(path.join(__dirname, "admin", "package.json"))) {
  runCommand("npm install", path.join(__dirname, "admin"));
}

// Build frontend
console.log("🏗️ Building frontend...");
if (fs.existsSync(path.join(__dirname, "frontend", "package.json"))) {
  runCommand("npm run build", path.join(__dirname, "frontend"));
}

// Build admin
console.log("🏗️ Building admin...");
if (fs.existsSync(path.join(__dirname, "admin", "package.json"))) {
  runCommand("npm run build", path.join(__dirname, "admin"));
}

// Verify builds
console.log("🔍 Verifying builds...");
const frontendBuild = path.join(__dirname, "dist", "frontend", "index.html");
const adminBuild = path.join(__dirname, "dist", "admin", "index.html");

if (fs.existsSync(frontendBuild)) {
  console.log("✅ Frontend build successful");
} else {
  console.error("❌ Frontend build failed - index.html not found");
}

if (fs.existsSync(adminBuild)) {
  console.log("✅ Admin build successful");
} else {
  console.error("❌ Admin build failed - index.html not found");
}

console.log("✅ Build process completed!");
console.log("📁 Frontend: dist/frontend/");
console.log("📁 Admin: dist/admin/");
