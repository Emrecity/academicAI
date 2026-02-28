import { useState } from "react"
import { SparklesCore } from "@/components/ui/sparkles";

const Undergraduate = () => {
  const [page,setPage] = useState(1)
  const handleNext =()=>{
    setPage((prev)=>prev+1)
  }
  const handleBack =()=>{
    if (page==0)return
    setPage((prev)=>prev-1)
  }
  return (
    <div className="min-h-screen my-5">
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
        <h1 className="text-lg sm:text-3xl text-slate-500 font-bold mb-5">Undergraduate CV</h1>
        <small className="font-medium text-blue-700">{page} <i className="text-slate-500">of 6</i></small>
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
            <h1 className="text-slate-600 text-lg font-medium text-center shadow-sm shadow-sky-300" >Research Interest</h1>
            <div className="grid grid-rows-3 border-y-2 gap-y-3 p-2 rounded-2xl my-2"> 
              <label htmlFor="interest" className="text-neutral-500 font-bold">Interest *</label>
              <input type="text" id="interest" name="interest" className="outline-none" required/>
              <button className="w-full btn-primary">Add</button>
            </div>
            <div>
              <h1 className="text-slate-600 font-medium text-center text-shadow-md shadow-sky-300" >List Here</h1>
            </div>
          </div>
          </div>
          <div onClick={()=>handleNext()} className="btn-primary text-center place-self-center">
              <button className="text-white rounded" >Save & Continue</button>
            </div>
        </section>}

        {page==2 && <section className="relative z-10">
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-x-10 my-5">
            <div>
            <h1 className="text-slate-600 text-lg font-medium text-center shadow-sm shadow-sky-300" >Education</h1>

            <div className="grid sm:grid-cols-2 gap-x-4">
            <div className="grid grid-rows-2 border-y-2 p-2 rounded-2xl my-2"> 
              <label htmlFor="degreeName" className="text-neutral-500 font-bold">Degree Title *</label>
              <input type="text" id="degreeName" name="degreeName" className="outline-none" required/>
            </div>
            <div className="grid grid-rows-2 border-y-2 p-2 rounded-2xl my-2"> 
              <label htmlFor="schoolName" className="text-neutral-500 font-bold">University Name *</label>
              <input type="text" id="schoolName" name="schoolName" className="outline-none" required/>
            </div>
            <div className="grid grid-rows-2 border-y-2 p-2 rounded-2xl my-2"> 
              <label htmlFor="thesis" className="text-neutral-500 font-bold">Thesis Title *</label>
              <input type="text" id="thesis" name="thesis" className="outline-none" required/>
            </div>
            <div className="grid grid-rows-2 border-y-2 p-2 rounded-2xl my-2"> 
              <label htmlFor="dateStart" className="text-neutral-500 font-bold">Date Started*</label>
              <input type="date" id="" name="dateStart" className="outline-none" required/>
            </div>
            <div className="grid grid-rows-2 border-y-2 p-2 rounded-2xl my-2"> 
              <label htmlFor="dateEnd" className="text-neutral-500 font-bold">Date Completed*</label>
              <input type="date" id="" name="dateEnd" className="outline-none" required/>
            </div>
            </div>
           </div>

          <div>
            <h1 className="text-slate-600 text-lg font-medium text-center shadow-sm shadow-sky-300" >Service | Membership</h1>
            <div>
             <div className="grid grid-rows-2 border-y-2 p-2 rounded-2xl my-2"> 
              <label htmlFor="organizationName" className="text-neutral-500 font-bold">Organization Name *</label>
              <input type="text" id="organizationName" name="organizationName" className="outline-none" required/>
             </div>
             <div className="grid grid-rows-2 border-y-2 p-2 rounded-2xl my-2"> 
              <label htmlFor="orgposition" className="text-neutral-500 font-bold">Position *</label>
              <input type="text" id="orgposition" name="orgposition" className="outline-none" required/>
            </div>
             <div className="grid grid-rows-2 border-y-2 p-2 rounded-2xl my-2"> 
              <label htmlFor="orgdateStart" className="text-neutral-500 font-bold">Date Started*</label>
              <input type="date" id="orgdateStart" name="orgdateStart" className="outline-none" required/>
            </div>
            <div className="grid grid-rows-2 border-y-2 p-2 rounded-2xl my-2"> 
              <label htmlFor="orgdateEnd" className="text-neutral-500 font-bold">Date Completed*</label>
              <input type="date" id="orgdateEnd" name="orgdateEnd" className="outline-none" required/>
            </div>
             <button className="w-full btn-primary ">Add</button>
            </div>
          </div>
          </div>
            <div className="flex justify-center-safe gap-x-5 mt-10">
              <button onClick={()=>handleBack()} className="btn-tertiary" >Back</button>
              <button onClick={()=>handleNext()}  className="btn-primary" >Save & Continue</button>
            </div>
          </section>}

        {page==3 && <section className="relative z-10">   
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-x-10 my-5">

              <div>
            <h1 className="text-slate-600 text-lg font-medium text-center shadow-sm shadow-sky-300" >Research Experience</h1>
            <div className="grid grid-rows-2 border-y-2 p-2 rounded-2xl my-2"> 
              <label htmlFor="position" className="text-neutral-500 font-bold">Position *</label>
              <input type="text" id="position" name="position" className="outline-none" required/>
            </div>
            <div className="grid grid-rows-2 border-y-2 p-2 rounded-2xl my-2"> 
              <label htmlFor="universityName" className="text-neutral-500 font-bold">University Name *</label>
              <input type="text" id="universityName" name="universityName" className="outline-none" required/>
            </div>
            <div className="grid grid-rows-2 border-y-2 p-2 rounded-2xl my-2"> 
              <label htmlFor="projectName" className="text-neutral-500 font-bold">Project Name *</label>
              <input type="text" id="projectName" name="projectName" className="outline-none" required/>
            </div>
            <div className="grid grid-rows-2 border-y-2 p-2 rounded-2xl my-2"> 
              <label htmlFor="supervisorName" className="text-neutral-500 font-bold">Supervisor Name *</label>
              <input type="text" id="supervisorName" name="supervisorName" className="outline-none" required/>
            </div>
            <div className="grid grid-rows-2 border-y-2 p-2 rounded-2xl my-2"> 
              <label htmlFor="projectDate" className="text-neutral-500 font-bold">Project Date *</label>
              <input type="date" id="projectDate" name="projectDate" className="outline-none" required/>
            </div>
          </div>

          <div>
            <h1 className="text-slate-600 text-lg font-medium text-center shadow-sm shadow-sky-300" >Research Activites</h1>
              <div className="grid grid-rows-2 border-y-2 gap-y-3 p-2 rounded-2xl my-2"> 
              <label htmlFor="activite" className="text-neutral-500 font-bold">Activity*</label>
              <input type="text" id="activite" name="activite" className="outline-none" required/>
              <button className="w-full btn-primary">Add</button>
            </div>
            <div>
              <h1 className="text-slate-600 font-medium text-center text-shadow-md shadow-sky-300" >List Here</h1>
            </div>
          </div>

        </div>
        <div className="flex justify-center-safe gap-x-5">
              <button onClick={()=>handleBack()} className="btn-tertiary" >Back</button>
              <button onClick={()=>handleNext()}  className="btn-primary" >Save & Continue</button>
        </div>
          </section>}

        {page==4 && <section className="relative z-10">      
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-x-10 my-5">
              <div>
            <h1 className="text-slate-600 text-lg font-medium text-center shadow-sm shadow-sky-300" >Professional Service</h1>
            <div className="grid grid-rows-2 border-y-2 p-2 rounded-2xl my-2"> 
              <label htmlFor="position" className="text-neutral-500 font-bold">Position *</label>
              <input type="text" id="position" name="position" className="outline-none" required/>
            </div>
            <div className="grid grid-rows-2 border-y-2 p-2 rounded-2xl my-2"> 
              <label htmlFor="placeName" className="text-neutral-500 font-bold">Organization Name *</label>
              <input type="text" id="placeName" name="placeName" className="outline-none" required/>
            </div>
            <div className="grid grid-rows-2 border-y-2 p-2 rounded-2xl my-2"> 
              <label htmlFor="serviceStartDate" className="text-neutral-500 font-bold">Start Date *</label>
              <input type="date" id="serviceStartDate" name="serviceStartDate" className="outline-none" required/>
            </div>
            <div className="grid grid-rows-2 border-y-2 p-2 rounded-2xl my-2"> 
              <label htmlFor="serviceEndDate" className="text-neutral-500 font-bold">Completed Date *</label>
              <input type="date" id="serviceEndDate" name="serviceEndDate" className="outline-none" required/>
            </div>
          </div>

          <div>
            <h1 className="text-slate-600 text-lg font-medium text-center shadow-sm shadow-sky-300" >Professional Activites</h1>
              <div className="grid grid-rows-2 border-y-2 gap-y-3 p-2 rounded-2xl my-2"> 
              <label htmlFor="activite" className="text-neutral-500 font-bold">Activity*</label>
              <input type="text" id="activite" name="activite" className="outline-none" required/>
              <button className="w-full btn-primary">Add</button>
            </div>
            <div>
              <h1 className="text-slate-600 font-medium text-center text-shadow-md shadow-sky-300" >List Here</h1>
            </div>
          </div>

        </div>
        <div className="flex justify-center-safe gap-x-5">
              <button onClick={()=>handleBack()} className="btn-tertiary" >Back</button>
              <button onClick={()=>handleNext()}  className="btn-primary" >Save & Continue</button>
        </div>
          </section>}

        {page==5 && <section className="relative z-10">
           <div className="mb-10">
            <h1 className="text-slate-600 text-lg font-medium text-center shadow-sm shadow-sky-300" >Language</h1>
              <div className="grid grid-rows-2 border-y-2 gap-y-3 p-2 rounded-2xl my-2"> 
              <label htmlFor="languageName" className="text-neutral-500 font-bold">Name *</label>
              <input type="text" id="languageName" name="languageName" className="outline-none" required/>
              <label htmlFor="langDescription" className="text-neutral-500 font-bold">Details *</label>
              <input type="text" id="langDescription" name="langDescription" className="outline-none" required/>
              <button className="btn-primary">Add</button>
            </div>
            <div className="mb-5">
              <h1 className="text-slate-600 font-medium text-center text-shadow-md shadow-sky-300" >List Here</h1>
            </div>
            <hr className="h-2 bg-slate-500"/>
           </div>
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-x-10 my-5">
            <div>
            <h1 className="text-slate-600 text-lg font-medium text-center shadow-sm shadow-sky-300" >Professional Development Training</h1>
              <div className="grid grid-rows-2 border-y-2 gap-y-3 p-2 rounded-2xl my-2"> 
              <label htmlFor="activite" className="text-neutral-500 font-bold">Program Title*</label>
              <input type="text" id="activite" name="activite" className="outline-none" required/>
              <label htmlFor="workshopStartDate" className="text-neutral-500 font-bold">Start Date *</label>
              <input type="date" id="workshopStartDate" name="workshopStartDate"/>
              <label htmlFor="workshopEndDate" className="text-neutral-500 font-bold">End Date *</label>
              <input type="date" id="workshopEndDate" name="workshopEndDate"/>
              <button className="w-full btn-primary">Add</button>
            </div>
            <div>
              <h1 className="text-slate-600 font-medium text-center text-shadow-md shadow-sky-300" >List Here</h1>
            </div>
           </div>
            <div>
            <h1 className="text-slate-600 text-lg font-medium text-center shadow-sm shadow-sky-300" >Voluntary Service</h1>
              <div className="grid grid-rows-2 border-y-2 gap-y-3 p-2 rounded-2xl my-2"> 
              <label htmlFor="volPosition" className="text-neutral-500 font-bold">Position *</label>
              <input type="text" id="volPosition" name="volPosition" className="outline-none" required/>
              <label htmlFor="activite" className="text-neutral-500 font-bold">Program *</label>
              <input type="text" id="activite" name="activite" className="outline-none" required/>
              <label htmlFor="activite" className="text-neutral-500 font-bold">Date *</label>
              <input type="date" id="workshopDate"/>
              <button className="w-full btn-primary">Add</button>
            </div>
            <div>
              <h1 className="text-slate-600 font-medium text-center text-shadow-md shadow-sky-300" >List Here</h1>
            </div>
           </div>
          </div>
          <div className="flex justify-center-safe gap-x-5">
              <button onClick={()=>handleBack()} className="btn-tertiary" >Back</button>
              <button onClick={()=>handleNext()}  className="btn-primary" >Save & Continue</button>
        </div>
          </section>}

        {page==6 && <section className="relative z-10">
          <div className="flex justify-center-safe gap-x-5">
              <button onClick={()=>handleBack()} className="btn-tertiary" >Back</button>
        </div>
          </section>}
      </form>
    </div>
  )
}

export default Undergraduate
