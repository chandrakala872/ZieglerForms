
import React, { useState } from 'react';
// import axios from 'axios';

const ExtendedForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        skills: [],
        experienceLevel: '',
        dateOfApplication: '',
        resume: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSkillsChange = (e) => {
        const { options } = e.target;
        const selectedSkills = [];
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                selectedSkills.push(options[i].value);
            }
        }
        setFormData({ ...formData, skills: selectedSkills });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, resume: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        try {
            const response = await axios.get('http://localhost:5001/api/submissions', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data.message); 
        } catch (error) {
            console.error('Error submitting form:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="tel" name="mobile" placeholder="Mobile Number" onChange={handleChange} required />
            <select name="skills" multiple onChange={handleSkillsChange} required>
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
              
            </select>
            <input type="text" name="experienceLevel" placeholder="Experience Level" onChange={handleChange} required />
            <input type="date" name="dateOfApplication" onChange={handleChange} required />
            <input type="file" name="resume" onChange={handleFileChange} required />
            <button type="submit">Submit</button>
        </form>
    );
};

export default ExtendedForm;


