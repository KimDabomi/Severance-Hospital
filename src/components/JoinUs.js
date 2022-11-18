import React, {memo,useState} from 'react';
import { useNavigate } from 'react-router-dom';

const JoinUs = memo(() => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [sparetel, setSparetel] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const onNameHandler = e => {
    setName(e.currentTarget.value);
  }

  const onTelHandler = e => {
    setTel(e.currentTarget.value);
  }

  const onSparetelHandler = e => {
    setSparetel(e.currentTarget.value);
  }

  const onEmailHandler = e => {
      setEmail(e.currentTarget.value);
  }

  const onPasswordHandler = e => {
      setPassword(e.currentTarget.value);
  }

  const onConfirmPasswordHandler = e => {
      setConfirmPassword(e.currentTarget.value);
  }

  const onSubmit = e => {
    e.preventDefault();
    if(password !== confirmPassword) {
      return alert('비밀번호와 비밀번호확인은 같아야 합니다.');
    } else {
      navigate('/login');
    }
  }

  return (
    <div className="JoinUs">
      <form>
          <input name="name" type="text" placeholder="이름" value={name} onChange={onNameHandler} className="name_input"/>
          <input name="tel" type="number" placeholder="전화번호" value={tel} onChange={onTelHandler} className="tel_input"/>
          <input name="sparetel" type="number" placeholder="예비전화번호" value={sparetel} onChange={onSparetelHandler} className="sparetel_input"/>
          <input name="email" type="email" placeholder="이메일" value={email} onChange={onEmailHandler} className="email_input"/>
          <input name="password" type="new_password" placeholder="비밀번호" value={password} onChange={onPasswordHandler} className="password_input"/>
          <input name="confirmPassword" type="new_password" placeholder="비밀번호 확인" value={confirmPassword} onChange={onConfirmPasswordHandler} className="confirmPassword_input"/>
          <button type="submit" onSubmit={onSubmit} className="Join_button">계정 생성하기</button>
      </form>
    </div>
  );
});
export default JoinUs;