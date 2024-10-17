import React from "react";
import { Input, Button } from "antd";

const FormSearchProduct = ({ searchTerm, setSearchTerm, onSearch }) => {
  return (
    <div className="flex items-center">
      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update search term
        placeholder="Tìm kiếm khóa học"
        style={{ width: 200 }}
      />
      <Button onClick={onSearch} type="primary" className="ml-2">
        Tìm kiếm
      </Button>
    </div>
  );
};

export default FormSearchProduct;