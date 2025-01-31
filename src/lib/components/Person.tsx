'use client';

import { Button, Form, FormProps, Input, InputNumber, Radio, Space } from 'antd';
import { IPerson } from '@/lib/types/person';
import { useState } from 'react';
import { CheckboxGroupProps } from 'antd/lib/checkbox';

type FieldType = {
  username?: string;
  height?: number,
  mass?: number,
  hairColor?: string,
  skinColor?: string,
  eyeColor?: string,
  birthYear?: string,
  gender?: 'male' | 'female',
  homeWorld?: string,
  created?: string,
  edited?: string,
  url?: string
};

export default function Person({ dataPerson }: IPerson) {

  const [edit, setEdit] = useState(false);

  const options: CheckboxGroupProps<string>['options'] = [
    { label: 'male', value: 'male' },
    { label: 'female', value: 'female' },
    { label: 'other', value: 'other' }
  ];

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {



  };

  return (

    <Space direction={'vertical'} align={'center'}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button type="primary" onClick={() => setEdit(!edit)}>
          {edit ? 'Cancel' : 'Edit'}
        </Button>
      </div>

      <Form
        disabled={!edit}
        layout={'vertical'}
        initialValues={{
          username: dataPerson.name,
          height: +dataPerson.height,
          mass: +dataPerson.number,
          hairColor: dataPerson.hair_color,
          skinColor: dataPerson.skin_color,
          eyeColor: dataPerson.eye_color,
          birthYear: dataPerson.birth_year,
          gender: dataPerson.gender,
          homeWorld: dataPerson.homeworld
        }}
      >
        <Form.Item<FieldType>
          label="Name"
          name="username"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Height"
          name="height"
        >
          <InputNumber min={1} max={300} />
        </Form.Item>

        <Form.Item<FieldType>
          label="Mass"
          name="height"
        >
          <InputNumber min={1} max={500} />
        </Form.Item>

        <Form.Item<FieldType>
          label="Hair color"
          name="hairColor"
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Skin Color"
          name="skinColor"
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Eye Color"
          name="eyeColor"
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Birth year"
          name="birthYear"
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Gender"
          name="gender"
        >
          <Radio.Group
            options={options}
          />
        </Form.Item>

        <Form.Item<FieldType>
          label="Home world"
          name="homeworld"
          rules={[{ type: 'url', warningOnly: true }]}
        >
          <Input />
        </Form.Item>

        {edit &&
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        }

      </Form>
    </Space>

  );
}