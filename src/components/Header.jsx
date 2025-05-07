const links = [
  {
    id: 1,
    href: "#",
    label: "Characters",
    current: false,
  },
  {
    id: 2,
    href: "#",
    label: "Comics",
    current: true,
  },
  {
    id: 3,
    href: "#",
    label: "Movies",
    current: false,
  },
  {
    id: 4,
    href: "#",
    label: "TV",
    current: false,
  },
  {
      id: 5,
      href: "#",
      label: "Games",
      current: false,
    },
    {
      id: 6,
      href: "#",
      label: "Collectibles",
      current: false,
    },
    {
      id: 7,
      href: "#",
      label: "Videos",
      current: false,
    },
    {
      id: 8,
      href: "#",
      label: "Fans",
      current: false,
    },
    {
      id: 9,
      href: "#",
      label: "News",
      current: false,
    },
    {
      id: 10,
      href: "#",
      label: "Shop",
      current: false,
    }
];


const Header = () => {
  return <header className="container">
    <figure>
        <img src="/src/assets/img/dc-logo.png" alt="DC Comics Logo" />
    </figure>
    <nav>
            <ul>
              {links.map((link) => (
                <li key={link.id}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
                {/* <li><a href="#">CHARACTERS</a></li>
                <li><a href="#">COMICS</a></li>
                <li><a href="#">MOVIES</a></li>
                <li><a href="#" className="active">TV</a></li>
                <li><a href="#" className="active">GAMES</a></li>
                <li><a href="#">COLLECTIBLES</a></li>
                <li><a href="#">VIDEOS</a></li>
                <li><a href="#">FANS</a></li>
                <li><a href="#">NEWS</a></li>
                <li><a href="#">SHOP</a></li> */}
            </ul>
        </nav>
  </header>
}

export default Header