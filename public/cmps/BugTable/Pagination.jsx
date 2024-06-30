export function Pagination({ onChangePage, pageIdx, bugsInfo }) {

  const {pageCount, bugsCount, pageSize} = bugsInfo

  return (
    <div className="pagination flex flex-row align-center">
      <label>{(pageIdx * pageSize)+ 1}-{((pageIdx + 1) * pageSize > bugsCount) ? bugsCount : (pageIdx + 1) * pageSize} of {bugsCount}</label>
        <i
          onClick={() => onChangePage(-1)}
          className="fa-solid fa-chevron-left"
        ></i>
        <i
          onClick={() => onChangePage(1)}
          className="fa-solid fa-chevron-right"
        ></i>
    </div>
  )
}
