import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function EditModal({editUser,likee,setLikee,setAuthorNamee,authorNamee,setStatuse,statuse, openEdit,setPriceUsde,priceUsde,setPriceEthe, setOpenEdit, nfte,setNfte,namee,setNamee,priceEthe}) {


    return (
        <div>
            <Dialog
                open={openEdit}
                onClose={''}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                role="alertdialog"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Add New Card"}
                </DialogTitle>
                <DialogContent className='flex flex-col w-100'>
                    <TextField onChange={(e) => setNfte(e.target.value)} value={nfte} id="standard-basic" label="NFT" variant="standard" />
                    <TextField onChange={(e) => setNamee(e.target.value)} value={namee} id="standard-basic" label="Name" variant="standard" />
                    <TextField onChange={(e) => setPriceEthe(e.target.value)} value={priceEthe} id="standard-basic" label="Price ETH" variant="standard" />
                    <TextField onChange={(e) => setPriceUsde(e.target.value)} value={priceUsde} id="standard-basic" label="Price USD" variant="standard" />
                    <TextField onChange={(e) => setAuthorNamee(e.target.value)} value={authorNamee} id="standard-basic" label="Author Name" variant="standard" />
                    <TextField onChange={(e) => setLikee(e.target.value)} value={likee} id="standard-basic" label="Like" variant="standard" />
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">In Stock</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={statuse}
                            onChange={(e) => setStatuse(e.target.value)}>
                            <MenuItem value={'true'}>Have</MenuItem>
                            <MenuItem value={'false'}>None</MenuItem>
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>setOpenEdit(false)} autoFocus>
                        Disagree
                    </Button>
                    <Button onClick={()=>editUser()}>Agree</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
