import Image from 'next/image'

const WhyUs = () => {
  return (
    <section className="mx-auto mt-24 flex max-w-screen-xl flex-col items-center justify-center text-center">
      <span className="text-3xl">Varför välja Oss</span>
      <span className="mt-6">
        Här på LJUSKRISTALLEN spa är vi dedikerade till ditt välbefinnande och
        din tillfredsställelse. Det är därför det är av yttersta vikt till oss
        att vi erbjuder massage och spaupplevelse utan den höga prislappen.
        Dessutom vår professionella massage terapeuter kan specifikt skräddarsy
        behandlingen efter dina önskemål och behov.
      </span>
      <span>
        Med det livliga liv och rörelse i en modern livsstil, det är viktigt att
        vi fortfarande kan stänga av då och då tid. Av denna anledning bör
        massage inte reserveras som en lyx. Bland många andra fysiska och
        mentala fördelar har det bevisats att det minskar stress, sänker
        blodtrycket samt ökar produktivitet, cirkulation, flexibilitet och
        hållning. Unna dig det vi kan erbjuda. Ge ditt sinne och fyll ut
        fördelarna med massage, svep in dig i den unika atmosfären och
        atmosfären i vår anläggning och börja leva ditt bästa liv idag.
      </span>
      <Image
        src="/images/why-img.jpg"
        alt="why-image"
        width={612}
        height={408}
        className="h-auto w-full"
      />
    </section>
  )
}

export default WhyUs
