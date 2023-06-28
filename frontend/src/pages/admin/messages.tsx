import { Tabs } from 'flowbite-react'
import AdminNav from '~/components/admin-nav'
import Layout from '~/components/layout'
import Messages from '~/sections/messages'

const MessagesPage = () => {
  return (
    <Layout>
      <section className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-6 pt-4">
        <AdminNav />
        <Tabs.Group className="w-full">
          <Tabs.Item title="All">
            <Messages />
          </Tabs.Item>
          <Tabs.Item title="Unfinished">
            <Messages status="unfinished" />
          </Tabs.Item>
          <Tabs.Item title="Finished">
            <Messages status="finished" />
          </Tabs.Item>
        </Tabs.Group>
      </section>
    </Layout>
  )
}

export default MessagesPage
