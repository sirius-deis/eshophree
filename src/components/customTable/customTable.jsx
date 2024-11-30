import PropTypes from "prop-types";
import { StyledTable } from './customTable.styles'

const CustomTable = ({ columnsName, data, customCols, wrappers }) => {
  return <StyledTable>
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
            wrappers[index] ? <td key={index}>{wrappers[index](item[column])}</td> : <td key={index}>{item[column]}</td>
          ))}
          {customCols && customCols.map((customCol, index) => (
            <td key={index}>{customCol(item._id)}</td>
          ))}

        </tr>
      ))}
    </tbody>
  </StyledTable>
}

CustomTable.propTypes = {
  columnsName: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  clickHandler: PropTypes.func,
  customCols: PropTypes.arrayOf(PropTypes.func),
  wrappers: PropTypes.arrayOf(PropTypes.node),
}

export default CustomTable;