function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');

  const timeString = `${hours}:${minutes}`;
  document.getElementById('clock').innerText = timeString;

  // Change background every half hour
  if ((minutes === '00' || minutes === '30') && aa === 0) {
    changeWallpaper();
    aa = 1;
  }

  if (minutes === '01' || minutes === '31') {
    aa = 0;
  }
}

aa = 0;

changeWallpaper();
// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock on page load
updateClock();

function changeWallpaper() {
  fetchWallpapers().then((wallpapers) => {
    const randomWallpaperIndex = Math.floor(Math.random() * wallpapers.length);
    const randomWallpaper = wallpapers[randomWallpaperIndex];
    document.body.style.backgroundImage = `url(${randomWallpaper})`;
  });
}

function fetchWallpapers() {
  const wallpaperFolder = 'Wallpaper';
  return fetch(wallpaperFolder)
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const links = doc.querySelectorAll('a');
      console.log(Array.from(links))
      const imageLinks = Array.from(links)
        .map((link) => link.getAttribute('href'))
        .filter((href) => /\.(jpe?g|png|gif)$/i.test(href));
      return imageLinks.map((link) => `${link}`);
    });
}
