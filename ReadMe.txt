This document describes the implemented functionalities based on the provided code snippets.

1.Getting Started : 
This project uses ReactJs for the frontend and nodeJs for the backend.

Fork or download the repository from my github account 
Link: 

cd AskDoc
npm install (this would install all the dependencies of the project)

Below is the directory structure:

AskDoc
--Fontend
--Backend

for Client Side:
cd Frontend
npm run dev   (--> this would start the server at port 5173)

for Server Side
cd Backend
node index.js (--> this would start the server at port 3000)

-> Upload the pdf from the 'upload pdf section'
-> Give the prompts from the input box at the below and press search option
-> The backend processes the text using several libraries like multer , pdf-parse , fs to read text from the text and provides the text as as argument to the processText function , which also takes the question from the user as an argument, which further processes the text through langchain.
-> The backend provides with the desired JSON response to the client side , which is then displayed along with the question.



