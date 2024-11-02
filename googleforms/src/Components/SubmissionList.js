import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SubmissionList = () => {
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSubmissions = async () => {
            setLoading(true);
            try {
                // Change to axios.get to fetch submissions
                const response = await axios.get('http://localhost:5001/api/submissions');
                setSubmissions(response.data); // Set the fetched data to submissions state
            } catch (error) {
                // Handle errors appropriately
                setError(error.response ? error.response.data : "Error fetching submissions.");
                console.error("Error fetching submissions:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchSubmissions();
    }, []);

    return (
        <div className="submission-list" style={{ height: '20%', border: '2px solid black' }}>
            <h2 style={{ paddingLeft: '45%', color: 'blue' }}>Submitted Forms</h2> 
            <h1 style={{ color: 'darkblue' }}>Feel free to create one more</h1>
            {loading && <p>Loading submissions...</p>}
            {error && <p className="error-message">{error}</p>}
            {submissions.length === 0 && !loading && !error ? (
                <p>No submissions yet.</p>
            ) : (
                submissions.map((submission) => (
                    <div key={submission.id || submission.name}>
                        <h3>Submission</h3>
                        <pre>{JSON.stringify(submission, null, 2)}</pre>
                    </div>
                ))
            )}
        </div>
    );
};

export default SubmissionList;



