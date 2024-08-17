// netlify/functions/protect-content.js
const fetch = require('node-fetch');

exports.handler = async (event) => {
    const token = event.headers.authorization;

    // Verify the token (example using Netlify Identity)
    const response = await fetch('https://<YOUR_SITE>.netlify.app/.netlify/identity/user', {
        headers: { Authorization: `Bearer ${token}` }
    });

    if (!response.ok) {
        return {
            statusCode: 401,
            body: "Unauthorized"
        };
    }

    // Return the protected content if authorized
    return {
        statusCode: 200,
        body: JSON.stringify({ content: "Protected content goes here." })
    };
};
