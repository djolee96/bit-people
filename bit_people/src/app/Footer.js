import React from 'react';

const Footer = (props) => {
    return (
        <footer class="page-footer">
            <div class="footer-copyright">
                <div class="container">  © {new Date().getFullYear()} Copyright Text</div>
            </div>
        </footer>
    )
}

export default Footer