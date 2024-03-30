pp.post('/question', async(req, res) => {
    try {
      const question = await req.body.text;
      console.log(question);
      res.status(200).json({ message: "Question added" });
    } catch (error) { // Catch more specific errors if possible
      console.error(error); // Use a descriptive variable name (e.g., processingError)
      res.status(500).json({ message: "An error occurred" }); // Provide a generic error message to the client
    }
  });