import React, { useState } from "react";
import { Button } from "antd";
import ListTable from "./components/ListTable";
import ListModal from "./components/ListModul";
import { DataType } from "./components/interface/DataType";

const App: React.FC = () => {
  const [dataSource, setDataSource] = useState<DataType[]>([]);
  const [editRecord, setEditRecord] = useState<{ 
    firstName: string;
     lastName: string; 
     age: string; 
     key?: string} | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (record?: DataType) => {
    if (record) {
      setEditRecord({
        firstName: record.firstName,
        lastName: record.lastName,
        age: record.age,
        key: record.key,
      });
    } else {
      setEditRecord({ firstName: "", lastName: "", age: "" });
    }
    setIsModalVisible(true);
  };

  const handleAddOrEdit = () => {
    if (!editRecord) return;

    if (editRecord.key) {
      const newData = dataSource.map((item) =>
        item.key === editRecord.key
          ? { ...item, firstName: editRecord.firstName, lastName: editRecord.lastName, age: editRecord.age }
          : item
      );
      setDataSource(newData);
    } else {
      const newData: DataType = {
        key: `${dataSource.length + 1}`,
        firstName: editRecord.firstName,
        lastName: editRecord.lastName,
        age: editRecord.age,
      };
      setDataSource([...dataSource, newData]);
    }

    setEditRecord(null);
    setIsModalVisible(false);
  };

  const handleDelete = (key: React.Key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditRecord(null);
  };

  return (
    <div>
      <Button
        onClick={() => showModal()}
        type="primary"
        style={{ marginBottom: 16 }}
      >
        Add User
      </Button>
      <ListTable
        dataSource={dataSource}
        handleDelete={handleDelete}
        showModal={showModal}
      />
      <ListModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        firstName={editRecord?.firstName || ""}
        setFirstName
        lastName={editRecord?.lastName || ""}
        setLastName
        age={editRecord?.age || ""}
        setAge
        handleAddOrEdit={handleAddOrEdit}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default App;
