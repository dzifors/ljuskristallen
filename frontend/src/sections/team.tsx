/* import { useEffect, useState } from 'react'
import { teamMembers } from '~/constants/team-members'

const Team = () => {
  const [currentMember, setCurrentMember] = useState<number>(0)

  const carouselInfiniteScroll = () => {
    if (currentMember === teamMembers.length - 1) {
      return setCurrentMember(0)
    }
    return setCurrentMember(currentMember + 1)
  }

  useEffect(() => {
    const interval = setInterval(() => carouselInfiniteScroll(), 3000)
    return () => clearInterval(interval)
  })

  return (
    <section>
      <div className="flex flex-nowrap overflow-hidden">
        <div
          key={`team-member-${currentMember}`}
          className="flex h-80 w-full min-w-full items-center justify-center transition duration-1000"
        >
          {ReactHtmlParser(teamMembers[currentMember].description)}
        </div>
      </div>
      {currentMember}
    </section>
  )
}

export default Team */

import { Carousel } from 'flowbite-react'
import Image from 'next/image'
import { teamMembers } from '~/constants/team-members'
import ReactHtmlParser from 'react-html-parser'

const Team = () => {
  return (
    <div className="my-48 flex h-[650px] flex-col items-center justify-center">
      <span className="text-3xl">Team</span>
      <Carousel className="dark w-screen overflow-hidden">
        {teamMembers.map((member, index) => (
          <div
            key={`team-member-${index}`}
            className="flex h-full w-[1024px] items-center justify-center gap-6"
          >
            <Image
              src={member.image}
              alt={`image-${member.name.toLowerCase()}`}
              width={512}
              height={512}
              className="h-64 w-64 rounded-full"
            />
            <div className="flex flex-col items-center justify-center gap-6 rounded-xl bg-gradient-to-b from-[rgb(197,103,197)] to-[rgb(116,2,116)] p-4 text-white">
              <span className="mx-auto text-3xl font-semibold tracking-[3rem] after:-mr-12 after:content-['']">
                {member.name.toUpperCase()}
              </span>
              <span>{ReactHtmlParser(member.description)}</span>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Team
