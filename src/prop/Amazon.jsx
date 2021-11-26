import React from 'react';
import Card from './Props';
import Sdata from './Sdata';
function Amazon() {
    return (
        <Card
            key={Sdata[0].id}
            image={Sdata[0].image}
            tittle={Sdata[0].tittle}
            para={Sdata[0].para}
            btn={Sdata[0].btn}
        />
    )
}

export default Amazon;