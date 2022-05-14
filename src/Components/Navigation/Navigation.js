import React from 'react';


const Navigation = () => {
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p className='f3 link dim black underline pa3 pointer'>Top</p>
            <p className='f3 link dim black underline pa3 pointer'>Previous</p>
            <p className='f3 link dim black underline pa3 pointer'>Next</p>
            <p className='f3 link dim black underline pa3 pointer'>Sound</p>
        </nav>

    );
}




export default Navigation;