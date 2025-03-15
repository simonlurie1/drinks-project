import React from 'react';
import { Button, Form, Input, Radio, App } from 'antd';
import { useGetCocktailsQuery, useSetCocktailMutation } from '../../../features/api/mockApiSlice';

import styles from './CreateDrink.module.scss';

const CreateDrink: React.FC = () => {
  const { data: myData } = useGetCocktailsQuery();
  const [form] = Form.useForm();
  const [setCocktail] = useSetCocktailMutation();
  const { notification } = App.useApp();
  const [submittable, setSubmittable] = React.useState<boolean>(false);

  const values = Form.useWatch([], form);

  React.useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  const submit = async () => {
    try {
      const values = await form.validateFields();

      const payload = {
        createdAt: new Date().toISOString(),
        name: values.name,
        image: 'N/A',
        category: values.category,
        alcoholic: values.alcoholic,
        instructions: values.instructions,
      };
      setCocktail(payload);

      form.resetFields();

      notification.success({
        message: 'Success',
        description: 'Drink was created successfully!',
        placement: 'topRight',
        duration: 4,
      });

      setTimeout(() => {
        // workaround for hide the validation after rest the form
        form.resetFields();
      }, 0);
    } catch (errorInfo) {
      notification.error({
        message: 'Error',
        description: 'Failed to create drink. Please try again.',
        placement: 'topRight',
      });
      console.error('Failed:', errorInfo);
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
        className={styles.form}
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

        <Button type="primary" htmlType="submit" onClick={() => submit()} disabled={!submittable}>
          Submit
        </Button>
      </Form>
      <br />
      <br />
      {myData && <h3>My list - ({myData?.length})</h3>}
      <ul className={styles.drinksList}>
        {myData?.map(drink => {
          return (
            <li key={drink.id}>
              {drink.name} - {drink.alcoholic}, {drink.category}, {drink.instructions}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CreateDrink;
