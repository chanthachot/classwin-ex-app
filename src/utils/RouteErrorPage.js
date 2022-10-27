import { Stack } from "@mui/material";
import { useRouteError } from "react-router-dom";

export default function RouteErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <Stack sx={{
            alignItems: "center",
            justifyContent: "center",
            minWidth: "100%",
            minHeight: "100vh",
        }}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </Stack>
    );
}