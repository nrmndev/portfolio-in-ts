import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

type Props = {
  length: number;
  itemsPerPage: number;
  onClick: (currentPage: number) => void;
};
const Paginations = (props: Props) => {
  const pageNumbers = []; //Initialize array of number
  for (let i = 1; i <= Math.ceil(props.length / props.itemsPerPage); i++) {
    pageNumbers.push(i); //Assign how many paginations
  }
  const lastPage = pageNumbers.slice(-1)[0];

  const onClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const currentPage = Number(e.currentTarget.getAttribute("data-pagenumber"));
    props.onClick(currentPage);
  };

  const PaginationJSX = (
    <nav aria-label="Page navigation example" style={{ marginTop: 30 }}>
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button
            className="page-link"
            aria-label="first link"
            onClick={onClick}
            data-pagenumber="1"
          >
            <BsChevronLeft />
          </button>
        </li>
        {pageNumbers.map((number) => {
          return (
            <li key={number} className="page-item">
              <button
                className="page-link"
                onClick={onClick}
                data-pagenumber={number}
              >
                {number}
              </button>
            </li>
          );
        })}
        <li className="page-item">
          <button
            className="page-link"
            aria-label="first link"
            onClick={onClick}
            data-pagenumber={lastPage}
          >
            <BsChevronRight />
          </button>
        </li>
      </ul>
    </nav>
  );

  return PaginationJSX;
};

export default Paginations;
