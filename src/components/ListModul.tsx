import React from "react";
import { Modal, Input } from "antd";

interface ListModalProps {
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  firstName: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  lastName: string;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  age: string;
  setAge: React.Dispatch<React.SetStateAction<string>>;
  handleAddOrEdit: () => void;
  handleCancel: () => void;
}

const ListModal: React.FC<ListModalProps> = ({
  isModalVisible,
  setIsModalVisible,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  age,
  setAge,
  handleAddOrEdit,
  handleCancel,
}) => {
  return (
    <Modal
      title="Add/Edit User"
      onCancel={handleCancel}
      onOk={handleAddOrEdit} 
    >
      <Input
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        style={{ marginBottom: 8 }}
      />
      <Input
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        style={{ marginBottom: 8 }}
      />
      <Input
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
    </Modal>
  );
};

export default ListModal;
