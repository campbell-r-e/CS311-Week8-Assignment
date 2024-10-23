
import { useEffect, useState } from "react";


// below from online resource
type Books = {
  title: string;
  Author: string;
  Publisher: string;
  Id:string;
  pic:string;


 
};




  // 
  
export default function Home() {
  const [Books, setBooks] = useState<Books[]>([]);
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null); // from online resource
  
  // above from online resource example 
  useEffect(() => {
    fetch('/data.json') //from online
      .then((response) => response.json()) //from online 
      .then((data) => setBooks(data['Books'])) // from online example
   
    
   
  }, []);
  
  
  function buttons(BooksId:string){
    setSelectedBookId(BooksId);
   
   

    
  }
  
  return (
   
    <div>
      <h1 id="heading">Books List</h1>
     <ul>
        {Books.map((Books) => (
          <li key={Books.Id} >
            <div>
            <ol>
             <li id = "List0">{Books.title}</li>
             {selectedBookId === Books.Id && <li id ="List1">Author:{Books.Author}</li>} 
             {selectedBookId === Books.Id && <li id ="List2">Publisher:{Books.Publisher}</li>} 
             
             {selectedBookId === Books.Id && <img src={Books.pic} alt="Girl in a jacket" width="300" height="300"></img>} 
            </ol>
            <button id="button" onClick={() => buttons(Books.Id)}>
              Click for more info about the book.
    </button> 
            
            </div> 

            <br></br>
           
          
          
           
          </li>
         
        ))}
      </ul>

    </div>
    // modifed from example online 
    // button modified from online resource
    // {selectedBookId === Books.Id && <li>{Books.Author}</li>}  from online resource
  );
}
