import PropTypes from "prop-types";

const CustomTable = ({ columnsName, data }) => {
  return <table>
    <thead>
      <tr>
        {columnsName.map((column, index) => (
          <th key={index}>{column}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          {columnsName.map((column, index) => (
            <td key={index}>{item[column]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
}

CustomTable.propTypes = {
  columnsName: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default CustomTable;