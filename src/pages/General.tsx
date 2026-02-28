import { SparklesCore } from "@/components/ui/sparkles"
import { useState } from "react"

const General = () => {

    const [page,setPage] = useState(1)
    const handleNext =()=>{
    setPage((prev)=>prev+1)
  }
  const handleBack =()=>{
    if (page==0)return
    setPage((prev)=>prev-1)
  }

  return (
    <div className="min-h-screen">
        <form className="px-5">
             <div className="w-full absolute inset-0 h-screen z-0">
                    <SparklesCore
                      id="tsparticlesfullpage"
                      background="transparent"
                      minSize={0.6}
                      maxSize={1.4}
                      particleDensity={100}
                      className="w-full h-full"
                      particleColor="#FFFFFF"
                    />
            </div>
            <div className="flex justify-between sticky top-2 z-20">
                <h1 className="text-lg sm:text-3xl text-slate-500 font-bold mb-5">General CV</h1>
                 <small className="font-medium text-blue-700">{page} <i className="text-slate-500">of 4</i></small>
            </div>
            {page==1 && <section className="relative z-10">
                <div className="grid sm:grid-cols-2 gap-5 sm:gap-x-10 my-5">
                    <div>
                        <h1 className="text-slate-600 text-lg font-medium text-center shadow-sm shadow-sky-300" >Personal Information</h1>

                        <div className="grid sm:grid-cols-2 gap-x-4">
                        <div className="grid grid-rows-2 border-y-2 p-2 rounded-2xl my-2"> 
                            <label htmlFor="firstName" className="text-neutral-500 font-bold">First Name *</label>
                            <input type="text" id="firstName" name="firstName" className="outline-none" required/>
                        </div>
                        <div className="grid grid-rows-2 border-y-2 p-2 rounded-2xl my-2"> 
                            <label htmlFor="middleName" className="text-neutral-500 font-bold">Middle Name</label>
                            <input type="text" id="middleName" name="middleName" className="outline-none"/>
                        </div>
                    </div>

            <div className="grid sm:grid-cols-2 gap-x-4">
            <div className="grid grid-rows-2 border-y-2 p-2 rounded-2xl my-2"> 
              <label htmlFor="lastName" className="text-neutral-500 font-bold">last Name *</label>
              <input type="text" id="lastName" name="lastName" className="outline-none" required/>
            </div>
            <div className="grid grid-rows-2 border-y-2 p-2 rounded-2xl my-2"> 
              <label htmlFor="address" className="text-neutral-500 font-bold">Address *</label>
              <input type="text" id="address" name="address" className="outline-none" required/>
            </div>
            </div>

            <div className="grid grid-rows-2 border-y-2 p-2 rounded-2xl my-2"> 
              <label htmlFor="phone" className="text-neutral-500 font-bold">Phone Number *</label>
              <input type="tel" maxLength={18} minLength={10} id="phone" name="phone" className="outline-none" required/>
            </div>
                <div className="grid grid-rows-2 border-y-2 p-2 rounded-2xl my-2"> 
                <label htmlFor="email" className="text-neutral-500 font-bold">Email Address *</label>
                <input type="email" id="email" name="email" className="outline-none" required/>
                </div> 
             </div>

             <div>
                <h1 className="text-slate-600 text-lg font-medium text-center shadow-sm shadow-sky-300" >Educational Background</h1>
                <div className="grid grid-rows-3 border-y-2 gap-y-3 p-2 rounded-2xl my-2"> 
                    <label htmlFor="uniName" className="text-neutral-500 font-bold">University/College Name *</label>
                    <input type="text" id="uniName" name="uniName" className="outline-none" required/>
                    <label htmlFor="specialization" className="text-neutral-500 font-bold">Specialization *</label>
                    <input type="text" id="specialization" name="specialization" className="outline-none" required/>
                    <label htmlFor="gpa" className="text-neutral-500 font-bold">G.P.A</label>
                    <input type="text" id="gpa" name="gpa" className="outline-none" />
                    <label htmlFor="graduationDate" className="text-neutral-500 font-bold">Graduation Date</label>
                    <input type="date" id="graduationDate" name="graduationDate" className="outline-none mb-5" />
                    <button className="w-full btn-primary">Add</button>
                </div>
                <div>
                    <h1 className="text-slate-600 font-medium text-center text-shadow-md shadow-sky-300" >List Here</h1>
                </div>
             </div>
         </div>
            <div onClick={()=>handleNext()} className="btn-primary  text-center place-self-center">
              <button className="text-white rounded hover:uppercase" >Save & Continue</button>
            </div>
            </section>}

            {page==2 &&<section className="relative z-10">
                <h1>Hello page {page}</h1>
                <div className="flex justify-center-safe gap-x-5 mt-10">
                    <button onClick={()=>handleBack()} className="btn-tertiary" >Back</button>
                    <button onClick={()=>handleNext()}  className="btn-primary" >Save & Continue</button>
                </div>
            </section>}

    </form>

    </div>
  )
}

export default General