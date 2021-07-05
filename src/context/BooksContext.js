import {createContext,useState} from 'react'
import iq2Metropol from '../img/iq-2_metropol.png'
import geometryPuza from '../img/geometry_puza.png'
import math1MetropolK from '../img/math-1_metropol.png'
import math1MetropolSB from '../img/math-1-SB_metropol.png'
import math2MetropolK from '../img/math-2-K_metropol.png'

export const BooksContext = createContext({})

export const BooksProvider=(props)=>{
    const [books,setBooks] = useState([
        {title:"iq 2 SB metropol", img: iq2Metropol, link:"https://www.mediafire.com/file/x20e6mnx6eurpsh/iq_2_.pdf/file"},
        {title:"geometry puza", img: geometryPuza, link:"https://www.mediafire.com/file/vgx2vpqdmfn7wjw/geometry_puza.pdf/file"},
        {title:"math 1 K metropol", img: math1MetropolK, link:"https://www.mediafire.com/file/f5gaywhtpo60ir1/math-1_konu.pdf/file"},
        {title:"math 1 SB metropol", img: math1MetropolSB, link:"https://www.mediafire.com/file/ma9xmstcql2bxoa/math-1-SB_metropol.pdf/file"},
        {title:"math 2 K metropol", img:math2MetropolK, link:'https://www.mediafire.com/file/ws2xphyto6vx5sb/math-2-K_metropol.pdf/file',},
    ])
    return(
        <BooksContext.Provider value={{books,setBooks}}>
            {props.children}
        </BooksContext.Provider>
    );
}