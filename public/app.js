// app.js

document.getElementById('footprint-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    // 1. Gather user data from the form
    const transport = document.getElementById('transport').value;
    const energy = document.getElementById('energy').value;
    const diet = document.getElementById('diet').value;

    // 2. UI Updates (Accessibility & UX)
    const resultsSection = document.getElementById('results-section');
    const loadingSpinner = document.getElementById('loading-spinner');
    const insightsDiv = document.getElementById('ai-insights');

    // Reveal the results section and show the loading state
    resultsSection.classList.remove('hidden');
    loadingSpinner.classList.remove('hidden');
    insightsDiv.innerHTML = '';

    try {
        // 3. Securely call our backend API
        const response = await fetch('http://localhost:3000/api/insights', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({ transport, energy, diet })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        
        // 4. Display the AI-generated results
        loadingSpinner.classList.add('hidden');
        
        // Formatting the response securely (avoiding direct innerHTML injection of raw markdown if possible, 
        // but for simplicity we will render the formatted text provided by our backend)
        insightsDiv.innerHTML = data.insights;
        
    } catch (error) {
        loadingSpinner.classList.add('hidden');
        insightsDiv.innerHTML = `<p style="color: #d32f2f; font-weight: bold;">Error: Could not generate insights. Please ensure the local server is running.</p>`;
        console.error('Error fetching insights:', error);
    }
});