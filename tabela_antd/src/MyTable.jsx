
import { Table, Select } from 'antd';
import { useState } from 'react';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Tags',
    dataIndex: 'tags',
    render: (text, record) => (
      <Select
        mode="tags"
        style={{ width: '100%' }}
        value={text}
        onChange={(value) => handleTagChange(value, record.key)}
      >
        {options.map((item) => (
          <Select.Option key={item}>{item}</Select.Option>
        ))}
      </Select>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Doe',
    tags: ['tag1', 'tag2'],
  },
  {
    key: '2',
    name: 'Jane Doe',
    tags: ['tag3', 'tag4'],
  },
];


const handleTagChange = (value, key) => {
  // update the data with the new tags here
  // setData(prevData => prevData.map(item => item.key === key ? {...item, tags: value} : item));
};
const options = ['tag1', 'tag2', 'tag3', 'tag4'];

const MyTable = () => {
  const [data, setData] = useState(data);
  console.log(setData)
  return (
    <Table
    columns={columns}
    dataSource={data}
    pagination={false}
    />
    );
  };

export default MyTable




































// import { Table, Select } from 'antd';

// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     editable: true,
//   },
//   {
//     title: 'Tags',
//     dataIndex: 'tags',
//     render: (text, record) => {
//       console.log(text)
//      return <Select
      
//       mode="tags"
//       style={{
//         width: '100%',
//       }}
//       placeholder="Tags Mode"
//       onChange={handleChange}
//       options={text.map((t)=>({
//         label:t,
//         value:t
//       }))}
    
//       >
        
//       </Select>
//   },
//   },
// ];
// const handleChange = (value) => {
//   console.log(`selected ${value}`);}
// const data = [
//   {
//     key: '1',
//     name: 'John Doe',
//     tags: ['tag1', 'tag2'],
//   },
//   {
//     key: '2',
//     name: 'Jane Doe',
//     tags: ['tag3', 'tag4'],
//   },
// ];

// const handleTagChange = (value, key) => {
//   // handle the change of tags here
// };

// const options = ['tag1', 'tag2', 'tag3', 'tag4'];

//  const MyTable = () => {
//   return (
//     <Table
//       columns={columns}
//       dataSource={data}
//       pagination={false}
//     />
//   );
// };
// export default MyTable

