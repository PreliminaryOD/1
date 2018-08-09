import React, {Component} from 'react';

class Pin extends Component {
    f = () => {
        console.log('pressing pin');

    }
    render(){
        return(
            <div href={this.props.url} className='pin-wrapper' onClick={() => this.f()}>
                <div className='pin'>
                    <div className='pin_img'>
                        <img src={this.props.url}/>
                        <a  onClick={() => this.props.onClick(this.props.url1)}
                        className='temp-1'>Save</a>
                        <a href={this.props.url2} onClick={ () => this.props.onClick(this.props.url2)}
                        className='temp-2'>Link</a>
                    </div>
                    <button className='temp'/>
                </div>
            </div>
        )
    }
}
export default Pin;