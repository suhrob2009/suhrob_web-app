import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/register.css'; // CSS faylini chaqiring
import img1 from "./img/Movie.png"
const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (password !== repeatPassword) {
      setError("Parollar mos kelmadi");
      return;
    }

    try {
      const response = await fetch('http://158.220.111.34:8084/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Ro\'yxatdan o\'tish muvaffaqiyatli', data);
        // Ro'yxatdan o'tish muvaffaqiyatli bo'lgan so'ng login sahifasiga yo'naltiring
        navigate('/login');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Ro\'yxatdan o\'tishda xatolik');
      }
    } catch (error) {
      setError('Ro\'yxatdan o\'tishda xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko\'ring.');
    }
  };

  return (
    <div className="container">
      <div className="logo"><img src={img1} alt="Logo" /></div>
      <div className="signup-form">
        <h2>Ro'yxatdan o'tish</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Elektron pochta manzili"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Parol"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Parolni qayta kiriting"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            required
          />
          <button type="submit">Hisob yaratish</button>
        </form>
        {error && <p className="error">{error}</p>}
        <p>Akkauntingiz bormi? <a href="/">Kirish</a></p>
      </div>
    </div>
  );
};

export default SignUpForm;
