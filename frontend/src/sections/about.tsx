const About = () => {
  return (
    <section
      className="mx-auto my-14 flex w-5/6 gap-4 bg-[auto_100%] bg-center bg-no-repeat p-24 text-black shadow-[0px_0px_10px_0px_purple]"
      style={{ backgroundImage: 'url(/images/about.jpg)' }}
    >
      <div className="flex max-w-[50%] flex-col items-center justify-between">
        <h1 className="text-3xl">Om oss</h1>
        <span>
          Det finns en otrolig energi gömd i kontakten. Beröring är lugnande,
          det är närhet, det är tillit. Beröring är det bästa vi kan ge oss
          själva.
        </span>
      </div>
      <div className="max-w-[50%]">
        Kraften i närhet med en annan person, denna individuella kontakt, tiden
        vi tillbringar med var och en av gästerna väcker vår passion, lär ut
        respekt, ger glädje och tacksamhet. När idén om att skapa SPA kom upp
        trodde vi inte att vi skulle bli det kunna arbeta tillsammans, eftersom
        vi är som eld och vatten, trodde vi inte att vi skulle göra det göra
        arbete som vi inte skulle kalla arbete, vi visste inte att det finns så
        mycket gott i människor och vilja att hjälpa till. Vi har skapat en
        plats utifrån det värde som vägleder oss varje dag. Här hittar du vår
        kärlek till naturen.
      </div>
    </section>
  )
}

export default About
