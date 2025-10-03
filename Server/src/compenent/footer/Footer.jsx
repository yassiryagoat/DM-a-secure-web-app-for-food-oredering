import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
    return (
        <footer className="text-white text-center text-lg-start footer"  id='footer' style={{ backgroundColor: '#23242a' }}>
            <div className="container p-4">
                <div className="row mt-4">
                    <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4">About company</h5>
                        <p>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum deleniti atque corrupti.
                        </p>
                        <p>
                            Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.
                        </p>
                        <div className="mt-4">
                            <a href="https://www.twitter.com/DeliciuosMenu" type="button" className="btn btn-floating   x"><img src={assets.x} alt="" to='www.x/DeliciusMenu.com' /></a>
                            <a href="https://www.instagram.com/DeliciuosMenu" type="button" className="btn btn-floating  btn-lg insta"><img src={assets.instagram} alt="" /></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4 pb-1">Get in touch</h5>
                       
                        <ul className="fa-ul" style={{ marginLeft: '1.65em' }}>
                            <li className="mb-3">
                                <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">Agadir, rue Hassan II, MR</span>
                            </li>
                            <li className="mb-3">
                                <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">DeliciuosMenu@example.com</span>
                            </li>
                            <li className="mb-3">
                                <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+212 6 234 567 88</span>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4">Opening hours</h5>
                        <table className="table text-center text-white">
                            <tbody className="font-weight-normal">
                                <tr>
                                    <td>Mon - Thu:</td>
                                    <td>8am - 9pm</td>
                                </tr>
                                <tr>
                                    <td>Fri - Sat:</td>
                                    <td>8am - 1am</td>
                                </tr>
                                <tr>
                                    <td>Sunday:</td>
                                    <td>9am - 10pm</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2020 Copyright: Deliciuos Menu
            </div>
        </footer>
    );
}

export default Footer;
