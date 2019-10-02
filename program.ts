import StartUp from "./startUp";

let port = process.env.PORT || "3000";

StartUp.app.listen(port, function() {
  console.log(`Server running on:  http://localhost:${port}/`);
  console.log(`Ctrl+ click the link above to open`);
});
