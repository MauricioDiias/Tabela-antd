import { Button, Form, Input, Table } from "antd"
import { useEffect } from "react";
import { useState } from "react";
export const Menu = () => {
    const [dataSource, setDatasource] = useState([]);
    const [edit, setEdit] = useState(null)
    const [form] = Form.useForm()
    useEffect(() => {
        setDatasource(data);
    }, [])
    const columns = [
        {
            title: 'Nome',
            dataIndex: 'name'
        },
        {
            title: 'Descrição',
            dataIndex: 'description',
            render: (text, record) => {
                if (edit === record.id) {
                    return <Form.Item
                        name='description'
                        rules={[
                            {
                                required: true,
                                message: "digite "
                            }
                        ]}>
                        <Input />
                    </Form.Item>
                } else {
                    return <p>{text}</p>
                }
            }
        },
        {
            title: 'Preço',
            dataIndex: 'price'
        },
        {
            title: 'Ingredientes',
            dataIndex: 'attributes',
            render: (_, { attributes }) => (

                <>
                    {attributes}
                </>
            )
        },
        {
            title: 'Editar',
            render: (_, record) => {
                return (
                    <>
                        <Button onClick={() => {
                            setEdit(record.id);
                            form.setFieldValue({
                                description: record.description
                            })

                        }}>Editar</Button>
                        <Button htmlType="submit">Save</Button>
                    </>
                )
            }
        }
    ];
   
    const onFinish = (values) => {
        console.log({ values })
        const updateDataSource = [...dataSource];
        updateDataSource.splice(edit, 1, { ...values, id:edit })
        setDatasource(updateDataSource)
        setEdit(null)

    };
    return (
        <>
            <Form form={form} onFinish={onFinish}>
                <Table
                    columns={columns}
                    dataSource={dataSource}>
                </Table>
            </Form>

        </>
    )
}


const data = [
    {
        "id": "1",
        "name": "Steak Frites",
        "description": "Bife grelhado acompanhado de batatas fritas",
        "price": "22.99",
        "attributes": ["carne", "batatas fritas", "grelhado"]
    },
    {
        "id": "2",
        "name": "Poulet à la crème",
        "description": "Frango em molho de creme e ervas",
        "price": "18.99",
        "attributes": ["frango", "creme", "ervas"]
    },
    {
        "id": "3",
        "name": "Sushi Maki",
        "description": "Conjunto de makis de peixe e vegetais",
        "price": "15.99",
        "attributes": ["peixe", "vegetais", "sushi"]
    },
    {
        "id": "4",
        "name": "Paella Valenciana",
        "description": "Paella de frutos do mar e arroz",
        "price": "21.99",
        "attributes": ["frutos do mar", "arroz"]
    },
    {
        "id": "5",
        "name": "Gnocchi al Pesto",
        "description": "Gnocchi em molho de pesto de manjericão",
        "price": "16.99",
        "attributes": ["gnocchi", "pesto", "manjericão"]
    }
]
