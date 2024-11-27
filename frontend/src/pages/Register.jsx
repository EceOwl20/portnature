import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    const [form, setForm] = useState({});
    const [error, setError] = useState(false);
    const [wait, setWait] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value
        });
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setWait(true);
        const response = await fetch ("/api/giris/kayit-ol", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form)
        });
        console.log(form)

        const data = await response.json();
        if(data.success===false){
            setError(data.message);
            setWait(false);
            return;
        }

        navigate("/giris");

        console.log("kayıt başarılı")
    }
  return (
    <section>
        <h1>Kayıt Ol</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Kullanıcı Adı</label>
            <input id='username' type="text" name='username' onChange={handleChange} />

            <label htmlFor="name">Adınız Soyadınız</label>
            <input id='name' type="text" name='name' onChange={handleChange} />

            <label htmlFor="email">E-posta Adresiniz</label>
            <input id='email' type="text" name='email' onChange={handleChange} />

            <label htmlFor="password">Paralo</label>
            <input id='password' type="text" name='password' onChange={handleChange} />

            <button type='submit'>{wait ? "Bekleyiniz..":"Kayıt Ol"}</button>
            {error && <p className='error'>{error}</p>}
        </form>
    </section>
  )
}

export default Register