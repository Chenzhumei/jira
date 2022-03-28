import { Button, Card, Divider } from "antd";
import React, { useState } from "react";
import { LoginScreen } from "./login";
import { RegisterScreen } from "./register";
import logo from "./../assets/logo.svg";
import left from "./../assets/left.svg";
import right from "./../assets/right.svg";

export default function UnauthenticatedApp() { 
    const [isRegister, setIsRegister] = useState(false);
    return <div style={containner}>
        <div style={header}></div>
        <div style={background}></div>
        <Card style={card}>
            {
                isRegister ? <RegisterScreen/> : <LoginScreen/>
            }
            <Divider />
            <Button type='link' onClick={() => setIsRegister(!isRegister)}>
                {isRegister ? "已经有账号了？直接登录" : "没有账号？注册新账号"}
            </Button>
        </Card>
    </div>
}

const containner: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh'
}

const background: React.CSSProperties = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'left bottom, right bottom',
  backgroundSize: 'calc(((100vw - 40rem) / 2) - 3.2rem), calc(((100vw - 40rem) / 2) - 3.2rem), cover',
  backgroundImage: `url(${left}), url(${right})`,
}

const card: React.CSSProperties = {
  width: '40rem',
  minHeight: '56rem',
  padding: '3.2rem 4rem',
  borderRadius: '0.3rem',
  boxSizing: 'border-box',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0 0 10px',
  textAlign: 'center'
}

const header = {
  background: `url(${logo}) no-repeat center`,
  padding: '5rem 0',
  backgroundSize: '8rem',
  width: '100%'
}