// const initState = {
//     title: "",
//     name: "",
//     stars: "",
//     price: "",
//     type : "",
//     image: "",
//   };





// const [formData, setFormdata] = useState(initState)
//   const {title,name, stars,price,type,image} = formData;
//   const handleSubmit = (e)=>{
// e.preventDefault();
// console.log(formData)
// fetch("http://localhost:8080/hair",{
//   method: "POST",
//   headers: {
//     "Content-type": "application/json"
//   },
//   body: JSON.stringify(formData)
// })
// setFormdata(initState)
//   }
//   const handleChange = (e)=>{
//    const { name, value } = e.target;
//    setFormdata({...formData, [name]:value});
//   }
//   return (
//     <>
  
// <div>
// <form onSubmit={handleSubmit}>
//   <label>Title</label> <br></br>
//   <input placeholder="title" name="title" value={title} onChange={handleChange}></input>
// <br></br>
//   <input placeholder="name" name='name' value={name} onChange={handleChange}></input>
//   <br></br>
//   <input placeholder="stars" name='stars' value={stars} onChange={handleChange}></input>
//   <br></br>
//   <input placeholder="price" name='price' value={price} onChange={handleChange}></input>
//   <br></br>
//   <input placeholder="type" name='type' value={type} onChange={handleChange}></input>
//   <br></br>
//   <input placeholder="Imgae url" name='image' value={image} onChange={handleChange}></input>
//   <br></br>
//   <input type="submit"></input>
// </form>
// </div>
//     </>
//   );