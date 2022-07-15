function getOffset(currentPage = 1, listPerPage) {
  return (currentPage - 1) * [listPerPage];
}

//   const result = (currentPage - 1) * [listPerPage];
//   console.log({ currentPage, listPerPage, result });
//   return result;

function emptyOrRows(rows) {
  if (!rows) {
    return [];
  }
  return rows;
}

module.exports = {
  getOffset,
  emptyOrRows,
};
