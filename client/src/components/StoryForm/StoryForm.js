import React from 'react'
import {Card, Form, Input, Typography, Button} from "antd";
import styles from './styles';


const { Title } = Typography;

function StoryForm() {
  const [form] = Form.useForm();

  const onSubmit = () => {

  };


  return (
    <Card
      style={styles.formCard}
      title={
        <Title level={4} style={styles.formTitle}>

        </Title>
      }
    >
      <Form
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        layout="horizontal"
        size="middle"
        onFinish={onSubmit}
      
      >
        <Form.Item name="username" label="Username">
          <Input allowClear />
        </Form.Item>
      </Form>

    </Card>
  )
}

export default StoryForm