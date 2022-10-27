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

export default function Login() {
    const navigate = useNavigate();
    const { userData, setUserProfile, setUserData } = useContext(UserContext);
    const [userInput, setUserInput] = useState({});

    const validateSchema = yup.object().shape({
        email: yup.string().required("กรุณากรอกอีเมล").email("กรุณากรอกอีเมลให้ถูกต้อง"),
        password: yup.string().required('กรุณากรอกรหัสผ่าน'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validateSchema),
        mode: "onChange"
    });

    const handleLogin = () => {
        checkValidUser(userInput.email, userInput.password)
    };

    const checkValidUser = (email, password) => {
        let findUserData = userData.filter(item => item.email === email && item.password === password)
        if (findUserData.length > 0) {
            const validUser = userData.map(item => {
                if (item.email === email) {
                    return { ...item, loggedIn: true }
                }
                return item
            });
            setUserData(validUser)
            const userProfile = validUser?.find(user => user?.loggedIn === true)
            setUserProfile(userProfile)
            navigate('/main')
        } else {
            alert("Username or Password is incorrect")
        }
    }

    return (
        <Container maxWidth="xs">
            <Stack mt={8} alignItems='center' >
                <Typography variant="h5">
                    Login
                </Typography>
                <Stack spacing={3} mt={3} width='100%' >
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
                        onClick={handleSubmit(handleLogin)}
                        fullWidth
                        variant="contained"
                    >
                        Login
                    </Button>
                </Stack>
            </Stack>
        </Container>
    );
}