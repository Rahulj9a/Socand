import AuthModal from '@/components/authModals/AuthModal'


export default function Home() {
  return (
    <div className='flex items-center'>
      <div className='flex-1'>

      </div>
      <div className='fixed m-auto right-0 top-0 w-2/5 h-screen p-5 flex items-center bottom-0'>
        <AuthModal />
      </div>
    </div>

  )
}
