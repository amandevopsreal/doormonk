import React, { useState } from 'react'
import "./ShopItem.css"
import { useContext } from 'react'
import AppointmentContext from '../context/appointmentContext';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function AlertDialog({ setInvalid }) {
    const context = useContext(AppointmentContext)
    const { deleteAppointment } = context
    const [open, setOpen] = React.useState(true);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        deleteAppointment()
        setOpen(false);
        setInvalid(false)
        window.location.reload();
    };

    const handleClose2 = () => {
        setOpen(false);
        setInvalid(false)
    };

    return (
        <div>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Cancel your booking?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        This booking will be canceled. Do you want to move ahead?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose2}>Disagree</Button>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}


const Appointment = ({ appointment }) => {
    const context = useContext(AppointmentContext)
    const { setAppId } = context
    const onCancel = (id) => {
        setAppId(id)
        setInvalid(true)
    }
    const [invalid, setInvalid] = useState(false);
    return (

        <>

            {invalid && <AlertDialog setInvalid={setInvalid}></AlertDialog>}

            <div style={{ textAlign: "left" }} className="card my-3">
                <h5 className="card-header"><i class="fa-solid fa-shop head-icon"> Appointment Details</i></h5>
                <div className="card-body">
                    <h5 className="card-title">{appointment.name}</h5>
                    <p className="card-text"><span className='b'>Booking Status</span>{": " + appointment.status}</p>
                    <p className="card-text"><span className='b'>Address</span>{": " + appointment.address}</p>
                    <p className="card-text"><span className='b'>Services</span>{": " + appointment.services}</p>
                    <p className="card-text"><span className='b'>Phone</span>{": " + appointment.phone}</p>
                    <p className="card-text"><span className='b'>Email</span>{": " + appointment.email}</p>
                    <p className="card-text"><span className='b'>Slot Time</span>{": " + appointment.time}</p>
                    <p className="card-text"><span className='b'>Unique Booking Id</span>{": " + appointment.bookingid}</p>
                    <p className="card-text"><span className='b'>Barber's Name</span>{": " + appointment.barbername}</p>
                    <p className="card-text"><span className='b'>Barber's Phone</span>{": " + appointment.barberphone}</p>
                    <p className="card-text"><span className='b'>Website</span>{": " + appointment.barberwebsite}</p>
                    <p className="card-text"><span className='b'>Barber's Email</span>{": " + appointment.barberemail}</p>
                    <p className="card-text"><span className='b'>Barber's Address</span>{": " + appointment.barberaddress}</p>
                    <p className="card-text"><span className='b'>Service Type</span>{": " + appointment.servicetype}</p>
                    <button style={{ borderRadius: "0.375rem" }} className="book-btn btn btn-primary ">Edit Service</button>
                    <button disabled={appointment.status === "Canceled"} onClick={() => onCancel(appointment._id)} style={{ borderRadius: "0.375rem" }} className="price-btn btn btn-primary mx-2">Cancel Service</button>

                </div>
            </div>
        </>
    )
}

export default Appointment