import React, { Component } from 'react';
import classes from './ApplyMain.module.less';
import { Row, Select, Button, Modal, Radio, Input, Upload, Descriptions } from 'antd';
import { RetweetOutlined, UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}

class ApplyMain extends Component {
  state = {
    value: 1,
    realValue: '대표이력서',
    emailValue: 'sample@sample.com',
    phoneValue: '010',
    phoneValue2: '0000',
    phoneValue3: '0000',
    realemailValue: '',
    realphoneValue: '',
    visible: false,
    visible2: false,
  };

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    this.setState({
      visible: false,
      realValue: this.state.value,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  showModalTwo = () => {
    this.setState({
      visible2: true,
    });
  };

  handleOkTwo = (e) => {
    this.setState({
      visible2: false,
      realemailValue: this.state.emailValue,
      realphoneValue: this.state.phoneValue + '-' + this.state.phoneValue2 + '-' + this.state.phoneValue3,
    });
  };

  handleCancelTwo = (e) => {
    console.log(e);
    this.setState({
      visible2: false,
    });
  };

  onChange2 = (e) => {
    console.log(e.target.value);
    this.setState({
      emailValue: e.target.value,
    });
  };

  onChange3 = (e) => {
    console.log(e.target.value);
    this.setState({
      phoneValue: e.target.value,
    });
  };

  onChange4 = (e) => {
    console.log(e.target.value);
    this.setState({
      phoneValue2: e.target.value,
    });
  };

  onChange5 = (e) => {
    this.setState({
      phoneValue3: e.target.value,
    });
  };

  handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };

    const { value } = this.state;

    const props = {
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      onChange({ file, fileList }) {
        if (file.status !== 'uploading') {
          console.log(file, fileList);
        }
      },
    };

    return (
      <>
        <Row style={{ marginTop: '20px' }}>
          <b style={{ color: 'skyblue' }}>&nbsp;&nbsp;&nbsp;&nbsp;쿠도커뮤니케이션(주)</b>
        </Row>
        <Row>
          <h3>&nbsp;&nbsp;&nbsp;&nbsp;모바일/유니티/서버 개발자(경력) 정규직 채용</h3>
        </Row>
        <Row>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Select
            showSearch
            style={{ width: 500 }}
            placeholder="지원분야를 선택해주세요."
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="mobile">모바일 APP 개발</Option>
            <Option value="unity">Unity 개발</Option>
            <Option value="linux">Linux 시스템 개발자</Option>
          </Select>
        </Row>
        <Row>
          <div className={classes.background}>
            <div className={classes.divStyle}>
              <table>
                <tbody>
                  <tr>
                    <td width={'250px'}>
                      <b className={classes.bStyle}>지원이력서</b>
                    </td>
                    <td className={classes.tdStyle} width={'250px'}>
                      <Button className={classes.buttonStyle} type="primary" onClick={this.showModal}>
                        <h5>
                          <RetweetOutlined /> 이력서 변경
                        </h5>
                      </Button>

                      <Modal
                        title="이력서 선택"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                      >
                        <Radio.Group onChange={this.onChange} value={value}>
                          <Radio style={radioStyle} value={1}>
                            이력서1
                          </Radio>
                          <Radio style={radioStyle} value={2}>
                            이력서2
                          </Radio>
                          <Radio style={radioStyle} value={3}>
                            이력서3
                          </Radio>
                          <Radio style={radioStyle} value={4}>
                            More...
                            {value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
                          </Radio>
                        </Radio.Group>
                      </Modal>
                    </td>
                  </tr>
                </tbody>
              </table>
              <hr></hr>
              <div className={classes.inDivStyle}>
                <Input type="text" value={this.state.realValue} />
              </div>

              <div className={classes.inDivStyle}>
                <hr></hr>
                <h5>
                  <table>
                    <tbody>
                      <tr>
                        <td width={'400px'}>
                          이메일
                          <Input
                            type="text"
                            className={classes.inputStyle}
                            placeholder="khkim@kosta.com"
                            value={this.state.realemailValue}
                          />
                          &nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp; 휴대폰
                          <Input
                            type="text"
                            placeholder="010-1234-5678"
                            className={classes.inputStyle}
                            value={this.state.realphoneValue}
                          />
                          &nbsp;&nbsp;&nbsp;&nbsp;
                        </td>
                        <td style={{ textAlign: 'right' }} width={'100px'}>
                          <Button className={classes.buttonStyle} type="primary" onClick={this.showModalTwo}>
                            <h5>수정</h5>
                          </Button>

                          <Modal
                            title="이메일/휴대폰 수정"
                            visible={this.state.visible2}
                            onOk={this.handleOkTwo}
                            onCancel={this.handleCancelTwo}
                          >
                            <Descriptions bordered>
                              <Descriptions.Item label="이메일" span={3} className="paddingEmail">
                                <Input type="email" placeholder="이메일을 입력해주세요." onChange={this.onChange2} />
                              </Descriptions.Item>
                              <Descriptions.Item label="전화번호" span={3}>
                                {/* <Select id="txtMobile1" placeholder="010" onChange={this.onChange3}>
                                    <Option value="010">010</Option>
                                    <Option value="011">011</Option>
                                    <Option value="016">016</Option>
                                    <Option value="017">017</Option>
                                    <Option value="018">018</Option>
                                    <Option value="019">019</Option>
                                  </Select> */}
                                <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
                                  <Option value="jack">Jack</Option>
                                  <Option value="lucy">Lucy</Option>
                                  <Option value="disabled" disabled>
                                    Disabled
                                  </Option>
                                  <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                                <strong className={classes.PhoneNumberTextBox}>-</strong>
                                <Input
                                  type="text"
                                  placeholder="0000"
                                  minLength="4"
                                  maxLength="4"
                                  className={classes.PhoneNumberTextBox}
                                  onChange={this.onChange4}
                                />
                                <strong className={classes.PhoneNumberTextBox}>-</strong>
                                <Input
                                  type="text"
                                  placeholder="0000"
                                  minLength="4"
                                  maxLength="4"
                                  className={classes.PhoneNumberTextBox}
                                  onChange={this.onChange5}
                                />
                              </Descriptions.Item>
                            </Descriptions>
                            {/* <table>
                              <tbody>
                                <tr>
                                  <td width={'100px'}>이메일</td>
                                  <td width={'300px'}>
                                    <Input type="email" placeholder="이메일을 입력하세요." onChange={this.onChange2} />
                                  </td>
                                </tr>
                                <tr>
                                  <td>휴대폰수정</td>
                                  <td>
                                    <Input
                                      type="text"
                                      placeholder="휴대폰번호를 입력하세요."
                                      onChange={this.onChange3}
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table> */}
                          </Modal>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </h5>
              </div>
            </div>
            <div className={classes.divStyle}>
              <table>
                <tbody>
                  <tr>
                    <td width={'250px'}>
                      <b className={classes.bStyle}>선택항목</b>
                    </td>
                    <td className={classes.tdStyle} width={'250px'}>
                      <h5>
                        <Upload {...props}>
                          <Button>
                            <UploadOutlined /> 파일첨부
                          </Button>
                        </Upload>
                      </h5>
                    </td>
                  </tr>
                </tbody>
              </table>
              <hr></hr>
              <div className={classes.inDivStyle} style={{ textAlign: 'center' }}>
                <Input type="text" placeholder="추가로 항목을 첨부하실 수 있습니다." />
              </div>
            </div>

            <div className={classes.divButton}>
              <Button style={{ width: '200px' }} type="primary">
                지원하기
              </Button>
            </div>
          </div>
        </Row>
        <Row>
          <br></br>
        </Row>
      </>
    );
  }
}

export default ApplyMain;