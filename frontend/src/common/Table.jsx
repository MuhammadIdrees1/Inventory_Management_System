const Table = ({ data, column }) => {
  return (
    <div>
      <table class="mt-5 w-full text-left text-sm text-gray-500">
        <thead className="border-b bg-white text-xs uppercase text-gray-700">
          <tr class="bg-white">
            <th scope="col" class="p-4 text-[#C5CCE1]">
              Id
            </th>
            {column.map((item, index) => (
              <TableHeadItem item={item} />
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <TableRow item={item} column={column} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TableHeadItem = ({ item }) => (
  <th scope="col" class="p-4 text-[#C5CCE1]">
    {item.heading}
  </th>
);

const TableRow = ({ item, column, index }) => (
  <tr class="bg-white">
    <td className="px-4 py-4">{index + 1}</td>
    {column.map((columnItem, index) => {
      if (columnItem.value.includes(".")) {
        const itemSplit = columnItem.value.split("."); //['address', 'city']
        return (
          <td className="px-4 py-4">{item[itemSplit[0]][itemSplit[1]]}</td>
        );
      }

      return (
        <>
          <td className="px-4 py-4">{item[`${columnItem.value}`]}</td>
        </>
      );
    })}
  </tr>
);

export default Table;
