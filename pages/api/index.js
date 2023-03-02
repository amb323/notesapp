export default function handler(req, res) {
    console.log("hola soy la API")
    if (req.method === 'POST') {
        console.log("pepo is here")
      // Process a POST request
    } else {
      // Handle any other HTTP method
    }
  }