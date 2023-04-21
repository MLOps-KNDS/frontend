import Button from '@mui/material/Button'
import { useSession, signIn, signOut } from 'next-auth/react'

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
                <Button variant="outlined" onClick={() => {signIn()}}>Login</Button>
            </div>
        );
}

export default LoginButton;
