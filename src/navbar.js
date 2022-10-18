import "./App.css"

const Navbar = () => {
    return (
        <nav className='nav'>
            <a href="/" className='site-title'>Site Name</a>
            <ul>
                <li>
                    <a href="/completed">Completed</a>
                
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar