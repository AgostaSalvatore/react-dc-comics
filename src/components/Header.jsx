const Header = () => {
  return <header>
    <div className="container">
    <figure>
        <img src="/src/assets/img/dc-logo.png" alt="DC Comics Logo" />
    </figure>
    <nav>
            <ul>
                <li><a href="#">CHARACTERS</a></li>
                <li><a href="#">COMICS</a></li>
                <li><a href="#">MOVIES</a></li>
                <li><a href="#" className="active">TV</a></li>
                <li><a href="#" className="active">GAMES</a></li>
                <li><a href="#">COLLECTIBLES</a></li>
                <li><a href="#">VIDEOS</a></li>
                <li><a href="#">FANS</a></li>
                <li><a href="#">NEWS</a></li>
                <li><a href="#">SHOP</a></li>
            </ul>
        </nav>
    </div>
  </header>
}

export default Header