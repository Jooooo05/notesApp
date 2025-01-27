import { useState } from "react";

function HeaderNote({ onSearch }) {

  const [search, setSearch] = useState('');

  const handleSearchChange  = (e) => {
    const keyword = e.target.value;
    setSearch(keyword);
    onSearch(keyword);
  };


  return (
    <div className="py-4 flex justify-between items-center border-b border-white ">
      <h1 className="text-3xl">Notes Apss</h1>

      {/* searching */}
      <div className="">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          className="w-[300px] border border-white rounded-sm p-2"
          placeholder="searching..."
        />
      </div>
      {/* searching */}
    </div>
  );
}

export default HeaderNote;