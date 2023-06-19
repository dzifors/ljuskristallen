import Plans from '~/constants/plans'

const Prices = () => {
  return (
    <div className="mx-auto my-14 mt-28 flex max-w-screen-xl flex-col items-center justify-center gap-12 pt-16">
      <span className="text-3xl">Våra Priser</span>
      <div className="grid grid-cols-4 grid-rows-2 gap-4">
        {Plans.map((plan, index) => (
          <div key={`plan-${index}`}>
            <div className="flex h-full flex-col items-center overflow-auto rounded-lg bg-[purple] p-4 text-white">
              <span className="text-center text-xl">{plan.title}</span>
              <span className="text-center text-2xl font-bold">
                {plan.price}
              </span>
              <span className="text-center">{plan.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Prices
