import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <MDBFooter className='footer text-center text-start '>
      <div className="container">
        <section className='d-flex justify-content-center justify-content-between p-4 border-bottom'>
          <div className='me-5 d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href='' className='me-4 text-reset'>
              <i class="bi bi-facebook"></i>
            </a>
            <a href='' className='me-4 text-reset'>
              <i class="bi bi-twitter"></i>
            </a>
            <a href='' className='me-4 text-reset'>
              <i class="bi bi-instagram"></i>
            </a>
            <a href='' className='me-4 text-reset'>
              <i class="bi bi-google"></i>
            </a>


          </div>
        </section>

        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <h3 className='text-uppercase fw-bold mb-4'>
                  <i class="bi bi-gem me-3 "></i>
                  Weare Shope
                </h3>
                <p>
                  Since 1996, you have been the core and heart of our story. That’s why Carina has always used her intelligent intuition to empower you with joyful comfort.

                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                <div className="linkscloth">
                  <div>
                  <Link to="/shop">
                    <button>Women Clothes</button>
                  </Link>
                </div>
                <div>
                  <Link to="/shop">
                    <button>Men Clothes</button>
                  </Link>
                </div>
                <div>
                  <Link to="/shop">
                    <button>Kids Clothes</button>
                  </Link>
                </div>
                </div>
                
                
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Pages</h6>
                <div className="linkscloth">
                  <div>
                  <Link to="/home">
                    <button>Home</button>
                  </Link>
                </div>
                <div>
                  <Link to="/shop">
                    <button>Shoping</button>
                  </Link>
                </div>
                <div>
                  <Link to="/aboutus">
                    <button>About Us</button>
                  </Link>
                </div>
                <div>
                  <Link to="/contactus">
                    <button>Contact Us</button>
                  </Link>
                </div>
                </div>
                
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                <i class="bi bi-house-door-fill me-3"></i>
                  New York, NY 10012, US
                </p>
                <p>
                <i class="bi bi-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                <i class="bi bi-telephone-fill me-3"></i> + 01 234 567 88
                </p>
                <p>
                <i class="bi bi-printer-fill me-3"></i> + 01 234 567 89
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2021 Copyright:
          <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
            MDBootstrap.com
          </a>
        </div>
      </div>
    </MDBFooter>
  );
}