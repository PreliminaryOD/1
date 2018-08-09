import React, {Component} from 'react';
import Button from './button';

class NavBar extends Component {
    render(){
        return(
            <div className='nav-bar'>

                <div className='nav-bar_logo'>
                    <img src="https://raw.githubusercontent.com/jordanhudgens/pinterest-html-css-clone/master/img/logo.png" alt="logo" />
                </div>
                <div className='nav-bar_search'>
                    <input className='nav-bar_search_box' type='text' placeholder='Search(Does not do anything yet :D)' />
                </div>

                <div className='nav-bar_nav-buttons'>
                    <Button type='2' val='Home' disp='1' callback={this.props.callback} />
                    <Button type='3' className={`fas fa-users`} val='Following' disp='2' callback={this.props.callback} />
                    <Button type='3' className={`fas fa-compass`} val='Explore' disp='3' callback={this.props.callback}/>
                    <Button type='1' className={`fas fa-circle`} val='User' disp='4' callback={this.props.callback}/>
                    <Button type='1' className={`fas fa-comment-dots`} />
                    <Button type='1' className={`fas fa-bell`} />
                    <Button type='1' className={`fas fa-ellipsis-h`} />
                </div>

            </div>
        )
    }
}
export default NavBar;