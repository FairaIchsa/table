import React, { useState, useEffect } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'


function Table(){
    const [currentPage, setCurrentPage] = useState("http://127.0.0.1:8000/api/")
    const [prevPage, setPrevPage] = useState(null)
    const [nextPage, setNextPage] = useState(null)
    const [notes, setNotes] = useState([])

    const [quantityFilter, setQuantityFilter] = useState(0)
    const [nameFilter, setNameFilter] = useState(0)
    const [distanceFilter, setDistanceFilter] = useState(0)

    const goLeft = () => {setCurrentPage(prevPage);}
    const goRight = () => {setCurrentPage(nextPage);}

    const ordQuantity = () => {
        if (quantityFilter !== 1){
            setCurrentPage("http://127.0.0.1:8000/api/?quantity-ord=asc")
            setQuantityFilter(1)
            setNameFilter(0)
            setDistanceFilter(0)
        }
        else{
            setCurrentPage("http://127.0.0.1:8000/api/?quantity-ord=desc")
            setQuantityFilter(-1)
        }
    }

    const ordName = () => {
        if (nameFilter !== 1){
            setCurrentPage("http://127.0.0.1:8000/api/?name-ord=asc")
            setQuantityFilter(0)
            setNameFilter(1)
            setDistanceFilter(0)
        }
        else{
            setCurrentPage("http://127.0.0.1:8000/api/?name-ord=desc")
            setNameFilter(-1)
        }
    }

    const ordDistance = () => {
        if (distanceFilter !== 1){
            setCurrentPage("http://127.0.0.1:8000/api/?distance-ord=asc")
            setQuantityFilter(0)
            setNameFilter(0)
            setDistanceFilter(1)
        }
        else{
            setCurrentPage("http://127.0.0.1:8000/api/?distance-ord=desc")
            setDistanceFilter(-1)
        }
    }

    useEffect(() => {
      axios({
        method: "GET",
        url: currentPage
      }).then(response => {
        setNotes(response.data.table)
        setPrevPage(response.data.previous)
        setNextPage(response.data.next)
      })
    }, [currentPage])

  return (
    <div className="App">
        <table className="table">
            <thead>
            <tr>
                <th onClick={ordName} scope="col">Название</th>
                <th scope="col">Дата</th>
                <th onClick={ordQuantity} scope="col">Количество</th>
                <th onClick={ordDistance} scope="col">Расстояние</th>
            </tr>
            </thead>
            <tbody>
            {notes.map(n => (
                <tr key={n.id}>
                <th scope="row">{n.name}</th>
                <td>{n.date}</td>
                <td>{n.quantity}</td>
                <td>{n.distance}</td>
                </tr>
            ))}
            </tbody>
        </table>
        <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button onClick={goLeft} type="button" className="btn btn-outline-dark">Left</button>
            <button onClick={goRight} type="button" className="btn btn-outline-dark">Right</button>
        </div>
    </div>
  );
}

export default Table
