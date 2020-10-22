import React from 'react';
import FooterBottom from './footer.bottom';
import FooterMain from './footer.main';
import './footer.css';
class Footer extends React.Component
{
    render()
    {
        return(
            <footer className="footer-wrapper">
                <FooterMain/>
                <FooterBottom/>
            </footer>
        )
    }
}
export default Footer;