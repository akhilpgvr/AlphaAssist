import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <p>Thanks for choosing AlphaAssist</p>
        </div>
        <hr/>
        <div className="footer-bottom">
            <div className="footer-bottom-left">
                <p>© 2024 Akhil P S. All rights reserved.</p>
            </div>
            <div className="footer-bootom-right">
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    </div>
  )
}

export default Footer