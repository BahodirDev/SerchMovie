import React from 'react'

export default function Header(){
    return(
                <nav className='nav'>
                    <div className="header_pad">
                        <a href="#" className="brand-logo">React</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="#">Movie</a></li>
                        </ul>
                    </div>
        </nav>
    )
}