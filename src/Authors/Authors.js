import React,{ Component } from "react";
import "./Authors.css";
import { AuthorDisplay } from "./AuthorDisplay";

export default class Authors extends Component{
constructor(props){
    super(props);
    this.state = {
        authors: [
            {
                fName: "FirstName1",
                lName: "lol"
            },
            {
                fName: "FirstName2",
                lName: "lol"
            },
            {
                fName: "FirstName3",
                lName: "lolol"
            },
            {
                fName: "FirstName4",
                lName: "lololol"
            },
            {
                fName: "FirstName5",
                lName: "lololol0l"
            },
            {
                fName: "FirstName6",
                lName: "lolololololol"
            },
   
        ]
    };
};
render(){
    return (
        <div className = "Authors">
            <div className= "lander">
              <AuthorDisplay authors={this.state.authors}/>
            </div>
        </div>
    );
    }
}
