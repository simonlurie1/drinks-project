import React from 'react';
import { Button, Form, Input, Radio } from 'antd';
import { useGetCocktailsQuery, useSetCocktailMutation } from '../../features/api/mockApiSlice';

const CreateDrink: React.FC = () => {
  const { data } = useGetCocktailsQuery();
  const [form] = Form.useForm();
  const [setCocktail] = useSetCocktailMutation();
  const submit = async () => {
    try {
      const values = await form.validateFields();

      const payload = {
        createdAt: new Date().toISOString(),
        name: 'simon',
        image: 'xxxx',
        category: values.category,
        alcoholic: values.alcoholic,
        instructions: values.instructions,
      };
      setCocktail(payload);
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };
  return (
    <div>
      <h1>CreateDrink</h1>

      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
      >
        <Form.Item
          hasFeedback
          label="name"
          name="name"
          validateTrigger="onBlur"
          rules={[{ required: true, message: 'Name is required!' }, { max: 50 }, { min: 3 }]}
        >
          <Input placeholder="Validate required onBlur" />
        </Form.Item>
        <Form.Item
          label="alcoholic"
          name="alcoholic"
          validateTrigger="onBlur"
          rules={[{ required: true }]}
        >
          <Radio.Group>
            <Radio value="alcoholic"> Alcoholic </Radio>
            <Radio value="non Alcoholic">Non Alcoholic </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="category"
          name="category"
          validateTrigger="onBlur"
          rules={[{ required: true }]}
        >
          <Radio.Group>
            <Radio value="Ordinary_Drink"> Ordinary_Drink </Radio>
            <Radio value="Cocktail">Cocktail </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="instructions" name="instructions">
          <Input.TextArea allowClear showCount />
        </Form.Item>
        {/*
        i tried some approach with fireBase to upload image to some storage but i had a cors error. so i didnt have a time to handle this

        <Form.Item label="Upload" valuePropName="file" getValueFromEvent={normFile}>
          <Upload listType="picture-card" maxCount={1}>
            <button
              style={{ border: 0, background: 'none' }}
              type="button"
            >
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
        </Form.Item>*/}

        <Button type="primary" htmlType="submit" onClick={() => submit()}>
          Submit
        </Button>
      </Form>
      {JSON.stringify(data, null, 2)}
    </div>
  );
};

export default CreateDrink;
