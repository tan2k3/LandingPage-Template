
import { HeaderItem } from '@/app/types/menu'
import { aboutdata } from '@/app/types/aboutdata'
import { workdata } from '@/app/types/workdata'
import { featureddata } from '@/app/types/featureddata'
import { testimonials } from '@/app/types/testimonials'
import { articles } from '@/app/types/articles'
import { footerlinks } from '@/app/types/footerlinks'
import { NextResponse } from 'next/server'

// header nav-links data
const headerData: HeaderItem[] = [
  { label: 'VỀ CHÚNG TÔI', href: '#digital-section' },
  { label: 'DỊCH VỤ', href: '#services-section' },
  { label: 'ĐÀO TẠO', href: '#training-section' },
  { label: 'ĐÁNH GIÁ', href: '#FAQ' },
  { label: 'LIÊN HỆ', href: '#first-section' },
]

// about data
const Aboutdata: aboutdata[] = [
  {
    heading: 'Cụm Số hóa',
    imgSrc: '/images/aboutus/imgOne.svg',
    paragraph:
      'Tối ưu hóa thiết bị truyền thống và nâng cao hiệu suất máy móc với cảm biến thông minh, giám sát trạng thái vận hành và dashboard trực quan.',
    link: 'Xem chi tiết',
  },
  {
    heading: 'Cụm Thông minh',
    imgSrc: '/images/aboutus/imgTwo.svg',
    paragraph:
      'Triển khai Smart Warehouse và Smart Factory với robot di động, cánh tay robot, hệ thống MES và thực tế tăng cường nhằm sản xuất thông minh hơn.',
    link: 'Khám phá giải pháp',
  },
  {
    heading: 'Đánh giá & Tư vấn SIRI',
    imgSrc: '/images/aboutus/imgThree.svg',
    paragraph:
      'Đánh giá mức độ sẵn sàng Công nghiệp 4.0 theo chuẩn SIRI và xây dựng lộ trình chuyển đổi số cụ thể, biến tiềm năng thành giá trị kinh doanh.',
    link: 'Đăng ký tư vấn',
  },
]

// work-data
const WorkData: workdata[] = [
  {
    profession: 'Co-founder',
    name: 'John Doe',
    imgSrc: '/images/wework/avatar.svg',
  },
  {
    profession: 'Co-founder',
    name: 'John Doe',
    imgSrc: '/images/wework/avatar3.svg',
  },
  {
    profession: 'Co-founder',
    name: 'John Doe',
    imgSrc: '/images/wework/avatar4.svg',
  },
  {
    profession: 'Co-founder',
    name: 'John Doe',
    imgSrc: '/images/wework/avatar.svg',
  },
  {
    profession: 'Co-founder',
    name: 'John Doe',
    imgSrc: '/images/wework/avatar3.svg',
  },
  {
    profession: 'Co-founder',
    name: 'John Doe',
    imgSrc: '/images/wework/avatar4.svg',
  },
]

// featured data
const FeaturedData: featureddata[] = [
  {
    heading: 'Brand design for a computer brand.',
    imgSrc: '/images/featured/feat1.jpg',
  },
  {
    heading: 'Mobile app 3d wallpaper.',
    imgSrc: '/images/featured/feat2.jpg',
  },
  {
    heading: 'Brand design for a computer brand.',
    imgSrc: '/images/featured/feat1.jpg',
  },
  {
    heading: 'Mobile app 3d wallpaper.',
    imgSrc: '/images/featured/feat2.jpg',
  },
]

// plans data
const PlansData = [
  {
    heading: 'Đào tạo Kỹ thuật 4.0',
    price: {
      monthly: 0,
      yearly: 0,
    },
    user: 'Chương trình đặc thù',
    features: {
      profiles: 'Khí nén, Thuỷ lực',
      posts: 'Cảm biến & Tự động hóa',
      templates: 'Điều khiển PLC & Python',
      view: 'Đào tạo thực hành tại trường',
      support: 'Giảng viên EIU hướng dẫn',
    },
  },
  {
    heading: 'Đào tạo Robot & MES',
    price: {
      monthly: 0,
      yearly: 0,
    },
    user: 'Khóa học doanh nghiệp',
    features: {
      profiles: 'Robot ứng dụng',
      posts: 'Smart Warehouse & Smart Factory',
      templates: 'MES, AR và quản lý sản xuất',
      view: 'Mô hình sản xuất thông minh',
      support: 'Hỗ trợ giải pháp 4.0',
    },
  },
  {
    heading: 'Chuyển đổi Công nghiệp 4.0',
    price: {
      monthly: 0,
      yearly: 0,
    },
    user: 'Đào tạo & tư vấn',
    features: {
      profiles: 'Đánh giá chuẩn SIRI',
      posts: 'Quản trị công nghiệp & 4.0',
      templates: 'Lộ trình chuyển đổi số',
      view: 'Đào tạo theo nhu cầu doanh nghiệp',
      support: 'Tư vấn chuyên sâu',
    },
  },
]

// testimonial data
const TestimonialsData: testimonials[] = [
  {
    name: 'Robert Fox',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 5,
  },
  {
    name: 'Leslie Alexander',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/images/testimonial/user2.svg',
    rating: 4,
  },
  {
    name: 'Cody Fisher',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/images/testimonial/user3.svg',
    rating: 4,
  },
  {
    name: 'Robert Fox',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 4,
  },
  {
    name: 'Leslie Alexander',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/images/testimonial/user2.svg',
    rating: 4,
  },
  {
    name: 'Cody Fisher',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/images/testimonial/user3.svg',
    rating: 4,
  },
]

// artical data
const ArticlesData: articles[] = [
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'february 19, 2025',
    imgSrc: '/images/articles/article.png',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'february 19, 2025',
    imgSrc: '/images/articles/article2.png',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'february 19, 2025',
    imgSrc: '/images/articles/article3.png',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'february 19, 2025',
    imgSrc: '/images/articles/article.png',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'february 19, 2025',
    imgSrc: '/images/articles/article2.png',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'february 19, 2025',
    imgSrc: '/images/articles/article3.png',
  },
]

// footer links data
const FooterLinksData: footerlinks[] = [
  {
    section: 'MENU',
    links: [
      { label: 'VỀ CHÚNG TÔI', href: '#digital-section' },
      { label: 'DỊCH VỤ', href: '#services-section' },
      { label: 'ĐÀO TẠO', href: '#training-section' },
      { label: 'ĐÁNH GIÁ', href: '#FAQ' },
    ],
  },
  {
    section: 'HỖ TRỢ',
    links: [
      { label: 'Email: i4.0@eiu.edu.vn', href: 'mailto:i4.0@eiu.edu.vn' },
      { label: 'Hotline: (+84) 0913 185137', href: 'tel:+84913185137' },
      { label: 'Liên hệ', href: '#first-section' },
    ],
  },
  {
    section: 'PHÁP LÝ',
    links: [
      { label: 'Chính sách bảo mật', href: '/' },
      { label: 'Điều khoản dịch vụ', href: '/' },
    ],
  },
]

export const GET = () => {
  return Response.json({
    headerData,
    Aboutdata,
    WorkData,
    FeaturedData,
    PlansData,
    TestimonialsData,
    ArticlesData,
    FooterLinksData,
  })
}
