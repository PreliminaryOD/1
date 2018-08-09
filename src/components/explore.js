import React, {Component} from 'react';
import StackGrid from "react-stack-grid";
import Pin from './pin';

class Explore extends Component {
    constructor(props){
        super(props);
        this.state={
            data:this.props.data,
            cat: 'Trending',
        }
    }
    display = () =>{
        return (
            this.state.data.map( (i,index) =>
                
                <Pin key={index} url={i} url1={'save'} url2={'google.com'} onClick={this.func}/>
            )
        )
    }
    f = (i) => {
        switch (i) {
            case 1:
                this.setState({cat:'Trending'});
                break;
            case 2:
                this.setState({cat:'Education'});
                break;
            case 3:
                this.setState({cat:'Food'});
                break;
            case 4:
                this.setState({cat:'Home'});
                break;
            case 5:
                this.setState({cat:'Men\'s style'});
                break;
            case 6:
                this.setState({cat:'More'});

            default:
                break;
        }
        // if (i==1)this.setState({cat:'Trending'});
        // else if (i==2)this.setState({cat:'Education'});
        // else if (i==3)this.setState({cat:'Food'});
        // else if (i==4)this.setState({cat:'Home'});
        // else if (i==5)this.setState({cat:'Men\'s style'});
        // else if (i==6)this.setState({cat:'More'});
    }
    render() {
        console.log(this.state.cat);
        return (
            <div className='content'>
                <div className='content_explore'>
                    <div className='content_explore_title'>
                        <div>{this.state.cat}</div>
                    </div>
                    <div className='content_explore_categories'>
                        <button onClick={()=>this.f(1)}>Trending</button>
                        <button onClick={()=>this.f(2)}>Education</button>
                        <button onClick={()=>this.f(3)}>Food</button>
                        <button onClick={()=>this.f(4)}>Home</button>
                        <button onClick={()=>this.f(5)}>Men's style</button>
                        <button onClick={()=>this.f(6)}>More</button>
                    </div>
                </div>
                <StackGrid columnWidth={260} >
                    {this.display()}
                </StackGrid>
            </div>
        )
    }
}
export default Explore;