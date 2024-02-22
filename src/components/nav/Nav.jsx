import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='container'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
    </div>
  )
}

export default Nav