const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

app.post('/save-donation', (req, res) => {
    console.log('Received data:', JSON.stringify(req.body, null, 2));
    
    // Handle both direct properties and nested structure
    const business = req.body.business || req.body.arguments?.business || 'Unknown Business';
    const items = req.body.items || req.body.arguments?.items || 'Unknown Items';
    const pickup_time = req.body.pickup_time || req.body.arguments?.pickup_time || 'Unknown Time';
    const pickup_location = req.body.pickup_location || req.body.arguments?.pickup_location || 'Unknown Location';
    const donation_status = req.body.donation_status || req.body.arguments?.donation_status || 'Unknown Status';
    
    // Convert items array to string if needed
    const itemsString = Array.isArray(items) ? items.join(', ') : items;
    
    const timestamp = new Date().toISOString();
    const log = `[${timestamp}] Business: ${business} | Items: ${itemsString} | Pickup: ${pickup_time} at ${pickup_location} | Status: ${donation_status}\n`;
    
    fs.appendFileSync('donations.txt', log, 'utf8');
    console.log('Donation logged:', log.trim());
    
    res.json({ 
        success: true, 
        message: 'Donation saved successfully!',
        business,
        items: itemsString,
        pickup_time,
        donation_status,
        pickup_location
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
    console.log('Donations will be saved to donations.txt');
});