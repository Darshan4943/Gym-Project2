import React, {useState} from 'react'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark,faBars} from '@fortawesome/free-solid-svg-icons';

import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import styles from'./Navbar.module.css'


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className={styles.main}>
        <header className={styles.header}>

            <div className={styles.logo}  ><Link to ='/'>
                <SportsGymnasticsIcon sx={{fontSize:45,color:"red" }} /> </Link>
            </div>
          
            <ul className={isMenuOpen ? styles.listresponsive : styles.lists}>

              <li><Link to='/aboutUs'>AboutUs</Link></li>
              <li><Link to='/classes'>Classes</Link></li>
              <li><Link to='/trainer'>Trainer</Link></li> 
              <li><Link to='/pricing'>Pricing</Link></li>
              <li ><Link to='/joinUs' style={{color:"white",backgroundColor:"red", fontSize:"24px", padding:"8px",borderRadius:"4px"}}>Join Us</Link></li>

            </ul>
        
        <button className={styles.menutoggle} onClick={handleClick}>
          {isMenuOpen ? <FontAwesomeIcon icon={faXmark} />: <FontAwesomeIcon icon={faBars} />}
        </button>
        </header>
       
    </div>
  )
}
export default Navbar