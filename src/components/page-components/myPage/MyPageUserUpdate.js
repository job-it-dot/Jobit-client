import React, { Component } from 'react';
import { Col, Descriptions, Button, Input, Form, InputNumber, Radio, Select, Modal } from 'antd';
import css from './MyPage.module.less';
import './test.css';
import DaumPostcodes from './DaumPostcode';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

class MyPageUserUpdate extends Component {
  state = {
    name: '',
    age: '',
    number: '',
    gender: '',
    addr: '',
    Zipcode: '',
    roadAddress: '',
    value: 1,
  };

  state = { form: { message: '' } };

  handleChangeInput = (event) => {
    const { value, maxLength } = event.target;
    const message = value.slice(0, maxLength);

    this.setState({
      form: {
        message,
      },
    });
  };

  handleChangeInputs = (event) => {
    const { value, maxLength } = event.target;
    const message = value.slice(0, maxLength);

    this.setState({
      form: {
        message,
      },
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      financialGoal: '',
      financialGoals: '',
    };
  }

  handleChange(evt) {
    const financialGoal = evt.target.validity.valid ? evt.target.value : this.state.financialGoal;

    this.setState({ financialGoal });
  }

  handleChanges(evt) {
    const financialGoals = evt.target.validity.valid ? evt.target.value : this.state.financialGoals;

    this.setState({ financialGoals });
  }

  handleAddress = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    let Zipcode = data.zonecode;
    let roadAddress = data.roadAddress + data.buildingName;

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    this.setState({ addr: fullAddress });
    this.setState({ Zipcode: Zipcode });
    this.setState({ roadAddress: roadAddress });
    console.log(this.state.Zipcode);
    console.log(this.state.roadAddress);
  };

  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  onFinish = (values) => {
    console.log(values);
  };

  render() {
    const validateMessages = {
      required: '이름은 필수입니다.',
      types: {
        email: '이메일 형식으로 입력해주세요',
        number: '숫자만 입력 해주세요',
      },
      number: {
        range: '15~120만 가능합니다',
      },
    };

    return (
      <>
        <Col span={22} style={{ marginLeft: 20, marginTop: 80, height: 800 }}>
          <h3>회원정보 수정</h3>
          <Form name="nest-messages" validateMessages={validateMessages} onFinish={this.onFinish}>
            <Descriptions bordered>
              <Descriptions.Item label="이름" span={3} className="paddingName">
                <Form.Item
                  className="test"
                  name={['user', 'name']}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="정준영" name="name" />
                </Form.Item>
              </Descriptions.Item>
              <Descriptions.Item label="이메일" span={3} className="paddingEmail">
                <Form.Item
                  name={['user', 'email']}
                  rules={[
                    {
                      type: 'email',
                    },
                  ]}
                >
                  <Input placeholder="wnsdud@naver.com" />
                </Form.Item>
              </Descriptions.Item>

              <Descriptions.Item label="전화번호" span={3}>
                <Select placeholder="010" onChange={handleChange}>
                  <Option value="010">010</Option>
                  <Option value="011">011</Option>
                  <Option value="016">016</Option>
                  <Option value="017">017</Option>
                  <Option value="018">018</Option>
                  <Option value="019">019</Option>
                </Select>
                <strong className={css.PhoneNumberTextBox}>-</strong>

                <Input
                  type="text"
                  placeholder="8544"
                  pattern="[0-9]*"
                  maxLength="4"
                  onInput={this.handleChange.bind(this)}
                  value={this.state.financialGoal}
                  onChange={this.handleChangeInput}
                  className={css.PhoneNumberTextBox}
                />

                <strong className={css.PhoneNumberTextBox}>-</strong>

                <Input
                  type="text"
                  placeholder="6458"
                  pattern="[0-9]*"
                  maxLength="4"
                  onInput={this.handleChanges.bind(this)}
                  value={this.state.financialGoals}
                  onChange={this.handleChangeInputs}
                  className={css.PhoneNumberTextBox}
                />
              </Descriptions.Item>

              <Descriptions.Item label="생년월일" span={5} className={css.font}>
                <strong style={{ color: 'gray' }}>1997년 12월 27일</strong>
              </Descriptions.Item>
              <Descriptions.Item label="나이" span={2} className="paddingAge">
                <Form.Item
                  className="sizeAge"
                  name={['user', 'age']}
                  rules={[
                    {
                      type: 'number',
                      initialValues: 24,
                      min: 15,
                      max: 120,
                    },
                  ]}
                >
                  <InputNumber initialValues={24} />
                </Form.Item>
              </Descriptions.Item>
              <Descriptions.Item label="성별" span={2}>
                <Form.Item name={['user', 'gender']}>
                  <Radio.Group onChange={this.onChange} value={this.state.value}>
                    <Radio value={'남성'} style={{ color: 'gray' }}>
                      남성
                    </Radio>
                    <Radio value={'여성'} style={{ color: 'gray' }}>
                      여성
                    </Radio>
                  </Radio.Group>
                </Form.Item>
              </Descriptions.Item>
              <Descriptions.Item label="우편번호/도로명주소" span={4}>
                <Input placeholder="16582" value={this.state.Zipcode} onClick={this.showModal} />

                <Input
                  placeholder="경기 수원시 권선구 권광로 55권선자이 이편한세상"
                  value={this.state.roadAddress}
                  onClick={this.showModal}
                  style={{ top: 5 }}
                />

                <Modal title="주소 검색" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
                  <DaumPostcodes onComplete={this.handleAddress} />
                </Modal>
              </Descriptions.Item>

              <Descriptions.Item label="주소" span={10}>
                <Form.Item name={['user', 'addr']}>
                  <Input placeholder="519동 207호" />
                </Form.Item>
              </Descriptions.Item>
            </Descriptions>
            <Button style={{ left: 240 }} className={css.buttonstyle} type="primary" htmlType="submit">
              수정하기
            </Button>
            <Button style={{ left: 270 }} className={css.buttonstyle}>
              취소
            </Button>
          </Form>
        </Col>
      </>
    );
  }
}

export default MyPageUserUpdate;
