import React,{ Component } from "react";import "./Books.css";
import { BookDisplay } from "./BookDisplay";


 export default class Books extends Component{
    constructor(props){
        super(props);
        this.state = {
            books: [
                {
                    id: 1,
                    title: "Domain Driven Design",
                    author: "Eric Evans",
                    isbn: "978-0321125217"
                },
                {
                    id: 2,
                    title: "Accelerate",
                    author: "Nicole Forsgren",
                    isbn: "978-1942788331" 
                },
                {
                    id: 3,
                    title: "Book 3",
                    author: "Author three",
                    isbn: "978-1942788331" 
                },
                {
                    id: 4,
                    title: "Book 4",
                    author: "Author four",
                    isbn: "978-1942788331" 
                },
                {
                    id: 5,
                    title: "Book 5",
                    author: "Author five",
                    isbn: "978-1942788331" 
                },
                {
                    id: 6,
                    title: "Book 6",
                    author: "Author six",
                    isbn: "978-1942788331" 
                },
                {
                    id: 7,
                    title: "Book 7",
                    author: "Author 7",
                    isbn: "978-1942788331" 
                },
                {
                    id: 8,
                    title: "Book 8",
                    author: "Author 8",
                    isbn: "978-1942788331" 
                },

            ]
        };
    };
    render(){
    return (
        <div className = "Books">
            <div className= "lander">
              <BookDisplay books={this.state.books}/>
            </div>
        </div>
    );
    }
    
    
    }


    
    