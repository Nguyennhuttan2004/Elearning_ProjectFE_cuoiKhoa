import React, { useEffect, useState } from 'react'
import useResponsive from '../../hooks/useReponsive'
import Banner from '../Banner/Banner'
import InputCustom from '../Input/InputCustom'
import IconSearch from '../Icon/IconSearch'
import { Link, useNavigate } from 'react-router-dom'
import { pathDefault } from '../../common/path'
import { congViecService } from '../../services/congViec.service'
import { Dropdown } from 'antd'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import useDebounce from '../../hooks/useDebounce'

const FormSearchProduct = () => {
  const navigate = useNavigate()
  const [valueSearch, setValueSearch] = useState("")
  const [checkDropdown, setCheckDropdown] = useState(false)
  const [listJobSuggest, setListJobSuggest] = useState([
    {
      key: 1,
      label: "Hello"
    }
  ])
  const debounceValue = useDebounce(valueSearch, 1000)
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(valueSearch)
    navigate(`${pathDefault.listJob}?tenCongViec=${valueSearch}`)
  }

  useEffect(() => {
    if (valueSearch) {
      // Gọi API lấy dữ liệu sản phẩm để gợi ý người dùng
      congViecService.layCongViecTheoTen(valueSearch).then((res) => {
        const newListJobSuggest = res.data.content.slice(0, 4).map((item, index) => {
          return {
            key: index.toString(),
            label: <Link to={`/cong-viec-chi-tiet/${item.id}`} className="flex items-center space-x-4">
              <img src={item.congViec.hinhAnh} className='h-14' alt="" />
              <div>
                <h4>{item.congViec.tenCongViec}</h4>
                <p>{item.congViec.giaTien}</p>
              </div>
            </Link>
          }
        })
        console.log(newListJobSuggest)
        setListJobSuggest(newListJobSuggest)
        setCheckDropdown(true)
      }).catch((err) => {
        console.log(err)
      })
    }
  }, [debounceValue])

  const handleChange = (event) => {
    // const { value, name } = event.target //email
    setValueSearch(event.target.value)
    if (!event.target.value) {
      setCheckDropdown(false)
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Dropdown
          menu={{
            items: listJobSuggest
          }}
          open={checkDropdown}
        >
          <div className='pl-4 rounded-md border border-gray-400 flex items-center justify-between min-w-[400px]'>
            <input type="text" placeholder='Vui lòng nhập vào công việc cần kiếm' className='flex-1 focus:border-none focus:outline-none' onChange={handleChange} value={valueSearch} />
            <button type='submit' className="p-2"><IconSearch size={30} color='rgb(156 163 175)' /></button>
          </div>
        </Dropdown>
      </form>
    </div>
  )
}

export default FormSearchProduct