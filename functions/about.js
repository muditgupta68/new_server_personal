const connectToDatabase = require('../../src/db/mongoose');
const AboutController = require('../../src/controllers/aboutController');

exports.handler = async function(event, context) {
  try {
    await connectToDatabase(); // Ensure database connection is established

    if (event.httpMethod === 'GET') {
      return await AboutController.getAbout(event, context);
    } else if (event.httpMethod === 'POST') {
      return await AboutController.addAbout(event, context);
    } else {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: 'Method Not Allowed' }),
        headers: { 'Content-Type': 'application/json' },
      };
    }
  } catch (error) {
    console.error('Error handling About request:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
      headers: { 'Content-Type': 'application/json' },
    };
  }
};
