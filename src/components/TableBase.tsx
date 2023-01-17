import React from 'react'

interface TableBaseProps {
  data: any
}

const TableBase: React.FC<TableBaseProps> = ({ data }) => {
  console.log(data)

  return (
    <table>
      <thead>
        <tr>
          <th>abc</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>abc 1</td>
        </tr>
      </tbody>
    </table>
  )
}

export default TableBase
