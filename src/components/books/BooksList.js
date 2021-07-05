import Book from './Book';
import './BooksList.css';
import { BooksContext } from '../../context/BooksContext';
import { useContext, useState } from 'react';

const BooksList=()=> {
    const {books} = useContext(BooksContext)
    const [searchTerm, setSearchTerm] = useState("")
    return (
        <div className="anime-list">
            <div className="fillter-box">
                <div className="search-box">
                    <form action="madry">
                        <input type="text" placeholder="...بحث" name="search" onChange={event => {setSearchTerm(event.target.value)}} />
                        
                    </form>
                </div>
            </div>
            <div className="item">
                {
                
                    books.filter(val=>{
                        if(searchTerm==''){
                            return val
                        }else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        }
                    }).map(item => {
                        return <Book book={item}/>
                    }) 
                }
                
            </div>

        </div>

    );

}

export default BooksList;