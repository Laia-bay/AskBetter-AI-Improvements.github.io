const routes = {};

export function registerRoute(path, screen_name) {
  routes[path] = screen_name;
}

export function router() {
  const app = document.getElementById('app');
  const path = window.location.hash.slice(1) || '/main';



  const screen = routes[path];

  if (screen) {
    app.innerHTML = '';
    app.appendChild(screen());
  }
  
  else {
    app.innerHTML = '<h1>404 - Page Not Found</h1>';
  }
}

export function navigate(path) {
  window.location.hash = path;
}