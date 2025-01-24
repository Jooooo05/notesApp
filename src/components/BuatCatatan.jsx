
function BuatCatatan() {
    return (
        <div className="w-[500px]">
            <h1 className="text-2xl">Buat Catatan</h1>

            <div className="mt-7">
                <form>
                    {/* judul */}
                    <div className="">
                        <input className="w-full border border-white p-2 rounded-sm" type="text" placeholder="ini adalah judul"/>
                    </div>
                    {/* catatannya */}
                    <div className="mt-4">
                        <textarea className="w-full border border-white p-2 rounded-sm" rows="7" placeholder="tuliskan catatanmu disini..."></textarea>
                    </div>

                    {/* button */}
                    <button type="submit" className="w-full text-center border border-white rounded-sm py-2">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default BuatCatatan