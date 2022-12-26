import React from 'react'
import './style.css'


const Form = () => {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText:"",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })
  const [allMemes, setAllMemes] = React.useState([])

  React.useEffect(() => {
    async function getMemes() {
    const res = await fetch("https://api.imgflip.com/get_memes")
    const data = await res.json()
    setAllMemes(data.data.memes)
  }
  getMemes()

  }, [])


  function getMemeImage() {
    //const allMemes = allMemes.data.memes
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }) )
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }
  return (
    <main>
      
      <div className='form' action="">
        
        <input className='form--input' 
        type="text" placeholder='Top text' 
        name='topText' 
        value={meme.topText}
        onChange={handleChange}/>
        <input className='form--input' type="text" placeholder='Bottom text' 
        name='bottomText' 
        value={meme.bottomText} 
        onChange={handleChange}/>
      </div>
        <button className='form--button' onClick={getMemeImage} >Get a new meme image</button>
        <div className='meme'>
          <img src={meme.randomImage} className='meme--image'/>
          <h2 className='meme--text-top'>{meme.topText}</h2>
          <h2 className='meme--text-bottom'>{meme.bottomText}</h2>
        </div>
    </main>
  )
}

export default Form