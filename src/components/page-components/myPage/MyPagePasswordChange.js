import React, { Component } from 'react';
import { Form, Input, Button, Col } from 'antd';
import classes from './MyPage.module.less';
import { withRouter } from 'react-router-dom';

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

class MypageContent extends Component {
  state = {
    name: '',
    password: '',
    confirmPassword: '',
  };

  handleOnPasswordInput(passwordInput) {
    this.setState({ password: passwordInput });
  }

  handleOnConfirmPasswordInput(confirmPasswordInput) {
    this.setState({ confirmPassword: confirmPasswordInput });
  }

  doesPasswordMatch() {
    const { password, confirmPassword } = this.state;
    return password === confirmPassword;
  }

  confirmPasswordClassName() {
    const { confirmPassword } = this.state;

    if (confirmPassword) {
      return this.doesPasswordMatch() ? 'is-valid' : 'is-invalid';
    }
  }

  renderFeedbackMessage() {
    const { confirmPassword } = this.state;

    if (confirmPassword) {
      if (!this.doesPasswordMatch()) {
        return <div className={classes.passwordFalse}>패스워드가 일치하지 않습니다!</div>;
      }
    }
  }

  findPassWord = () => {
    console.log('비밀번호찾기');
  };

  onClicks = (value) => {
    console.log(value);
  };

  onFinish = (values) => {
    console.log(values);
  };

  render() {
    return (
      <>
        <Col span={22} style={{ marginLeft: 100, marginTop: 80, height: 800 }}>
          <span style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 180, color: 'black' }}>비밀번호 변경</span>

          <div className={classes.subjectTopStyle}>
            <strong style={{ marginLeft: 58, color: 'skyblue' }}>
              비밀번호는 주기적(최소 6개월)으로 변경해 주시기 바랍니다.
            </strong>
          </div>

          <div className={classes.form_box} style={{ height: 370 }}>
            <h3 className={classes.form_text}>비밀번호 변경</h3>
            현재 비밀번호
            <Form name="basic" onFinish={this.onFinish} onFinishFailed={onFinishFailed}>
              <Form.Item name="CurrentPassword" rules={[{ required: true, message: '현재 비밀번호를 입력하세요' }]}>
                <Input type="password" placeholder="현재 비밀번호를 입력해주세요." style={{ width: 460 }} />
              </Form.Item>
              새로운 비밀번호
              <Form.Item rules={[{ required: true, message: '새로운 비밀번호를 입력해주세요' }]} name="NewPassword">
                <Input
                  type="password"
                  placeholder="새로운 비밀번호를 입력해주세요."
                  style={{ width: 460 }}
                  onChange={(e) => this.handleOnPasswordInput(e.target.value)}
                />
              </Form.Item>
              비밀번호 확인
              <Form.Item
                rules={[{ required: true, message: '새로운 비밀번호 확인을 위해 입력해주세요' }]}
                name="NewPasswordInspection"
              >
                <Input
                  type="password"
                  name="user"
                  placeholder="새로운 비밀번호 확인을 위해 입력해주세요."
                  style={{ width: 460 }}
                  onChange={(e) => this.handleOnConfirmPasswordInput(e.target.value)}
                />
              </Form.Item>
              {this.renderFeedbackMessage()}
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginLeft: 165, top: 10 }}
                className={classes.buttonstyle}
              >
                비밀번호 변경
              </Button>
            </Form>
          </div>
        </Col>
      </>
    );
  }
}

export default withRouter(MypageContent);
