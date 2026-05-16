import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function AddModal({ open, setOpen, addUser }) {
    const [nft, setNft] = useState('')
    const [name, setName] = useState('')
    const [priceEth, setPriceEth] = useState('')
    const [priceUsd, setPriceUsd] = useState('')
    const [like, setLike] = useState('')
    const [status, setStatus] = useState(true)
    const [authorName, setAuthorName] = useState('')

    function newUser() {
        let newCard = {
            id: Date.now(),
            title: name,
            authorName,
            priceEth,
            priceUsd,
            likes: like,
            status,
            image: nft
        }
        addUser(newCard)
        setNft('');
        setName('');
        setPriceEth('');
        setPriceUsd('');
        setLike('');
        setAuthorName('');
        setStatus(true);
        setOpen(false)
    }

    return (
        <div>
            <Dialog
                open={open}
                onClose={''}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                role="alertdialog"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Add New Card"}
                </DialogTitle>
                <DialogContent className='flex flex-col w-100'>
                    <TextField onChange={(e) => setNft(e.target.value)} value={nft} id="standard-basic" label="NFT" variant="standard" />
                    <TextField onChange={(e) => setName(e.target.value)} value={name} id="standard-basic" label="Name" variant="standard" />
                    <TextField onChange={(e) => setPriceEth(e.target.value)} value={priceEth} id="standard-basic" label="Price ETH" variant="standard" />
                    <TextField onChange={(e) => setPriceUsd(e.target.value)} value={priceUsd} id="standard-basic" label="Price USD" variant="standard" />
                    <TextField onChange={(e) => setAuthorName(e.target.value)} value={authorName} id="standard-basic" label="Author Name" variant="standard" />
                    <TextField onChange={(e) => setLike(e.target.value)} value={like} id="standard-basic" label="Like" variant="standard" />
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">In Stock</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}>
                            <MenuItem value={'true'}>Have</MenuItem>
                            <MenuItem value={'false'}>None</MenuItem>
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>setOpen(false)} autoFocus>
                        Disagree
                    </Button>
                    <Button onClick={() => newUser()}>Agree</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
