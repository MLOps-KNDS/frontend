import Button from '@mui/material/Button'
import { useSession, signIn, signOut } from 'next-auth/react'
import { ThemeColors } from '@/ThemeColors';

const LoginButton = () => {
    const { data: session, status } = useSession();
    if (session?.user)
        return (
            <div>
                <div>Logged in as {session.user.email}</div>
                <Button variant="outlined" onClick={() => {signOut()}}>Logout</Button>
            </div>
        )
    else
        return (
            <div className="float-right">
                <Button variant='outlined' className="bg-blue-200 text-blue-700 my-2" size="large" onClick={() => {signIn()}}>Login</Button>
            </div>
        );
}

export default LoginButton;
