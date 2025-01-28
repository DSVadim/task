import React from "react";
import { Button, Table } from "antd";
import { DataType } from "./interface/DataType"; 

interface ListTableProps {
  dataSource: DataType[];
  handleDelete: (key: React.Key) => void;
  showModal: (record?: DataType) => void;
}

const ListTable: React.FC<ListTableProps> = ({ dataSource, handleDelete, showModal }) => {
  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Operation",
      dataIndex: "operation",
      render: (_: any, record: DataType) => (
        <>
          <Button onClick={() => showModal(record)} type="link">
            Edit
          </Button>
          <Button onClick={() => handleDelete(record.key)} type="link">
            Delete
          </Button>
        </>
      ),
    },
  ];

  return <Table columns={columns} dataSource={dataSource} rowKey="key" />;
};

export default ListTable;
