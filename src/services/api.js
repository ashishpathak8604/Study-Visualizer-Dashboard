// src/api.js
const API_URL = 'https://studiesapi.tikuntech.com/mf2/studies';
const BEARER_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTc0NzEzMDA2MSwianRpIjoiOTg2MWFkMjgtNDNlMC00Y2QxLWFkNWQtNzhjNjgwOTQ0YzUzIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6InRlc3R1c2VyQGV4YW1wbGUuY29tIiwibmJmIjoxNzQ3MTMwMDYxLCJjc3JmIjoiMmZmNzllYjItNTdkNi00ZGE3LTk2ZTYtMWViMDE4ZTJkODZjIiwiZXhwIjoxNzQ5NzIyMDYxfQ.dS5Yw1MYpGtLKoCUjXsK5h5Rt8qsddX7WwINdkjkHm4';
export async function fetchStudies() {
    try {
        const response = await fetch(API_URL, {
            
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`, 
            'Content-Type': 'application/json',
          },
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        return data;
      } catch (err) {
        console.error('API error:', err);
        throw err;
      }
    }


