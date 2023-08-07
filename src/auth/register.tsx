import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FormControl,
    Card,
    Input,
    FormLabel,
    Button,
    Text,
    Box,
    Image,
} from '@chakra-ui/react';
import { registerUser, registerWithGoogle } from '../firebase/auth';
import { isFirebaseError } from '../firebase/typeguards';

export const Register = () => {
    const navigate = useNavigate();

    const [userEmail, setUserEmail] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');

    const handleSubmit = async (event: FormEvent<HTMLElement>) => {
        event.preventDefault();
        try {
            await registerUser({
                email: userEmail,
                password: userPassword,
            });
            navigate('/');
        } catch (error: unknown) {
            if (isFirebaseError(error)) {
                console.log(error.message);
            }
        }
    };

    return (
        <main className="w-full h-full  flex items-center justify-between">
            <Box className="hidden lg:block w-full h-full flex flex-col justify-center items-center">
                <Image
                    className="w-full"
                    src="https://www.creativefabrica.com/wp-content/uploads/2021/08/20/boho-rainbow-pastel-flower-floral-svg-Graphics-16085376-1-1-580x387.png"
                />
                <Text fontSize="5xl" color="white" textAlign="center">
                    Contador de Vueltas
                </Text>
            </Box>
            <Box className="w-full h-full">
                <Card className="h-screen justify-center">
                    <form className="h-1/2" onSubmit={handleSubmit}>
                        <FormControl
                            padding={30}
                            className="flex flex-col h-full  items-center justify-between"
                        >
                            <Text fontSize="5xl">Register</Text>

                            <Box className="w-1/2">
                                <FormLabel htmlFor="email">Email:</FormLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    onChange={(event) => {
                                        setUserEmail(event.target.value);
                                    }}
                                />
                            </Box>

                            <Box className="w-1/2">
                                <FormLabel htmlFor="password">
                                    Password:
                                </FormLabel>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    onChange={(event) => {
                                        setUserPassword(event.target.value);
                                    }}
                                />
                            </Box>
                            <Box className="flex flex-col gap-4 items-center justify-center w-full mt-10">
                                <Button
                                    className="p-6 w-1/2"
                                    colorScheme="green"
                                    type="submit"
                                >
                                    Register
                                </Button>
                                <Text>Or</Text>
                                <Button
                                    colorScheme="orange"
                                    className="p-6 w-1/2"
                                    onClick={() => {
                                        registerWithGoogle(() => {
                                            return navigate('/');
                                        });
                                    }}
                                >
                                    Google
                                </Button>
                            </Box>
                        </FormControl>
                    </form>
                </Card>
            </Box>
        </main>
    );
};
