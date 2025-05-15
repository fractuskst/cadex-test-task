import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';
const { TextArea } = Input;

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const StyledTitle = styled.h1`
  margin-bottom: 30px;
  font-size: 72px;
`;

const StyledForm = styled(Form)`
  width: 320px;
  min-height: 410px;
  background-color: #fff;
  padding: 20px;
  border: 2px solid #e6e6e6;
  border-radius: 10px;
`;

const StyledFormItem = styled(Form.Item)`
  .ant-form-item-label > label {
    font-size: 16px;
  }
`;

const StyledInput = styled(Input)`
  height: 40px;
  font-size: 16px;
  font-family: 'Times New Roman', serif;

  &:focus,
  &:hover {
    border-color: #a1a1a1;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
`;

const StyledTextArea = styled(TextArea)`
  font-size: 16px;
  font-family: 'Times New Roman', serif;

  &:focus,
  &:hover {
    border-color: #a1a1a1;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: 40px;
  font-size: 16px;
`;

const ContactUsPage = () => {
  const [form] = Form.useForm();
  const [submissionResponse, setSubmissionResponse] = useState(null);

  const onFinish = async (values) => {
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      console.log(data.message);
      setSubmissionResponse(data.message);
      form.resetFields();
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  return (
    <StyledPage>
      {submissionResponse ? (
        <StyledTitle>Message generated on the server</StyledTitle>
      ) : (
        <>
          <StyledTitle>Only CTA on the page</StyledTitle>
          <StyledForm layout="vertical" requiredMark={false} onFinish={onFinish} form={form}>
            <StyledFormItem label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
              <StyledInput placeholder="Value" />
            </StyledFormItem>
            <StyledFormItem label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
              <StyledInput placeholder="Value" />
            </StyledFormItem>
            <StyledFormItem
              label="Message"
              name="message"
              rules={[{ required: true, message: 'Please input your message!' }]}
            >
              <StyledTextArea rows={3} placeholder="Value" />
            </StyledFormItem>
            <Form.Item>
              <StyledButton color="default" variant="solid" htmlType="submit">
                Submit
              </StyledButton>
            </Form.Item>
          </StyledForm>
        </>
      )}
    </StyledPage>
  );
};

export default ContactUsPage;
