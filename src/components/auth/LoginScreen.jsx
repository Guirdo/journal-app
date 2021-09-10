import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'
import validator from 'validator'
import { useForm } from '../../hooks/useForm'
import { useSelector } from 'react-redux'
import { removeError, setError } from '../../actions/ui'

export const LoginScreen = () => {

    const dispatch = useDispatch()

    const { msgError,loading } = useSelector(state => state.ui)

    const [formValues, handleInputChange] = useForm({
        email: 'aldo@email.com',
        password: '12345678',
    })

    const { email, password } = formValues

    const handleLogin = (e) => {
        e.preventDefault()

        if (isFormValid()) {
            dispatch(startLoginEmailPassword(email, password))
        }
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin())
    }

    const isFormValid = () => {
        if (password.length < 8) {
            dispatch(setError('Password not valid'))
            return false
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Email not valid'))
            return false
        }

        dispatch(removeError())
        return true
    }

    return (
        <>
            <h3 className="auth__title mb-5">Login</h3>

            <form onSubmit={handleLogin}>
                {
                    msgError && (<div className="auth__alert-error">
                        {msgError}
                    </div>)
                }
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={ loading }
                >
                    Login
                </button>

                <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link
                    to="/auth/register"
                    className="link mt-5"
                >
                    Create new account
                </Link>
            </form>
        </>
    )
}
