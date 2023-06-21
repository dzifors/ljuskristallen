const Contact = () => {
  return (
    <section
      className="bg-cover bg-fixed bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/contact-bg.jpg)'
      }}
    >
      <div className="flex w-full max-w-screen-xl flex-col gap-20 pt-20 text-center">
        <span className="mb-8 mt-11 text-3xl font-medium text-white">
          KONTAKTA OSS
        </span>
        <form className="flex w-full flex-col items-center justify-center gap-10">
          <input
            type="text"
            placeholder="Namn"
            name="name"
            required
            className="w-1/3 rounded-full px-4 py-3"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="w-1/3 rounded-full px-4 py-3"
          />
          <input
            type="text"
            placeholder="Telefonnummer"
            name="phone"
            required
            className="w-1/3 rounded-full px-4 py-3"
          />
          <textarea
            name="message"
            className="h-32 w-1/3 resize-none rounded-3xl px-4 py-3"
            placeholder="Meddelande"
          />
          <button
            type="submit"
            className="mb-24 rounded-full bg-[purple] px-6 py-4 text-white hover:bg-transparent hover:text-[purple] hover:outline hover:outline-[purple]"
          >
            Skicka
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
