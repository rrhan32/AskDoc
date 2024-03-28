const express = require('express');
const multer = require('multer');
const path = require('path'); // Optional, for handling file paths
const cors=require("cors");
const fs = require('fs');
const pdfParse = require('pdf-parse');

const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default port
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors());
app.use(express.json());

// Configure Multer (file upload middleware)
const storage = multer.diskStorage({
  destination: './uploads', // Change this path if needed
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Generate unique filenames
  },
});

const upload = multer({ storage });

// Upload route handler
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Handle the uploaded file here (e.g., store metadata, process the PDF)
    const uploadedFile = req.file;
    console.log(`Uploaded file: ${uploadedFile.filename}`);

    // You can access the uploaded file details like:
    // - uploadedFile.filename (generated unique filename)
    // - uploadedFile.originalname (original filename from client)
    // - uploadedFile.mimetype (e.g., application/pdf)
    // - uploadedFile.size (file size in bytes)

    // Replace with your actual logic for processing the PDF
    // (e.g., using external libraries or integrating with a service)
    

    // Read the uploaded file as a buffer
    const buffer = fs.readFileSync(uploadedFile.path);
    // Parse the PDF content using pdf-parse
    const parsedData = await pdfParse(buffer);
    // Access the extracted text (or other data based on the library)
    const textContent = parsedData.text;


    console.log(textContent);

    // ... (Handle the extracted text content, e.g., store in database)

    res.status(200).json({ message: 'File uploaded successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred during upload' });
  }
});
app.post('/question', async(req, res) => {
    try {
      const question = await req.body.text;
      console.log(question);
      res.status(200).json({ message: "Question added" });
    } catch (error) { // Catch more specific errors if possible
      console.error(error); // Use a descriptive variable name (e.g., processingError)
      res.status(500).json({ message: "An error occurred" }); // Provide a generic error message to the client
    }
  });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
