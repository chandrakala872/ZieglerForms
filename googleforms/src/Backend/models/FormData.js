const formData = {
    dateOfApplication: "2024-11-01",  
    experienceLevel: "Intermediate",  
    mobile: "1234567890",             
    email: "example@example.com",      
    name: "John Doe",                 
    skills: ["JavaScript", "React"]     
};


axios('http://localhost:5001/api/submit', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
})
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
})
.then(data => console.log("Response from server:", data))
.catch(error => console.error("Error submitting form:", error));

