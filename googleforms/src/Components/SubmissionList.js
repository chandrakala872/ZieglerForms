import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SubmissionList.css'; // Import your CSS file for styles

const SubmissionList = () => {
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSubmissions = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:5001/api/submissions');
                setSubmissions(response.data);
            } catch (error) {
                setError(error.response ? error.response.data : "");
                console.error("", error);
            } finally {
                setLoading(false);
            }
        };

        fetchSubmissions();
    }, []);

    const downloadResponses = () => {
        const blob = new Blob([JSON.stringify(submissions, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'submissions.json');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="submission-list" style={{ height: 'auto', padding: '20px' }}>
            <h2 style={{ textAlign: 'center', color: 'blue' }}>Submitted Forms</h2>
            <h1 style={{ textAlign: 'center', color: 'darkblue' }}>Feel free to create one more</h1>
            <div style={{ textAlign: 'center', margin: '20px 0' }}>
                <p>Total Responses: {submissions.length}</p>
                <button onClick={downloadResponses} className="download-button">
                    Download Responses
                </button>
            </div>
            {loading && <p>Loading submissions...</p>}
            {error && <p className="error-message">{error}</p>}
            {submissions.length === 0 && !loading && !error ? (
                <p>No submissions yet.</p>
            ) : (
                <div className="submission-container">
                    {submissions.map((submission, index) => (
                        <div key={submission.id || index} className="submission-item">
                            <h3>Submission {index + 1}</h3>
                            <pre>{JSON.stringify(submission, null, 2)}</pre>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SubmissionList;
