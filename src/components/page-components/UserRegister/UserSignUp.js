import React from 'react';
import { Button, Col, Divider, Form, Input } from 'antd';
import { LockOutlined, UserOutlined, MobileOutlined } from '@ant-design/icons';
import classes from './UserSignUp.module.less';
import kakaologin from '../../../assets/kakaologin.png';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const kakaoLoginButton = () => {
    console.log('카카오로그인');
  };

  return (
    <Col xs={{ span: 24 }} sm={{ span: 12, offset: 6 }} md={{ span: 8, offset: 8 }}>
      <h1 className={classes.title}>
        초.간.단 회원가입하고
        <br />
        취준생 탈출하자!
      </h1>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: '아이디를 입력하세요',
            },
          ]}
        >
          <Input
            size={'large'}
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="계정을 입력해 주세요(이메일)"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '비밀번호를 입력하세요',
            },
          ]}
        >
          <Input
            size={'large'}
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            minLength="8"
            maxLength="16"
            placeholder="비밀번호를 입력해 주세요"
          />
        </Form.Item>
        <Form.Item
          name="password2"
          rules={[
            {
              required: true,
              message: '비밀번호를 입력하세요',
            },
          ]}
        >
          <Input
            size={'large'}
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            minLength="8"
            maxLength="16"
            placeholder="비밀번호를 한번 더 입력해 주세요"
          />
        </Form.Item>
        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: '휴대폰 번호를 입력하세요',
            },
          ]}
        >
          <Input
            size={'large'}
            prefix={<MobileOutlined className="site-form-item-icon" />}
            type="text"
            placeholder="휴대폰 번호를 입력하세요"
          />
        </Form.Item>
        <Form.Item>
          <Button block size={'large'} type="primary" htmlType="submit" className="login-form-button">
            회원가입
          </Button>
          <div style={{ marginTop: 8 }}>
            이미 회원이신가요? <Link to="/login">로그인</Link>
          </div>
        </Form.Item>
      </Form>
      <Divider />
      <div>
        <button onClick={kakaoLoginButton} className={classes.kakao_button}>
          <img src={kakaologin} height={50} alt="카카오로그인" />
        </button>
      </div>
    </Col>
  );
};

export default LoginForm;
