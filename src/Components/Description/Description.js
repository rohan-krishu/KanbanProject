import React, { useState } from 'react';
import { Box, TextField, Grid } from '@mui/material';
import { RemoveRedEye as RemoveRedEyeIcon } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Editor } from '@tinymce/tinymce-react';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import './Description.css'
import { useNavigate } from 'react-router-dom';
import { CgClose } from 'react-icons/cg';



const Description = () => {
    const [content, setContent] = useState('<p>Description:</p>');
    const { id, cardName } = useParams();
    const Navigate = useNavigate();
    const handleEditorChange = (content, editor) => {
        setContent(content);
    };

    const HandleClose = () => {
        Navigate("/kanban")
    }

    return (

        <div className='main-container'>
            <Grid container spacing={2} className='seconcontainer'>
                <Grid item xs={12} md={6}>
                    <Box p={2} width="100%" mt={2}>
                        <div style={{ marginTop: '50px', paddingBottom: '50px' }}>
                            <h2 className='title'>{cardName}</h2>

                            <Button variant="outlined" startIcon={<RemoveRedEyeIcon />} href="#outlined-buttons" sx={{ mt: 2 }}>
                                Add
                            </Button>
                        </div>
                        <Editor
                            value={content}
                            onEditorChange={handleEditorChange}
                            apiKey="vzto6l8svuc4whex2azy8pkvhl5vb3wr11y4tys3y7jwo686"
                        />

                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '70px', marginBottom: '2rem' }}>
                            <AccountCircleIcon />
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth sx={{ marginLeft: 2 }} />
                        </div>

                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box p={2} width="10%" mt={2} textAlign="center">
                        <div>
                            <Button onClick={HandleClose}>
                                <CgClose />
                            </Button>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div>

    );
};

export default Description;