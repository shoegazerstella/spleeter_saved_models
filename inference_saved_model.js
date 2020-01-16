//https://blog.tensorflow.org/2020/01/run-tensorflow-savedmodel-in-nodejs-directly-without-conversion.html

const tf = require('@tensorflow/tfjs-node');

path = './saved_models_py/2stems/'

tf.node.getMetaGraphsFromSavedModel(path)
    .then(modelInfo => {
        console.log('modelInfo', modelInfo)
        console.log('tags', modelInfo[0].tags)
        console.log('signatureDefs', modelInfo[0].signatureDefs)
    })
    .catch(error => {
      console.error(error.stack);
    });

// model load
//const model = await tf.node.loadSavedModel(path, [tag], signatureKey);

// prediction
//const output = model.predict(input);