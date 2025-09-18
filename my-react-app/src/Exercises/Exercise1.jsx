import './App.css'

function Exercise1 () {
  //const hora = new Date().getHours();
  const img1 = "https://images.pexels.com/photos/2607554/pexels-photo-2607554.jpeg";
  const img2 = "https://images.pexels.com/photos/2549941/pexels-photo-2549941.jpeg";
  const img3 = "https://images.pexels.com/photos/8086079/pexels-photo-8086079.jpeg";

     return (
    <>
    <div className='container'>
      <h1>Pexels Images</h1>
      <img className="image" src={img1}/>
      <img className="image" src={img2}/>
      <img className="image" src={img3}/>
    </div>
    </>
  )
}

export default Exercise1