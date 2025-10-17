const fs = require('fs');
const path = require('path');

const distDir = path.join(process.cwd(), '.next');

function injectScript(filePath) {
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('dashboard-console-capture.js')) {
    return;
  }
  
  const scriptTag = '<script src="/dashboard-console-capture.js"></script>';
  
  if (content.includes('</head>')) {
    content = content.replace('</head>', `${scriptTag}</head>`);
  } else if (content.includes('<head>')) {
    content = content.replace('<head>', `<head>${scriptTag}`);
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
}

function processDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.html')) {
      injectScript(filePath);
    }
  });
}

processDirectory(distDir);
console.log('Console capture script injection complete');