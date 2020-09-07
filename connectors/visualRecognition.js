var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var fs = require('fs');

var visualRecognition = new VisualRecognitionV3 ({
  version: '2018-03-19', iam_apikey: 'm2vwzXnVMTucMDkFwxowYt10C0LtKqQ1pi8XR-ZW6WCJ'
});

var url= 'https: //watson-developer-cloud.github.io/doc-tutorial-downloads/visual-recognition/640px-IBM_VGA_90X8941_on_PS55.jpg';

var params = {
  url: url,
};

visualRecognition.classify (params, function (err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.stringify(response, null, 2))
  }
});
