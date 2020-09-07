// var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
// var fs = require('fs');

// var visualRecognition = new VisualRecognitionV3 ({
//   version: '2018-03-19', iam_apikey: 'm2vwzXnVMTucMDkFwxowYt10C0LtKqQ1pi8XR-ZW6WCJ'
// });

// var url= 'https://www.agrolink.com.br/upload/problemas/Nezara_viridula102.jpg';

// var params = {
//   url: url,
// };

// visualRecognition.classify (params, function (err, response) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(JSON.stringify(response, null, 2))
//   }
// });

const fs = require('fs');
const VisualRecognitionV3 = require('ibm-watson/visual-recognition/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const visualRecognition = new VisualRecognitionV3({
  version: '2018-03-19',
  authenticator: new IamAuthenticator({
    apikey: 'm2vwzXnVMTucMDkFwxowYt10C0LtKqQ1pi8XR-ZW6WCJ',
  }),
  url: 'https://api.us-south.visual-recognition.watson.cloud.ibm.com/instances/bc1fc5df-61b7-4b7a-ac3e-2edd271568fe',
});

const classifyParams = {
  imagesFile: fs.createReadStream('./arvore.jpg'),
  owners: ['me'],
  threshold: 0.6,
};

visualRecognition.classify(classifyParams)
  .then(response => {
    const classifiedImages = response.result;
    console.log(JSON.stringify(classifiedImages, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  });