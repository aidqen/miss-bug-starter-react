export function Pagination({ onChangePage, pageIdx, bugsInfo }) {

  const {pageCount, bugsCount} = bugsInfo

  return (
    <div className="pagination flex flex-row align-center">
      <label>{(pageIdx * 4)+ 1}-{((pageIdx + 1) * 4 > bugsCount) ? bugsCount : (pageIdx + 1) * 4} of {bugsCount}</label>
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
