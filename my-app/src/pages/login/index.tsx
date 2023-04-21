import { signIn } from 'next-auth/react'

export default function LoginButton() {
    return (
        <div className="float-right">
        <button
            className="btn btn-outline-primary"
            onClick={(e) => {
            e.preventDefault()
            signIn()
            }}
        >
            Login
        </button>
        </div>
    )
}
