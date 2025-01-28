import React, { useState } from "react";
import { Button } from "antd";
import ListTable from "./components/ListTable";
import ListModal from "./components/ListModul";
import { DataType } from "./components/interface/DataType";  


const App: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [dataSource, setDataSource] = useState<DataType[]>([]);
  const [editRecord, setEditRecord] = useState<DataType | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (record?: DataType) => {
    if (record) {
      setFirstName(record.firstName);
      setLastName(record.lastName);
      setAge(record.age);
      setEditRecord(record);
    } else {
      setFirstName("");
      setLastName("");
      setAge("");
      setEditRecord(null);
    }
    setIsModalVisible(true);
  };

  const handleAddOrEdit = () => {
    if (editRecord) {
      const newData = dataSource.map((item) =>
        item.key === editRecord.key
          ? { ...item, firstName, lastName, age }
          : item
      );
      setDataSource(newData);
    } else {
      const newData: DataType = {
        key: `${dataSource.length + 1}`,
        firstName,
        lastName,
        age,
      };
      setDataSource([...dataSource, newData]);
    }
    setLastName("");
    setAge("");
    setIsModalVisible(false);

    setFirstName("");
    setLastName("");
    setAge("");
    setIsModalVisible(false);
    setEditRecord(null);
  };
  const handleDelete = (key: React.Key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditRecord(null);
  };
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
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        age={age}
        setAge={setAge}
        handleAddOrEdit={handleAddOrEdit}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default App;
