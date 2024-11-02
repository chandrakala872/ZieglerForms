import React, { useState } from 'react';
import axios from 'axios';
import './QuestionForm.css';

const QuestionForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        text: '',
        skills: '',
        experience: [],
        file: null,
        sections: [],
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files[0] });
    };

    const handleSkillChange = (e) => {
        setFormData({ ...formData, skills: e.target.value });
    };

    const handleExperienceChange = (e) => {
        const { value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            experience: prevData.experience.includes(value)
                ? prevData.experience.filter((exp) => exp !== value)
                : [...prevData.experience, value],
        }));
    };

    const addSection = () => {
        setFormData((prevData) => ({
            ...prevData,
            sections: [...prevData.sections, { title: '', subsections: [] }],
        }));
    };

    const addSubSection = (index) => {
        const updatedSections = formData.sections.map((section, i) => {
            if (i === index) {
                return {
                    ...section,
                    subsections: [...section.subsections, { title: '' }],
                };
            }
            return section;
        });
        setFormData({ ...formData, sections: updatedSections });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5001/api/submissions', formData);
            alert(response.status === 200 ? 'Form submitted successfully!' : 'Failed to submit form');
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting form');
        }
    };

    return (
        <form className="question-form" onSubmit={handleSubmit}>
            <h1>Create Your Form</h1>

            <div className="form-group">
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
            </div>

            <div className="form-group">
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
            </div>

            <div className="form-group">
                <label>Mobile Number:</label>
                <input type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} required />
            </div>

            <div className="form-group">
                <label>Text Input:</label>
                <input type="text" name="text" value={formData.text} onChange={handleInputChange} required />
            </div>

            <div className="form-group">
                <label>Skills:</label>
                <div>
                    <input type="radio" value="Beginner" checked={formData.skills === 'Beginner'} onChange={handleSkillChange} /> Beginner
                    <input type="radio" value="Intermediate" checked={formData.skills === 'Intermediate'} onChange={handleSkillChange} /> Intermediate
                    <input type="radio" value="Advanced" checked={formData.skills === 'Advanced'} onChange={handleSkillChange} /> Advanced
                </div>
            </div>

            <div className="form-group">
                <label>Experience:</label>
                <div>
                {/* <input type="checkbox" value="fresher" onChange={handleExperienceChange} /> 1-2 years */}
                    <input type="checkbox" value="1-2 years" onChange={handleExperienceChange} /> 1-2 years
                    <input type="checkbox" value="3-5 years" onChange={handleExperienceChange} /> 3-5 years
                    <input type="checkbox" value="5+ years" onChange={handleExperienceChange} /> 5+ years
                </div>
            </div>

            <div className="form-group">
                <label>Choose File:</label>
                <input type="file" onChange={handleFileChange} required />
            </div>

            {formData.sections.map((section, index) => (
                <div key={index} className="section">
                    <h3>Section {index + 1}</h3>
                    <button type="button" onClick={() => addSubSection(index)}>Add Subsection</button>
                    {section.subsections.map((subsection, subIndex) => (
                        <div key={subIndex} className="subsection">
                            <label>Subsection {subIndex + 1}</label>
                            <input type="text" placeholder="Subsection title" />
                        </div>
                    ))}
                </div>
            ))}

            <button type="button" onClick={addSection} className="add-section">Add Section</button>
            <button type="submit" className="submit-button" style={{marginLeft:'100px'}}>Submit Form</button>
        </form>
    );
};

export default QuestionForm;






