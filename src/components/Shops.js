import React from 'react'
import TextField from '@mui/material/TextField';
const Shops = () => {
    return (
        <>
            <div className='container'>
                <p className="f3 white">Schedule your grooming, on demand.</p>
                <TextField sx={{
                    input: {
                        backgroundColor: 'transparent',
                        border: '1px solid white',
                    }

                }} id="outlined-search" label="Search city" type="search" />

            </div>
        </>
    )
}

export default Shops