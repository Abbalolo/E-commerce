


// eslint-disable-next-line react/prop-types
function Pagination({totalPosts, postPerPage, setCurrentPage, currentPage}) {

    let pages = []

    for (let i = 1 ; i <= Math.ceil(totalPosts/postPerPage); i++) {
        pages.push(i)
        
    }
  return (
    <div className="pagination">
        {
       pages.map((page, index) => {
        return <button className={page === currentPage ? "active" : "paginate"} key={index} onClick={() => setCurrentPage(page)}>{page}</button>
       })
        }
    </div>
  )
}

export default Pagination