import { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Stack } from '@mui/material';
import { UserContext } from "../utils/contexts/UserContext";
import { useNavigate } from 'react-router';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

export default function SignUp() {
    const navigate = useNavigate();
    const { userData, setUserData } = useContext(UserContext);
    const [userInput, setUserInput] = useState({});

    const validateSchema = yup.object().shape({
        email: yup.string().required("กรุณากรอกอีเมล").email("กรุณากรอกอีเมลให้ถูกต้อง"),
        password: yup.string().required("กรุณากรอกรหัสผ่าน").matches(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
            "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร, 1 ตัวอักษรใหญ่ และ 1 ตัวเลข"
        ),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validateSchema),
        mode: "onChange"
    });

    const handleSignUp = () => {
        checkDuplicateUser(userInput.email, userInput.password)
    };

    const checkDuplicateUser = (email, password) => {
        let findUserData = userData.filter(item => item.email === email)
        if (findUserData.length === 0) {
            setUserData([...userData, { email: email, password: password, loggedIn: false }])
            navigate('/login')
        } else {
            alert("User already exists")
        }
    }

    return (
        <Container maxWidth="xs">
            <Stack mt={8} alignItems='center' >
                <Typography variant="h5">
                    Sign Up
                </Typography>
                <Stack spacing={3} mt={3} width='100%'>
                    <TextField
                        required
                        fullWidth
                        label="Email"
                        autoFocus
                        {...register("email", {
                            onChange: (e) => {
                                setUserInput({ ...userInput, email: e.target.value })
                            }
                        })}
                        error={errors?.email}
                        helperText={errors?.email?.message}
                    />
                    <TextField
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        {...register("password", {
                            onChange: (e) => {
                                setUserInput({ ...userInput, password: e.target.value })
                            }
                        })}
                        error={errors?.password}
                        helperText={errors?.password?.message}
                    />
                    <Button
                        onClick={handleSubmit(handleSignUp)}
                        fullWidth
                        variant="contained"
                        color="green"
                        sx={{ color: "white" }}
                    >
                        Sign Up
                    </Button>
                </Stack>
            </Stack>
        </Container>
    );
}