'use client';

import { List, Space } from 'antd';
import Search from 'antd/es/input/Search';
import { useState } from 'react';
import Link from 'next/link';
import { IDataPersons, IPerson } from '@/lib/types/person';


const Main = ({ data }: IDataPersons) => {

  const [dataServer, setDataServer] = useState<IDataPersons>(data);
  const [loading , setLoading] = useState(false)

  const nextPage = async (page: number) => {
    setLoading(true)
    const data = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    const dataJSON = await data.json();
    setDataServer(dataJSON);
    setLoading(false)
  };

  const onSearch = async (value) =>{
    setLoading(true)
    const data = await fetch(`https://swapi.dev/api/people/?search=${value}`);
    const dataJSON = await data.json();
    setDataServer(dataJSON);
    setLoading(false)
  }

  return (
    <>
      <Space direction={'vertical'} style={{width: '50%'}}>
        <Search placeholder={'input search text'} onSearch={onSearch} allowClear/>
      </Space>
      <List
        grid={{ gutter: 8, column: 2 }}
        //bordered
        loading = {loading}
        itemLayout={'vertical'}
        size={'small'}
        pagination={{
          onChange:  async (page) => {
            await nextPage(page);
          },
          position: 'bottom',
          align: 'center',
          total: dataServer.count,
          showSizeChanger: false,
          pageSize: 10
        }}
        dataSource={dataServer.results}
        renderItem={(item: IPerson, index: number) => (
           <Link href={`/${item.url.trim().split("/").reverse()[1]}`}>
             <List.Item key={index} style={{border: '1px solid #001529', borderRadius: '8px', }}>
               <List.Item.Meta
                 title={item.name}
                 description={`gender: ${item.gender}, height: ${item.height}, mass: ${item.mass} `}
               />
               {`hair color: ${item.hair_color}, skin color: ${item.skin_color},
                 eye color: ${item.eye_color}, birth year: ${item.birth_year}`}
             </List.Item>
           </Link>
        )}
      />
    </>
  );
};

export default Main;