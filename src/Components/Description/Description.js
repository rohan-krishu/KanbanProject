import React, { useState } from 'react';
import { Box, TextField, Grid } from '@mui/material';
import { RemoveRedEye as RemoveRedEyeIcon } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Editor } from '@tinymce/tinymce-react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Description = () => {
const [content, setContent] = useState('<p>Description:</p>');
const handleEditorChange = (content, editor) => {
    setContent(content);
};

return (
    <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
        <Box  p={2} width="100%" mt={2}>
            <div style={{ marginTop: '50px' }}>
            <TextField id="outlined-basic" label="Section A" variant="outlined" fullWidth />

            <Button variant="outlined" startIcon={<RemoveRedEyeIcon />} href="#outlined-buttons" sx={{ mt: 2 }}>
                Add
            </Button>
            </div>

            <div style={{ marginTop: '60px' }}>
            <Editor
                apiKey="vzto6l8svuc4whex2azy8pkvhl5vb3wr11y4tys3y7jwo686"
                initialValue={content}
                init={{
                height: 300,
                menubar: false,
                plugins: ['paste', 'link'],
                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | link',
                }}
                onEditorChange={handleEditorChange}
            />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', marginTop: '70px', marginBottom: '2rem' }}>
            <AccountCircleIcon />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth sx={{ marginLeft: 2 }} />
            </div>
        </Box>
        </Grid>

        <Grid item xs={12} md={6}>
        <Box  p={2} width="400px" mt={2} textAlign="center">
            <div>
            <div>
                <h3>Add to card</h3>
                <ButtonGroup orientation="vertical" aria-label="vertical outlined button group">
                <Button>
                    <RemoveRedEyeIcon />
                    Button 1
                </Button>
                <Button>
                    <RemoveRedEyeIcon />
                    Button 2
                </Button>
                <Button>
                    <RemoveRedEyeIcon />
                    Button 3
                </Button>
                <Button>
                    <RemoveRedEyeIcon />
                    Button 4
                </Button>
                <Button>
                    <RemoveRedEyeIcon />
                    Button 5
                </Button>
                </ButtonGroup>
            </div>
            <div>
                <h3>Power-Ups</h3>
                <ButtonGroup orientation="vertical" aria-label="vertical outlined button group">
                <Button>
                    <RemoveRedEyeIcon />
                    Button 1
                </Button>
                </ButtonGroup>
            </div>
            <div>
                <h3>Automation</h3>
                <ButtonGroup orientation="vertical" aria-label="vertical outlined button group">
                <Button>
                    <RemoveRedEyeIcon />
                    Button 1
                </Button>
                </ButtonGroup>
            </div>
            <div>
                <h3>Actions</h3>
                <ButtonGroup orientation="vertical" aria-label="vertical outlined button group">
                <Button>
                    <RemoveRedEyeIcon />
                    Button 1
                </Button>
                <Button>
                    <RemoveRedEyeIcon />
                    Button 2
                </Button>
                <Button>
                    <RemoveRedEyeIcon />
                    Button 3
                </Button>
                <Button>
                    <RemoveRedEyeIcon />
                    Button 4
                </Button>
                <Button>
                    <RemoveRedEyeIcon />
                    Button 5
                </Button>
                </ButtonGroup>
            </div>
            </div>
        </Box>
        </Grid>
    </Grid>
);
};

export default Description;
