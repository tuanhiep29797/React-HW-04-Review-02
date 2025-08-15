import React, { useState } from 'react';

function NameManager() {
  const [name, setName] = useState('');
  const [nameList, setNameList] = useState([]);

  const handleAdd = () => {
    if (name.trim() === '') return;
    setNameList([...nameList, name.trim()]);
    setName('');
  };

  const handleDelete = (index) => {
    const updatedList = nameList.filter((_, i) => i !== index);
    setNameList(updatedList);
  };

  return (
    <div >
      <h2>📋 Quản lý danh sách tên</h2>
      <input
        type="text"
        value={name}
        placeholder="Nhập tên..."
        onChange={(e) => setName(e.target.value)}
        
      />
      <button onClick={handleAdd} >Thêm</button>

      <ul >
        {nameList.map((item, index) => (
          <li key={index} >
            {item}
            <button onClick={() => handleDelete(index)} >Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


;

export default NameManager;
