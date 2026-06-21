const form = document.getElementById('footprint-form');
const resultsSection = document.getElementById('results-section');
const loadingSpinner = document.getElementById('loading-spinner');
const aiInsights = document.getElementById('ai-insights');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); 

    // Unhide the results section and show the loading spinner
    resultsSection.classList.remove('hidden');
    loadingSpinner.classList.remove('hidden');
    aiInsights.innerHTML = ''; // Clear out any previous tips

    // Grab the exact values from your HTML input fields
    const transport = document.getElementById('transport').value;
    const energy = document.getElementById('energy').value;
    const diet = document.getElementById('diet').value;

    try {
        // Fetch from Vercel securely
        const response = await fetch('/api/insights', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ transport, energy, diet }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Hide the spinner and show the Gemini HTML
        loadingSpinner.classList.add('hidden');
        aiInsights.innerHTML = data.insights;

    } catch (error) {
        console.error('Fetch Error:', error);
        loadingSpinner.classList.add('hidden');
        aiInsights.innerHTML = "<p style='color: red;'>Error: Could not connect to the server. Please try again.</p>";
    }
});
