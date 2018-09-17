// Step 1 - Load libraries
const path = require('path');
const express = require('express');

// Step 2 - Create instance of Express
const app = express();

// Step 3 - Declare rules
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'media')));
app.use((req, resp) => {
    //resp.redirect('/404.html');       # this will not create an error
    resp.status(404);
    resp.sendfile(path.join(__dirname, 'public', '404.html'));
});

// Step 4 - assign port and Start Server
const PORT = parseInt(process.argv[2]) || parseInt(process.env.APP_PORT) || 3000;
app.listen(PORT, () => {
    console.info(`App started on port ${PORT} at ${new Date()}`);
});

// export APP_PORT="8080"  # to set env variable
// unset APP_PORT          # to remove env variable
