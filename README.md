# spleeter_saved_models
saved models for [spleeter](https://github.com/deezer/spleeter) (tf and tfjs)

#### Model MetaGraph

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
