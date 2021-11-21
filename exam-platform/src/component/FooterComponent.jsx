import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <footer>

                <div class="footer-copyright text-center py-3">© 2021 Copyright: 
                    <a href="#">ExamPlatform.com</a>
                </div>

                </footer>
            </div>
        );
    }
}

export default FooterComponent;