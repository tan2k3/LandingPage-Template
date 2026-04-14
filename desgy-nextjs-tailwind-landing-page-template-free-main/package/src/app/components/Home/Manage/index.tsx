'use client'
import { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import Image from 'next/image'
import PlansSkeleton from '../../Skeleton/Plans'
import Link from 'next/link'

const Manage = () => {
  const [plans, setPlans] = useState<any[]>([])
  const [loading, setLoding] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setPlans(data.PlansData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoding(false)
      }
    }
    fetchData()
  }, [])

  const [enabled, setEnabled] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<
    'yearly' | 'monthly'
  >('yearly')

  const toggleEnabled = () => {
    // Toggle the enabled state
    setEnabled((prevEnabled) => !prevEnabled)

    // Update selected category based on the switch position
    setSelectedCategory((prevCategory) =>
      prevCategory === 'yearly' ? 'monthly' : 'yearly'
    )
  }

  const filteredData = plans.map((plan) => ({
    ...plan,
    price: plan.price[selectedCategory],
  }))

  return (
    <section id='training-section'>
      <div className='container mx-auto max-w-7xl px-4'>
        <h2 className='text-center text-3xl font-bold'>
          Đào tạo doanh nghiệp Công nghiệp 4.0 theo nhu cầu thực tế
        </h2>
        <p className='text-center text-lg text-slate-700 mt-4'>
          IIC cung cấp các chương trình ngắn hạn và dài hạn với nội dung thực hành, đào tạo tại doanh nghiệp hoặc trực tiếp tại trung tâm.
        </p>
        <div className='flex flex-col sm:flex-row gap-5 justify-center mt-12 items-center'>
          <div className='flex gap-3 items-center'>
            <Image
              src='/images/manage/right.svg'
              alt='right-icon'
              width={21}
              height={14}
            />
            <p className='text-lg font-semibold'>Đào tạo tại doanh nghiệp hoặc IIC</p>
          </div>
          <div className='flex gap-3 items-center'>
            <Image
              src='/images/manage/right.svg'
              alt='right-icon'
              width={21}
              height={14}
            />
            <p className='text-lg font-semibold'>Chương trình thực tế và chuyên sâu</p>
          </div>
          <div className='flex gap-3 items-center'>
            <Image
              src='/images/manage/right.svg'
              alt='right-icon'
              width={21}
              height={14}
            />
            <p className='text-lg font-semibold'>Giảng viên và chuyên gia EIU trực tiếp hướng dẫn</p>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-14 manage'>
          {loading
            ? Array.from({ length: 3 }).map((_, i) => <PlansSkeleton key={i} />)
            : filteredData.map((items, i) => (
                <div
                  className='shadow-manage-shadow border border-border text-center p-10 rounded-3xl'
                  key={i}>
                  <h5 className='mb-3'>{items.heading}</h5>
                  <p className='text-sm font-medium mb-6'>{items.user}</p>
                  <Link href={'#first-section'}>
                    <button className='text-sm font-bold text-primary bg-transparent hover:bg-primary hover:text-white border-2 border-primary rounded-full py-4 px-12 mb-6 hover:cursor-pointer'>
                      Liên hệ tư vấn
                    </button>
                  </Link>
                  {Object.entries(items.features).map((value: any, index) => (
                    <p
                      className='text-sm font-medium text-darkgrey mb-3'
                      key={index}>
                      {value[1]}
                    </p>
                  ))}
                </div>
              ))}
        </div>
      </div>
    </section>
  )
}

export default Manage
