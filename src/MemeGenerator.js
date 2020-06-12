import React,{Component} from "react"

class MemeGenerator extends Component{
    constructor()
    {
        super()
        this.state={
            topText:"",
            bottomText:"",
            randomImg:"http://i.imgflip.com/1bij.jpg",
            allMemeImgs:[]
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response =>{
            const {memes}=response.data
           
            this.setState({ allMemeImgs:memes})
      
        })
    }
    handleChange(event){
  const {name,value}= event.target
  this.setState({
      [name]:value
  })
  }
  handleSubmit(event){
event.preventDefault()
const randmNum=Math.floor(Math.random() * this.state.allMemeImgs.length)
const randoMemeImg=this.state.allMemeImgs[randmNum].url
this.setState({
    randomImg:randoMemeImg
})

}
    render() 
    {
  return(
     <div>
         <form className="meme-form" onSubmit={this.handleSubmit}>
         <input type="" name="topText" placeholder="Top text" value={this.state.topText} onChange={this.handleChange}/>
         <input type="" name="bottomText" placeholder="Bottom text" value={this.state.bottomText} onChange={this.handleChange}/>


         <button>Gen</button>
         </form>
     <div className="meme">
         <img src={this.state.randomImg} alt=""  height="500" width="42"/>
         <h2 className="top">{this.state.topText}</h2>
  <h2 className="bottom">{this.state.bottomText}</h2>
     </div>
     
     
     </div>

  )
    }   
 
}
export default MemeGenerator




