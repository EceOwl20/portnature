import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginError, loginStart, loginSuccess } from '../redux/userSlice.js';

const Login = () => {
    const [form, setForm] = useState({});
    const wait = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(loginStart());
        const response = await fetch("/api/giris/giris", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form)
        });
        const data = await response.json();
        if (data.success === false) {
            dispatch(loginError(data.message));
            alert(data.message);
            return;
        }
        dispatch(loginSuccess(data));
        navigate("/panel");
    };

    return (
        <section className='w-screen h- bg-white text-center flex flex-col items-center justify-center font-monserrat'>
            
            <form onSubmit={handleSubmit} className='flex justify-centeritems-center flex-col min-h-content gap-[2%] w-[30%] bg-[#f3f3f3] rounded-[20px] p-[1%]'>
            <h1 className='text-[32px] mb-[5%]'>Giriş Yap</h1>
                <label htmlFor='username'>Kullanıcı Adı</label>
                <input id='username' type='text' name='username' onChange={handleChange} className='w-[70%] h-[5%] p-[10px] rounded-[10px] border text-[#000]' />

                <label htmlFor='password'>Şifre</label>
                <input id='password' type='password' name='password' onChange={handleChange} className='w-[70%] h-[5%] p-[10px] rounded-[10px] border text-[#000]'/>

                <button className='mt-[5%] mb-[4%] w-[15%] p-[10px] rounded-[10px] border-customGray bg-white text-customGray font-lora cursor-pointer hover:bg-customGray hover:text-white' type='submit'>{ wait ? "Giriş Yap" : "Lütfen Bekleyin.."}</button>
            </form>
        </section>
    );
};

export default Login;
 