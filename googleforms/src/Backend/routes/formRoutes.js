const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();


router.use(bodyParser.json());


let submissions = [];


router.post('/submit', (req, res) => {
    const formData = req.body; 
    console.log('Received data:', formData); 

   
    if (!formData || Object.keys(formData).length === 0) {
        return res.status(400).json({ message: 'No data received' });
    }

    
    submissions.push(formData); 

    
    res.status(200).json({
        message: 'Data received successfully',
        data: formData 
    });
});


router.get('/submissions', (req, res) => {
   
    res.status(200).json({
        message: 'Fetched submissions successfully',
        data: submissions 
    });
});

module.exports = router; 




