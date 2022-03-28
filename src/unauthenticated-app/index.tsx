import { Button, Card } from "antd";
import React, { useState } from "react";
import { LoginScreen } from "./login";
import { RegisterScreen } from "./register";

export default function UnauthenticatedApp() { 
    const [isRegister, setIsRegister] = useState(false);
    return <div style={{display:'flex', justifyContent:'center'}}>
        <Card>
            {
                isRegister ? <RegisterScreen/> : <LoginScreen/>
            }
            <Button type='primary' onClick={() => setIsRegister(!isRegister)}>切换到{isRegister ? '登录' : '注册'}</Button>
        </Card>
    </div>
}