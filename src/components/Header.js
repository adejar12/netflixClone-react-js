import './Header.css';


function Header({ black }) {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" alt="netflix"></img>
                </a>
            </div>
            <div className="header--user">
                <a>
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Usuario"></img>
                </a>
            </div>
        </header>
    )
}

export default Header;
