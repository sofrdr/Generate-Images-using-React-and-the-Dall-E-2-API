import { useState } from 'react'
import { Configuration, OpenAIApi } from "openai"

import './App.css'



function App() {

  const [prompt, setPrompt] = useState("");
  const [img, setImg] = useState("");
  
  const configuration = new Configuration({
    apiKey: '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'
  })
  const openai = new OpenAIApi(configuration)

  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: '512x512'
    });

    setImg(res.data.data[0].url)
  }
  
  return(
    <div className='app-main'>
      <>
        <h1>Generate an Image using Open AI API</h1>

        <textarea
        className='app-input'
        placeholder="Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh.."
        onChange={(e) => setPrompt(e.target.value)}
        rows='10'
        cols='40'
        ></textarea>

        <button onClick={generateImage}>Generate an image</button>
        {img ? <img className='app-img' src={img} alt='image'/> : <></>}
      </>
    </div>

  )

 
}

export default App
