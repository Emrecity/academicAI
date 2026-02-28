import GeneralAccordion from "@/components/generalAccordion"

const Masters = () => {
  return (
    <div className="min-h-screen px-5">
      <h1 className="text-2xl font-bold text-neutral-600">Master's Curriculum Vitae Builder Page</h1>
      <section className="grid sm:grid-cols-2 gap-2 sm:gap-x-5 my-10 dark:z-20 ">
        <div className="border border-neutral-500 rounded p-5">
          <h1 className="text-center text-2xl font-bold text-neutral-600 mb-5">Fill Form Here</h1>
           <GeneralAccordion/>
        </div>
        <div className="border border-neutral-500 rounded p-5">
          <h1 className="text-center text-2xl font-bold text-neutral-600 mb-5">Preview Here</h1>
        </div>
      </section>
    </div>
  )
}

export default Masters