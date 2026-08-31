// In-memory fallback database for when D1 is not bound (placeholder mode)
let mockSubmissions = [
  {
    id: 1,
    name: 'Budi Santoso',
    email: 'budi.santoso@gmail.com',
    category: 'Pertanyaan Umum',
    message: 'Halo, saya ingin menanyakan lebih detail mengenai layanan dan promo bulan ini. Terima kasih.',
    created_at: new Date(Date.now() - 3600000 * 2).toISOString()
  },
  {
    id: 2,
    name: 'Siti Rahma',
    email: 'siti.rahma@yahoo.com',
    category: 'Kemitraan',
    message: 'Tertarik untuk membuka kemitraan/franchise. Mohon dikirimkan proposal kerjasamanya.',
    created_at: new Date(Date.now() - 3600000 * 5).toISOString()
  }
];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    if (method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    const isAuthorized = (req) => {
      const authHeader = req.headers.get('Authorization');
      return authHeader === 'Bearer suanjaya-admin-token-9988';
    };

    try {
      // POST /api/submissions
      if (path === '/api/submissions' && method === 'POST') {
        const body = await request.json();
        const { name, email, category, message } = body;

        const valName = name || '';
        const valEmail = email || '';
        const valCategory = category || '';
        const valMessage = message || '';

        if (env.DB) {
          await env.DB.prepare(
            'INSERT INTO submissions (name, email, category, message) VALUES (?, ?, ?, ?)'
          )
          .bind(valName, valEmail, valCategory, valMessage)
          .run();
        } else {
          // Fallback to in-memory array
          mockSubmissions.unshift({
            id: mockSubmissions.length + 1,
            name: valName,
            email: valEmail,
            category: valCategory,
            message: valMessage,
            created_at: new Date().toISOString()
          });
        }

        return new Response(JSON.stringify({ success: true }), {
          status: 201,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        });
      }

      // POST /api/login
      if (path === '/api/login' && method === 'POST') {
        const body = await request.json();
        const { username, password } = body;

        if (username === 'SUANJAYA@stenku' && password === 'admin123') {
          return new Response(JSON.stringify({ success: true, token: 'suanjaya-admin-token-9988' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json', ...corsHeaders },
          });
        }

        return new Response(JSON.stringify({ error: 'Username atau password salah' }), {
          status: 401,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        });
      }

      // GET /api/submissions (Protected)
      if (path === '/api/submissions' && method === 'GET') {
        if (!isAuthorized(request)) {
          return new Response(JSON.stringify({ error: 'Unauthorized' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json', ...corsHeaders },
          });
        }

        let results = [];
        if (env.DB) {
          const dbRes = await env.DB.prepare(
            'SELECT * FROM submissions ORDER BY created_at DESC'
          ).all();
          results = dbRes.results || [];
        } else {
          results = mockSubmissions;
        }

        return new Response(JSON.stringify(results), {
          status: 200,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        });
      }

      // DELETE /api/submissions/:id (Protected)
      if (path.startsWith('/api/submissions/') && method === 'DELETE') {
        if (!isAuthorized(request)) {
          return new Response(JSON.stringify({ error: 'Unauthorized' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json', ...corsHeaders },
          });
        }

        const id = parseInt(path.split('/').pop(), 10);
        if (env.DB) {
          await env.DB.prepare('DELETE FROM submissions WHERE id = ?').bind(id).run();
        } else {
          mockSubmissions = mockSubmissions.filter(item => item.id !== id);
        }

        return new Response(JSON.stringify({ success: true }), {
          status: 200,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        });
      }

      // Serve static assets from Pages
      return env.ASSETS.fetch(request);

    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }
  }
};
