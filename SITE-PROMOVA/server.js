import app from './api/index.js';

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Express API Server running on port ${PORT}`);
});
