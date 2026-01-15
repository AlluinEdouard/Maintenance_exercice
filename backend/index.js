import express from 'express';
import { join } from 'path';
const app = express();

// 1. Serve Static Assets (Frontend)
// 'front' is the folder where your index.html and scripts live
app.use(express.static('front')); 

// 2. Your API Routes (Backend)
app.get('/api/users', async (req, res) => {
    // Logic to query your MySQL container...
});

app.listen(3000, () => console.log('Server running on port 3000'));