import React from 'react';

import style from './style.module.css';
import HeaderAvatar from '../HeaderAvatar/index';
import { Link } from 'react-router-dom';

/**
 * @description Header component
 */
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        // Auth details from localStorage
        const userDetails = JSON.parse(localStorage.getItem('user_data') || '');

        return(
            <header className={`${style.header}`}>
                <div className="px-4 container">
                    <div className={`${style.header_container}`}>
                        {/* Header: Left side */}
                        <div className="flex">
                            <Link to="/" className="w-100 text-white font-semibold">
                                {process.env.REACT_APP_NAME}
                            </Link>
                        </div>

                        {/* Header: Right side */}
                        <div className="flex items-center">
                            <HeaderAvatar
                                email={userDetails.email}
                                name={userDetails.name}
                            />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;