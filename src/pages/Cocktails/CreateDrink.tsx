import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Radio, Upload, FormInstance } from 'antd';
import { useGetCocktailsQuery, useSetCocktailMutation } from '../../features/api/mockSlice';

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

interface SubmitButtonProps {
  form: FormInstance;
}

const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({ form, children }) => {
  const [submittable, setSubmittable] = React.useState<boolean>(false);

  // Watch all values
  const values = Form.useWatch([], form);

  React.useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};

const CreateDrink: React.FC = () => {
  const { data } = useGetCocktailsQuery();
  const [setCocktail] = useSetCocktailMutation();
  const [form] = Form.useForm();
  const submit = () => {
    const payload = { createdAt: new Date().toISOString(), name: 'simon', avatar: 'xxxx' };
    setCocktail(payload);
  };
  return (
    <div>
      <h1>CreateDrink</h1>
      <button onClick={() => submit()}>Add new drink</button>
      {JSON.stringify(data, null, 2)}
      <Form
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
        <Form.Item label="Alcoholic">
          <Radio.Group>
            <Radio value="Alcoholic"> Alcoholic </Radio>
            <Radio value="Non Alcoholic">Non Alcoholic </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Category">
          <Radio.Group>
            <Radio value="Ordinary_Drink"> Ordinary_Drink </Radio>
            <Radio value="Cocktail">Cocktail </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Upload" valuePropName="file" getValueFromEvent={normFile}>
          <Upload listType="picture-card" maxCount={1}>
            <button
              style={{ color: 'inherit', cursor: 'inherit', border: 0, background: 'none' }}
              type="button"
            >
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
        </Form.Item>

        <SubmitButton form={form}>Submit</SubmitButton>
      </Form>
    </div>
  );
};

export default CreateDrink;
