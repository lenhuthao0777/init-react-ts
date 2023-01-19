import { TableBaseBodyType, TableBaseHeaderType } from '@src/types/global.type'
import React, { useTransition } from 'react'
import { useTranslation } from 'react-i18next'

interface TableBaseProps {
  header: TableBaseHeaderType[] | undefined
  dataSource: TableBaseBodyType[]
}

const TableBase: React.FC<TableBaseProps> = ({ header, dataSource }) => {
  const { t } = useTranslation()

  return (
    <table>
      <thead>
        <tr>
          {header?.map((item) => (
            <th key={item.title}>{item.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{t('category')}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default TableBase
