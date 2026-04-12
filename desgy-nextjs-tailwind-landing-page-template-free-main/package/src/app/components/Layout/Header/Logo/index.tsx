import Link from 'next/link'
import Image from 'next/image'
const Logo: React.FC = () => {
  return (
    <Link href='/' className='flex items-center gap-2 text-3xl font-semibold'>
      <Image
        src='/images/logo/cropped-EIU-LOGO-1-1.png'
        alt='EIU logo'
        width={40}
        height={40}
        className='h-10 w-auto object-contain'
      />
      <Image
        src='/images/logo/logo_iic-removebg-preview.png'
        alt='IIC logo'
        width={40}
        height={40}
        className='h-10 w-auto object-contain'
      />
    </Link>
  )
}

export default Logo
