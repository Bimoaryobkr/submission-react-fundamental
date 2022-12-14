import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { login } from '../utils/api';

function LoginPage({ loginSuccess }) {
    const [loginerror, setloginerror] = useState(true);
    async function onLogin({ email, password }) {
        const { error, data } = await login({ email, password });

        if (!error) {
            loginSuccess(data);
        }
        else {
            setloginerror();
        }
    }

    return (
        <section className='login-page'>
            <h2>Silakan masuk terlebih dahulu untuk mengakses catatan Anda</h2>
            {loginerror !== true && <p>Masukkan Data yang benar</p> }
            <LoginInput login={onLogin} />
            <p>Belum punya akun? <Link to="/register">Daftar di sini.</Link></p>
        </section>
    );
}

LoginPage.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
}

export default LoginPage;