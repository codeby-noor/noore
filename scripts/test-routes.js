import http from 'http';

const routes = [
  '/',
  '/shop',
  '/category/abayas',
  '/category/hijabs',
  '/product/classic-black-abaya',
  '/cart',
  '/wishlist',
  '/search?q=abaya',
  '/lookbook',
  '/about',
  '/size-guide',
  '/contact',
  '/checkout'
];

async function testRoute(route) {
  return new Promise((resolve) => {
    http.get('http://localhost:3000' + route, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        resolve({
          route,
          status: res.statusCode,
          hasRoot: data.includes('id="root"')
        });
      });
    }).on('error', (err) => resolve({ route, status: 500, error: err.message }));
  });
}

(async () => {
  console.log('--- Verifying NOORÉ Frontend Routes ---');
  let allPassed = true;
  for (const r of routes) {
    const res = await testRoute(r);
    console.log(`Route [${res.route}]: Status ${res.status} | Root: ${res.hasRoot}`);
    if (res.status !== 200 || !res.hasRoot) {
      allPassed = false;
    }
  }
  console.log('Result:', allPassed ? 'ALL ROUTES 200 OK' : 'SOME FAILED');
})();
