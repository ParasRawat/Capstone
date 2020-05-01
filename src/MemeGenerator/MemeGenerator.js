
import React from 'react'

class MemeGenerator extends React.Component{

 constructor(){
   super()
   this.state={
     topText:"",
     bottomText:"",
     randomImage:"http://i.imgflip.com/1bij.jpg",
     allMemeImages:[]
   }

 this.handleChange= this.handleChange.bind(this)

 }

 handleChange(event){

   this.setState({ [event.target.name]: event.target.value })

 }

 handleClick =(event)=>{

   event.preventDefault()
   const num = Math.floor(Math.random()*this.state.allMemeImages.length);
  console.log(num);
   this.setState({randomImage:this.state.allMemeImages[num].url})
 }

 componentDidMount(){

   console.log("mount***************************************");
   fetch("https://api.imgflip.com/get_memes")
   .then(response=> response.json())
   .then(response=>{

     const {memes} = response.data;

     this.setState({allMemeImages:memes})

   })
 }
  render(){

    return (

      <div>

        <form className="meme-form" onSubmit={this.handleClick}>

          <input type="text" name="topText" placeholder="Top Text" value={this.state.topText} onChange={this.handleChange}/>
          <input type="text" name="bottomText" placeholder="Bottom Text" value={this.state.bottomText} onChange={this.handleChange}/>
          <button>Generate</button>

        </form>

        <div className="meme">
        <img src={this.state.randomImage}/>
        <h2 className="top">
        {this.state.topText}
        </h2>
        <h2 className="bottom">
          {this.state.bottomText}
        </h2>
        </div>
       </div>
    )
  }
}

export {MemeGenerator}
