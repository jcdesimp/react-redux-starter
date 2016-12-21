"use strict";

import React from 'react';
import Readme from 'modules/../../../README';

const HomepageStyle = {
    padding: "0 17px 20px 17px"
};

const Home = () => (
    <div
        dangerouslySetInnerHTML={{__html: Readme}}
        style={HomepageStyle}
    >
    </div>
);

export default Home;

