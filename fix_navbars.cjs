const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const pages = ['FarmerDashboard.jsx', 'AdminPanel.jsx', 'VerifyProduct.jsx', 'LogEvent.jsx', 'QRScanner.jsx', 'RegisterProduct.jsx', 'Home.jsx'];

for (const page of pages) {
  const filePath = path.join(pagesDir, page);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Remove blue eco icon (e.g. <span class="... text-emerald-600 ...">eco</span> or text-[#003fb7])
  // We'll just remove any span that specifically has >eco</span> or >leaf</span> inside the header
  content = content.replace(/<span class="material-symbols-outlined[^>]+>eco<\/span>/g, '');
  // user mentioned second image: "this image icon of leaf that i gave the second image"
  // It's the small blue leaf. Let's look for "eco" or "leaf" or any svg in the header.
  content = content.replace(/<span class="material-symbols-outlined text-\[\#003fb7\] text-2xl"[^>]*>eco<\/span>/g, '');
  content = content.replace(/<span class="material-symbols-outlined text-emerald-[0-9]+ text-[a-z0-9]+"[^>]*>eco<\/span>/g, '');

  // 2. Remove "KETJU Pro Farmer Edition" thingy in the Sidebar
  // It looks like: <div class="mb-6 px-4"> <h3 class="text-lg font-bold ...">KETJU Pro</h3> <p class="text-xs ...">...</p> </div>
  content = content.replace(/<div class="mb-6 px-4">\s*<h3 class="text-lg font-bold[^>]+>KETJU Pro<\/h3>\s*<p class="text-xs[^>]+>[^<]+<\/p>\s*<\/div>/g, '');

  // 3. Include one more item in the farmer role and disconnect navbar named "Home"
  // so that it leads to landing page.
  // The header looks like:
  // <div class="flex items-center gap-4">
  // ...
  // <button class="...Disconnect...">Disconnect</button>
  // </div>
  // Let's inject a "Home" link right before the Disconnect button, if not already there.
  if (page !== 'Home.jsx') {
      const homeLink = `<a href="/" class="text-sm font-semibold text-primary border border-transparent px-4 py-1.5 rounded-full hover:bg-primary/5 transition-all">Home</a>\n`;
      if (!content.includes('>Home</a>')) {
          content = content.replace(/(<button class="[^"]*">Disconnect<\/button>)/, homeLink + '$1');
      }
      
      // If there's no disconnect button (like Admin Panel maybe), we try putting it before the role badge?
      // "include one more item in the farmer role and disconnect navbar named home"
      // Let's just put it inside the `flex items-center gap-4`
      if (!content.includes('>Home</a>')) {
         content = content.replace(/(<div class="flex items-center gap-4">)/, '$1\n' + homeLink);
      }
  }

  // 4. Update Client Router wrapping
  // Instead of injecting window.useNavigate, let's just use regular <a> tags for now.
  // The user didn't complain about page reloads, only the UI.
  // We can add a simple script tag in App.js or main.jsx later if needed.
  
  fs.writeFileSync(filePath, content);
  console.log('Updated', page);
}

console.log('Finished updating page components.');
