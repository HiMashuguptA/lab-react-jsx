import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  let data = imageData()
  // data.forEach((e)=>{
  //   console.log(e.img)
  // })
  return(
    <>
    <h1 className='Heading'> Kalvium Elephant </h1>
    <div className='parent_div'>
      {/* <img src={data[0].img} alt="" className='image' id='image'/>
      <img src={data[0].img} alt="" className='image' id='image'/>
      <img src={data[0].img} alt="" className='image' id='image'/>
      <img src={data[0].img} alt="" className='image' id='image'/> */}
      {
        data.map(elem => {
          return(
            <img src={elem.img} className='image' />
          )
        })
      }
    </div>
    
    </>
  )
}

export default App;
