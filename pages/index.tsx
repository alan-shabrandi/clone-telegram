import Chat from '../src/components/chat/chat.index'
import MainLayout from '../src/components/layouts/mainLayout.index'

export default function Home() {
  return (
    <div>
      <MainLayout>
        <Chat />
      </MainLayout>
    </div>
  )
}
