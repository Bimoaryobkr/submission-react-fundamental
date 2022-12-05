import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/api';

function RegisterPage() {
    const navigate = useNavigate();
    const [registererror, setregistererror] = useState(true);

    async function onRegisterHandler(user) {
        const { error } = await register(user);
        if (!error) {
            navigate('/');
        }
        else {
            setregistererror();
        }
    }

    return (
        <section className='register-page'>
            <h2>Silahkan mendaftar terlebih dahulu sebelum login</h2>
            {registererror !== true && <p>Masukkan Data sesuai dengan syarat</p> }
            <RegisterInput register={onRegisterHandler} />
            <p>Kembali ke <Link to="/">Masuk</Link></p>
        </section>
    )
}

export default RegisterPage;