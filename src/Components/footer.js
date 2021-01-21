import React from "react";
import "./footer.css"
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
    return (
        <footer class="footer fixed-bottom bg-dark clearfix">
            <div class="container text-center">
                <a href="https://github.com/cherylfowlie"><i class="fa fa-github"></i></a>
                <a href="mailto:cheryljfowlie@gmail.com"><i class="fa fa-envelope-open"></i></a>
                <a href="https://au.linkedin.com/"><i class="fa fa-linkedin"></i></a>

                <a href="#!"><i class="fa fa-google-plus"></i></a>
                <a href="#!"><i class="fa fa-skype"></i></a>
            </div>
        </footer>
    );
}

export default FooterPage;