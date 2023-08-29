import { Pagination } from 'antd'
import React, { memo, useState } from 'react'

interface PageProps {
  page?: number | undefined
  total_page?: number | undefined
  page_size?: number | undefined
  onChange?: (page: any, pageSize: any) => void
}

const PaginationCustom: React.FC<PageProps> = ({ page = 1, total_page = 10, page_size = 10, onChange }) => {
  const [currPage, setCurrPage] = useState<number>(page)

  const change = (page: any, pageSize: any) => {
    setCurrPage(page)
    onChange && onChange(page, pageSize)
  }

  return (
    <div className='flex items-center justify-end mt-5'>
      <Pagination
        defaultCurrent={page}
        current={currPage}
        pageSize={page_size}
        total={total_page * page_size}
        hideOnSinglePage={false}
        showSizeChanger={false}
        showPrevNextJumpers={false}
        showQuickJumper={false}
        onChange={change}
      />
    </div>
  )
}

export default memo(PaginationCustom)
