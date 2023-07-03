
import ReactDOM from 'react-dom'

function Loder() {
  return ReactDOM.createPortal (
    <div className='loader'>
        <div className="loader-blur">
            <div className="loadingio-spinner-spinner-35sbw7ty12l"><div className="ldio-ao25frmi9z">
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div></div>   
        </div>
    </div>,
    document.getElementById("loader")
  )
}

export default Loder