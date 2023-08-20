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
                    },
                    '&:hover fieldset': {
                        color: "white",
                        border: '1px solid white!important',
                        borderRadius: 0,
                    },
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                        color: "white",
                        border: '1px solid white!important',
                    },

                }}
                    InputLabelProps={{
                        sx: {
                            color: 'white',
                            textTransform: 'capitalize',
                        },
                    }} inputProps={{
                        sx: {
                            color: 'white',
                            paddingLeft: '15px',
                            fontSize: '20px',
                        },
                    }}
                    FormHelperTextProps={{
                        sx: {
                            color: 'white',
                        },
                    }} id="outlined-search" label="Search city" type="search" />

            </div>
        </>
    )
}

export default Shops