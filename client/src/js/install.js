const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  console.log('beforeinstallprompt event fired');
  event.preventDefault();
  deferredPrompt = event;
  butInstall.style.visibility = 'visible';
});

butInstall.addEventListener('click', async () => {
  console.log('Install button clicked');
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    deferredPrompt = null;
    butInstall.style.visibility = 'hidden';
  }
});

window.addEventListener('appinstalled', (event) => {
  console.log('PWA was installed');
  deferredPrompt = null;
});
