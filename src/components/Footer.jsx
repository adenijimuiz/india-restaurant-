import React from 'react'
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <div className="socialMedia">
        <InstagramIcon /> <XIcon /> <FacebookIcon /> <LinkedInIcon />
      </div>
      <p>&copy; {new Date().getFullYear()} IndianFood.Com</p>
    </div>
  )
}
