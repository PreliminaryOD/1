import React, {Component} from 'react';

class ContentCol extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index:this.props.index,
            size:this.props.size,
            data:this.props.data
        }

    }
    displayC = (a,b) => {
        var data=[];
        for (let index = a; index < a+b; index++) {
            data.push(this.state.data[index]);
        }
        //console.log(data);
        //console.log(a,b);
        return(
        data.map ((i,index) =>
        <div  key={index}>
            <img src={i} />
        </div>  
        )
        )
    }
    display = () => {
        
        return(
            this.state.data.map( (i,index) =>
            <div  key={index}>
                <img src={i} />
            </div> 
        )
        )
    }
    render() {
        
        return(
            <div className='col'>
                {/* {this.display()} */}
                {this.displayC(this.state.index,this.state.size)}
            </div>
        )
    }
}
export default ContentCol;

