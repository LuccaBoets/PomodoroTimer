function fetchWallpapers() {
  // Simulating fetching wallpapers from an API or database
  return wallpapers;
}

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

let aa = 0;

changeWallpaper();
// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock on page load
updateClock();

function changeWallpaper() {
  const wallpapers = fetchWallpapers();
  const randomWallpaperIndex = Math.floor(Math.random() * wallpapers.length);
  const randomWallpaper = wallpapers[randomWallpaperIndex];
  document.body.style.backgroundImage = `url(${randomWallpaper})`;
}