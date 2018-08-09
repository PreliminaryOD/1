import React, {Component} from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state= {
            width:window.innerWidth
        }
    }
    f= () => {
        const w=window.innerWidth;
        this.setState({width:w});
    }
    
    componentWillMount(){
        this.f();
    }
    componentDidMount() {
        window.addEventListener("resize", this.f);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.f);
    } 
    render(){
        const i=this.props.type;
        const width=window.innerWidth;
        switch (i) {
            case '1':
                return (
                    <a href='#' onClick={() => this.props.callback(this.props.disp)}>
                        <i className={this.props.className} />{this.props.val}
                    </a>
                )
            case '2':
                return (
                    <a href='#' onClick={() => this.props.callback(this.props.disp)}>
                        {this.props.val}
                    </a>
                )
            case '3': 
                if (this.state.width >1080){
                    return (
                        <a href='#' onClick={() => this.props.callback(this.props.disp)}>
                            {this.props.val}
                        </a>
                    )
                }
                else {
                    return(
                    <a href='#' onClick={() => this.props.callback(this.props.disp)}>
                        <i className={this.props.className} />
                    </a>
                    )
                }
            case '4':
                return(
                   null 
                )
            default:
                return(
                    <div/>
                )
        }
    }
}
export default Button;