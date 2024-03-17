import { Alert, Box, Button, Chip, CircularProgress, FormControl, Input, InputAdornment, InputLabel, Snackbar, Stack, styled } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useLocation } from "react-router-dom";
import useGetRequest from "../requests/useGetRequest";
import { FormEvent, useRef, useState } from "react";
import makePostRequest from "../requests/makePostRequest";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export const Course = () => {
    let { state } = useLocation();

    const module = state?.module;

    const assignments = useGetRequest(`/course/module/${module?.id}/module-assignment/`);
    const [assignmentSubmitLoading, setassignmentSubmitLoading] = useState(false);
    const [Message, setMessage] = useState("");
    console.log(assignments);

    const assignmentForm = useRef<HTMLFormElement>(null);

    const submitAssignment = (event: FormEvent) => {
        event.preventDefault();
        let form = event.target as HTMLFormElement;

        if (form.reportValidity()) {
            setassignmentSubmitLoading(true);
            makePostRequest(`/course/module/${module?.id}/module-assignment/`, form, (data: any) => {
                setassignmentSubmitLoading(false);
                if (data && !data?.isError) {
                    setMessage("Assignment submitted.")
                }
            })
        }

    }


    return (
        <>
            <Box marginY={"100px"} marginX={"auto"} maxWidth={"850px"} padding={3} >
                <Stack direction="row" justifyContent={"space-between"} alignItems={"center"}>
                    <h2>
                        {module?.name}
                    </h2>

                    <Chip label="Week 1" color="secondary" />

                </Stack>

                <p>
                    <small>
                        Updated Time: 9:00AM - 20th of February 2024
                    </small>
                </p>

                <p style={{
                    textAlign: "justify"
                }}>
                    {module?.description}
                </p>

                <form ref={assignmentForm} onSubmit={submitAssignment}>
                    <Stack maxWidth={"400px"} marginTop={5} marginX={"auto"} spacing={3}>
                        <h3>
                            Submit Assignment
                        </h3>

                        <FormControl variant="standard" required>
                            <InputLabel htmlFor="input-with-icon-adornment">
                                Enter your uploaded Youtube link
                            </InputLabel>
                            <Input
                                id="input-with-icon-adornment" name="youtube_link"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <YouTubeIcon />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>

                        <Button
                            sx={{
                                backgroundColor: "#263238"
                            }}
                            color="secondary"
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon />}
                        >
                            Upload file
                            <VisuallyHiddenInput name="" type="file" required />
                        </Button>

                        <Button variant="contained" color="info" type="submit" >
                            Submit Assignment
                            <CircularProgress sx={{ ml: 3, color: "white", display: assignmentSubmitLoading ? "initial" : "none" }} size={20} />
                        </Button>
                    </Stack>
                </form>

            </Box>
            <Snackbar anchorOrigin={{ horizontal: "right", vertical: "bottom" }} open={!!Message} autoHideDuration={6000} onClose={()=>{setMessage("")}}>
                <Alert onClose={()=>{setMessage("")}} severity={"success"} sx={{ width: '100%' }}>
                    {Message}
                </Alert>
            </Snackbar>

        </>
    );
}