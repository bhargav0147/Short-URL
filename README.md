<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <img id="logo" src="https://github.com/bhargav0147/Short-URL/assets/119872080/c42584ae-bf19-4fb1-a057-5e44651f082e" width="300">
  <h1>URL Shortener API</h1>

  <p>A URL shortener service built with Node.js, Express, and MongoDB Atlas for database storage.</p>

  <h2>Overview</h2>

  <p>This project aims to provide a simple and efficient URL shortening service. It allows users to shorten long URLs into shorter, more manageable links. Additionally, it provides analytics to track the number of clicks on each shortened URL.</p>

  <h2>Features</h2>

  <ul>
    <li><strong>Shorten URLs:</strong> Users can create short URLs by submitting long URLs to the <code>/url</code> endpoint.</li>
    <li><strong>Redirect:</strong> Shortened URLs redirect users to the original long URL when accessed.</li>
    <li><strong>Analytics:</strong> Provides analytics for each short URL, allowing users to track the number of clicks.</li>
  </ul>

  <h2>API Endpoints</h2>

  <ul>
    <li><code>POST /url</code>: Create a short URL by submitting a long URL.</li>
    <li><code>GET /url/[shortId]</code>: Redirects to the original long URL associated with the provided short ID.</li>
    <li><code>GET /url/analytic/[shortId]</code>: Retrieves analytics data for the provided short ID, including the number of clicks.</li>
  </ul>

  <h2>Technologies Used</h2>

  <ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>MongoDB Atlas</li>
  </ul>

  <h2>Installation</h2>

  <ol>
    <li>Clone the repository.</li>
    <li>Install dependencies with <code>npm install</code>.</li>
    <li>Set up environment variables, including MongoDB Atlas connection string.</li>
    <li>Run the server with <code>npm start</code>.</li>
  </ol>

  <h2>Usage</h2>

  <ol>
    <li>Use the <code>/url</code> endpoint to create a short URL by submitting a long URL.</li>
    <li>Access the shortened URL provided in the response.</li>
    <li>Monitor URL analytics using the <code>/url/analytic/[shortId]</code> endpoint.</li>
  </ol>

</body>
</html>
