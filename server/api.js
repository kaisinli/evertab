//-----------------------------natural language api POST----------------------------------------

// app.post('/api/text', (req, res, next) => {
//     // The text to analyze
//     console.log('REQ.BODY.CONTENT ==========', req.body.content)
//     const text = req.body.content;
//     // Detects the sentiment of the text
//     return language.detectSentiment(text)
//         .then((results) => {
//             const document = language.document({ content: text });
//             document.detectEntities(text)
//                 .then((result) => {
//                     console.log('ENTITIES RESULT:', result[1].entities)
//                     const entities = result[1].entities;
//                     const sentiment = results[0]
//                     res.send({ sentiment: sentiment, entities: entities })
//                 })
//         })
//         // res.send(sentiment)
//         .catch((err) => {
//             console.error('ERROR:', err);
//         });
// })