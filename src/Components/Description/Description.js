import React, { useState } from 'react';
import { Box, TextField, Grid } from '@mui/material';
import { RemoveRedEye as RemoveRedEyeIcon } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Editor } from '@tinymce/tinymce-react';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Description.css'
import { CgClose } from 'react-icons/cg';

const Description = () => {
    const [content, setContent] = useState('<p>Description:</p>');
    const { Todo } = useSelector(state => state.todo)
    const { id } = useParams()

    const Navigate = useNavigate();

    const handleEditorChange = (content, editor) => {
        setContent(content);
    };

    const users = Todo.find((ele)=>ele.id === id);
    console.log(users)

    const HandleClose = () => {
        Navigate("/kanban")
    }

    return (
        <div>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box p={2} width="100%" mt={2}>
                            <div style={{ marginTop: '50px', paddingBottom: '50px' }}>
                                {/* <TextField id="outlined-basic" label="Section A" variant="outlined" fullWidth /> */}
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
        </div>
    );
};

export default Description;