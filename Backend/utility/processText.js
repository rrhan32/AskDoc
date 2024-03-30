async function processText(text, question) {
  // Perform tokenization or other NLP tasks using chosen library (e.g., spacy)
  const nlp = await spacy.load('en_core_web_sm'); // Adjust model name if needed
  const doc = nlp(text);

  // Use Langchain LLMChain for question answering
  const llmChain = new LLMChain(new TextPrompt(question));
  const answer = await llmChain.run(doc.text);

  return answer;
}

// Example usage:
const extractedText = text;
const question = question;

processText(extractedText, question)
  .then(answer => {
    return answer; // Or use the answer in your API response
  })
  .catch(error => {
    console.error(error);
    return error;
    // Handle errors appropriately
  });
