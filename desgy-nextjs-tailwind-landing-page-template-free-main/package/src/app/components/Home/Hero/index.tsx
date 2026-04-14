'use client'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='relative overflow-hidden z-1 min-h-screen flex items-center'>
      <div className='absolute inset-0 pointer-events-none -z-10'>
        <Image
          src='/images/hero/hinh-3.jpg'
          alt='IIC hero background image'
          fill
          className='object-cover opacity-60'
        />

      </div>
      <div className='container mx-auto relative z-10 max-w-7xl px-4 w-full'>
        <div className='grid grid-cols-1 xl:grid-cols-12 items-center gap-12 min-h-screen py-16'>
          <div className='col-span-12 xl:col-span-7 xl:col-start-1 text-white'>
            {/* Eyebrow text */}
            <p className='uppercase tracking-widest text-sm text-white mb-4'>
              Trung tâm Đổi mới sáng tạo Công nghiệp 4.0 (IIC) tại Đại học Quốc tế Miền Đông (EIU)
            </p>
            {/* Main heading */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight uppercase text-white'>
              Giúp cải thiện năng suất và tối ưu hóa quy trình quản lý kinh doanh của doanh nghiệp.
            </h1>
            {/* Button */}
            <Link href={'#training-section'}>
              <button className='mt-10 bg-white text-green-600 text-lg font-semibold py-4 px-10 rounded-full hover:bg-gray-100 transition'>
                Liên hệ tư vấn
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
