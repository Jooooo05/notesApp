import { useState } from 'react'
import HeaderNote from "../components/HeaderNote";
import BuatCatatan from "../components/BuatCatatan";
import CardCatatan from "../components/CardCatatan";
import { getInitialData, showFormattedDate } from "../utils";

function App() {

  const [catatan, setCatatan] = useState(getInitialData());
  const [searchKeyword, setSearchKeyword] = useState('');

  // Fungsi pencarian
  const handleSearch = (keyword) => {
    setSearchKeyword(keyword.toLowerCase()); // Simpan kata kunci pencarian dalam lowercase untuk pencocokan case-insensitive
  };

  // Filter catatan berdasarkan pencarian
  const filteredNotes = catatan.filter((note) =>
    note.title.toLowerCase().includes(searchKeyword) ||
    note.body.toLowerCase().includes(searchKeyword)
  );

  // fungsi untuk menambahka catatan baru
  const handleTambahCatatan = (judul, isi) => {
      const newNote = {
          id: +new Date(),
          title: judul,
          body: isi,
          archived: false,
          createdAt: new Date().toISOString()
      };

      setCatatan([...catatan, newNote]);
  }

  // fungsi untuk menghapus catatan
  const  handleHapusCatatan = (id) => {
    const filteredNotes = catatan.filter((note) => note.id !== id);
    setCatatan(filteredNotes);
  };

  // fungsi untuk mengarsipkan catatan
  const handleArspCatatan = (id) => {
    setCatatan(catatan.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    ));
  };

  // fungsi seach catatan

  return (
    <>
    <main className="bg-[#202124] text-white px-28">
      <div className="">
        <HeaderNote onSearch={handleSearch}/>
      </div>

      {/* body */}
      <div className="">
        {/* buat catatan */}
        <div className="mt-8 mb-5 flex justify-center">
          <BuatCatatan onTambahCatatan={handleTambahCatatan}/>
        </div>
        {/* buat catatan */}

        <div className="mt-5">
            <h1 className="text-3xl">Catatan Aktif</h1>
        </div>

        {/* catatan aktif */}
        <div className="mt-5 flex flex-wrap gap-3">
          {filteredNotes.filter((note) => !note.archived).length === 0 ?(
            <p className="text-white">Tidak ada catatan yang aktif</p>
          ) : (
          filteredNotes
          .filter((note) => !note.archived)
          .map((note) => (
              <CardCatatan 
                  key={note.id}
                  id={note.id}
                  title={note.title}
                  body={note.body}
                  date={note.createdAt}
                  createdAt={showFormattedDate(note.createdAt)}
                  onHapusCatatan={handleHapusCatatan} //kirim fungsi hapuscatatan ke cardcatatan sebagai props
                  onArsipCatatan={handleArspCatatan} //kirim fungsi arsipcatatan ke cardcatatan sebagai props
                  isArchived ={note.archived}
              />
          ))
        )}
        </div>
        {/* catatan aktif */}

        <div className="mt-5">
            <h1 className="text-3xl">Catatan Arsip</h1>
        </div>

        {/* catatan arsip */}
        <div className="mt-5 flex flex-wrap gap-3">
        <div className="mt-5 flex flex-wrap gap-3">
          {filteredNotes.filter((note) => note.archived).length === 0 ?(
            <p className="text-white">Tidak ada catatan yang di arsip</p>
          ) : (
          filteredNotes
          .filter((note) => note.archived)
          .map((note) => (
              <CardCatatan 
                  key={note.id}
                  id={note.id}
                  title={note.title}
                  body={note.body}
                  date={note.createdAt}
                  createdAt={showFormattedDate(note.createdAt)}
                  onHapusCatatan={handleHapusCatatan} //kirim fungsi hapuscatatan ke cardcatatan sebagai props
                  onArsipCatatan={handleArspCatatan} //kirim fungsi arsipcatatan ke cardcatatan sebagai props
                  isArchived ={note.archived}
              />
          ))
        )}
        </div>
        </div>
        {/* catatan arsip */}
      </div>
      {/* body */}
    </main>  
    </>
  )
}

export default App
