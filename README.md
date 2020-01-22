# spleeter_saved_models
savedModels for [spleeter](https://github.com/deezer/spleeter) (tf and tfjs)

## Convert an existing TensorFlow model to the TensorFlow.js web format
If you want to convert the savedModel to tfjs anyways, you can follow the official guide [here](https://www.tensorflow.org/js/tutorials/conversion/import_saved_model)
you should look at the SavedModel example

## Run a TensorFlow SavedModel in Node.js directly without conversion
It is now possible to run a tf SavedModel in nodejs without conversion, see related blog post [here](https://blog.tensorflow.org/2020/01/run-tensorflow-savedmodel-in-nodejs-directly-without-conversion.html).
See [inference_saved_model.js](https://github.com/shoegazerstella/spleeter_saved_models/blob/master/inference_saved_model.js) for a working example of model load.

```
node inference_saved_model.js
```

```
modelInfo [ { tags: [ 'serve' ], signatureDefs: { serving_default: [Object] } } ]
tags [ 'serve' ]
signatureDefs {
  serving_default: {
    inputs: {
      audio_id: [Object],
      mix_spectrogram: [Object],
      mix_stft: [Object],
      waveform: [Object]
    },
    outputs: { accompaniment: [Object], audio_id: [Object], vocals: [Object] }
  }
}
```

#### TODOs:

* add all available spleeter models
