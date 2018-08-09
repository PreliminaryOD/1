import React, {Component} from 'react';
import ContentCol from './contentCol';
import StackGrid from "react-stack-grid";
import Pin from './pin';

class ContentGrid extends Component {
    constructor() {
        super();
        this.state= {
            data:[
                "http://via.placeholder.com/248x248",
                "http://via.placeholder.com/248x350", 
                "http://via.placeholder.com/248x150",
                "http://via.placeholder.com/248x200",
                "http://via.placeholder.com/248x130",
                "http://via.placeholder.com/248x248",
                "http://via.placeholder.com/248x350", 
                "http://via.placeholder.com/248x150",
                "http://via.placeholder.com/248x200",
                "http://via.placeholder.com/248x130",
                "http://via.placeholder.com/248x248",
                "http://via.placeholder.com/248x350", 
                "http://via.placeholder.com/248x150",
                "http://via.placeholder.com/248x200",
                "http://via.placeholder.com/248x130",
                "http://via.placeholder.com/248x248",
                "http://via.placeholder.com/248x350", 
                "http://via.placeholder.com/248x150",
                "http://via.placeholder.com/248x200",
                "http://via.placeholder.com/248x130",  
            ],
            change:false
        }
    }
    
    func = (x) => {
        console.log(x);
    }
    display = () =>{
        // console.log('display func');
        return (
            this.state.data.map( (i,index) =>
                
                <Pin key={index} url={i} url1={'save'} url2={'https://www.google.com/'} onClick={this.func}/>
            )
        )
    }
    render(){


        return(
            <div className='content'>
                <StackGrid columnWidth={260} >
                    {this.display()}
                </StackGrid>

            </div>
        )
    }
}
export default ContentGrid;




{/* <div className='t' >
<img src={"http://via.placeholder.com/260x260"} />
</div> */}