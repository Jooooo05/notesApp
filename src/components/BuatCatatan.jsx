import { useState } from 'react'

function BuatCatatan({ onTambahCatatan }) {

    const [judul, setJudul] = useState('');
    const [isi, setIsi] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!judul.trim() || !isi.trim()) {
            alert('judul dan isi harus diisi');
            return;
        }

        onTambahCatatan(judul, isi);
        setJudul('');
        setIsi('');
    }

    return (
        <div className="w-[500px]">
            <h1 className="text-2xl">Buat Catatan</h1>

            <div className="mt-7">
                <form onSubmit={handleSubmit}>
                    {/* judul */}
                    <div className="">
                        <input 
                        className="w-full border border-white p-2 rounded-sm" 
                        type="text" 
                        placeholder="ini adalah judul"
                        value={judul}
                        onChange={(e) => setJudul(e.target.value)}
                        />
                    </div>
                    {/* catatannya */}
                    <div className="mt-4">
                        <textarea 
                        className="w-full border border-white p-2 rounded-sm" 
                        rows="7" 
                        placeholder="tuliskan catatanmu disini..."
                        value={isi}
                        onChange={(e) => setIsi(e.target.value)}
                        ></textarea>
                    </div>

                    {/* button */}
                    <button type="submit" className="w-full text-center border border-white rounded-sm py-2 cursor-pointer">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default BuatCatatan