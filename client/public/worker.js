console.log("Service Worker Loaded...");

self.addEventListener("push", (e) => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
    body: "Welcome to Shifty Planner",
    icon: "./shiftyLogo3.png",
  });
  console.log(self.registration.showNotification(data.title.body));
});
