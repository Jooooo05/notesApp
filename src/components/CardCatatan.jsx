
function CardCatatan( { id, title, body, createdAt, onHapusCatatan, onArsipCatatan, isArchived  } ) {


    // const cobaId = (id) => {
    //     console.log(id)
    // }

    return (
        <div className="w-80 border border-white  rounded-sm flex flex-col justify-between">
            {/* header */}
            <div className="p-5">
                <h1 className="text-2xl">{title}</h1>
                <h6 className="text-sm">{createdAt}</h6>
                <p>{body}</p>
            </div>
            {/* header */}

            {/* buttonn */}
            <div className="mt-5 flex ">
                <button
                type="button"
                className="text-red-400 cursor-pointer basis-1/2 border-t border-r border-white p-2"
                onClick={() => onHapusCatatan(id)} 
                >Delete</button>
                <button
                type="button"
                className="text-yellow-400 cursor-pointer basis-1/2 border-t border-r border-white"
                onClick={() => onArsipCatatan(id)}
                >{isArchived ? "Atifkan" : "Arsipkan"}</button>
            </div>

        </div>
    )
}

export default CardCatatan;