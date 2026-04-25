const http = require('http');

const fetchUserData = async () => {
    return new Promise(resolve => {
        setTimeout(() => resolve({ username: 'AlmaStudent2026', theme: 'dark' }), 500);
    });
};

const server = http.createServer(async (req, res) => {
    if (req.url === '/') {
        const data = await fetchUserData();
        const html = `<!DOCTYPE html>
<html>
<head>
    <title>SSR Hydration Lab</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        .card {
            background: white;
            border-radius: 20px;
            padding: 40px;
            max-width: 500px;
            width: 100%;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        h1 { color: #333; font-size: 28px; margin-bottom: 10px; }
        .subtitle { color: #666; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #f0f0f0; }
        .profile {
            background: #f8f9fa;
            border-radius: 15px;
            padding: 25px;
            transition: all 0.3s ease;
        }
        .profile.loading { opacity: 0.6; }
        .info-row {
            display: flex;
            justify-content: space-between;
            padding: 12px 0;
            border-bottom: 1px solid #e9ecef;
        }
        .label { font-weight: 600; color: #555; }
        .value { color: #333; }
        button {
            width: 100%;
            padding: 12px;
            margin-top: 20px;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            background: #667eea;
            color: white;
        }
        button:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(102,126,234,0.4); }
        button:disabled { background: #ccc; cursor: not-allowed; }
        .badge {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
        }
        .badge.online { background: #d4edda; color: #155724; }
        .badge.offline { background: #f8d7da; color: #721c24; }
        .footer { margin-top: 20px; text-align: center; font-size: 12px; color: #999; }
    </style>
    <script>window.__STATE__ = ${JSON.stringify(data)};</script>
</head>
<body>
    <div class="card">
        <h1>Welcome back</h1>
        <div class="subtitle">SSR + Hydration Demo</div>
        <div id="profile" class="profile loading">
            <div class="info-row">
                <span class="label">Username</span>
                <span class="value" id="name">${data.username}</span>
            </div>
            <div class="info-row">
                <span class="label">Status</span>
                <span class="value"><span id="status" class="badge offline">Offline</span></span>
            </div>
            <div class="info-row">
                <span class="label">Theme</span>
                <span class="value">${data.theme === 'dark' ? 'Dark mode' : 'Light mode'}</span>
            </div>
            <button id="btn" disabled>Connecting...</button>
        </div>
        <div class="footer">Server-rendered HTML → Client hydration → Interactive</div>
    </div>
    <script src="/client.js"></script>
</body>
</html>`;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
    } else if (req.url === '/client.js') {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        res.end(`
            var state = window.__STATE__ || {};
            var profile = document.getElementById('profile');
            var nameSpan = document.getElementById('name');
            var statusSpan = document.getElementById('status');
            var btn = document.getElementById('btn');
            
            if (nameSpan && state.username) nameSpan.textContent = state.username;
            
            var online = false;
            btn.disabled = false;
            btn.textContent = 'Connect';
            
            btn.onclick = function() {
                online = !online;
                if (online) {
                    statusSpan.textContent = 'Online';
                    statusSpan.className = 'badge online';
                    btn.textContent = 'Disconnect';
                    btn.style.background = '#dc3545';
                } else {
                    statusSpan.textContent = 'Offline';
                    statusSpan.className = 'badge offline';
                    btn.textContent = 'Connect';
                    btn.style.background = '#667eea';
                }
                console.log('Status:', online ? 'Online' : 'Offline');
            };
            
            profile.classList.remove('loading');
            console.log('Hydration complete', state);
        `);
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(3000, () => console.log('Server: http://localhost:3000'));