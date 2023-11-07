import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'


function App() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [list, setList] = useState([])
  const[counter,setCounter]=useState(0);
  const addToList = () => {
    setList((prevList) => [
      ...prevList,
      { id: counter, name: name, email:email, phone:phone },
    ]);
    setCounter(counter+1)
    setName('');
    setEmail('');setPhone('');
    console.log(list)
  }
  const deleteFromList = (id) => {
    setList(list.filter(it=> it.id !== id));
    console.log(list)
  }
  const handleEdit = (id, field, value) => {
    const updatedList = list.map((object) =>
      object.id === id ? { ...object, [field]: value } : object
    );
    setList(updatedList);
  };


  return (
    <>
    {console.log(list)}
      <form onSubmit={(e) => {e.preventDefault(); addToList();}}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input type="text" className="form-control" value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mb-5">Save</button>
      </form>

      <table className="table">
        <thead>
          <tr >
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>{
          list.map(
            (obj) => (
              <tr key={obj.id}>
                <th scope="row"><input
                    type="text"
                    value={obj.name}
                    onChange={(e) => handleEdit(obj.id, 'name', e.target.value)}
                  /></th>
                <td><input
                    type="text"
                    value={obj.email}
                    onChange={(e) => handleEdit(obj.id, 'email', e.target.value)}
                  /></td>
                <td><input
                    type="text"
                    value={obj.phone}
                    onChange={(e) => handleEdit(obj.id, 'phone', e.target.value)}
                  /></td>
                <td><button className="btn btn-primary" onClick={()=>deleteFromList(obj.id)}>Delete</button></td>
                <td><button className="btn btn-primary" onClick={()=>update(obj.id)}>Update</button></td>
              </tr>
            )
          )}
        </tbody>
      </table>
      

    </>
  )
}

export default App
