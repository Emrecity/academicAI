import { SparklesCore } from "@/components/ui/sparkles";
import { useState } from "react";


const Phd = () => {
  const [page,setPage] = useState(1)
    const handleNext =()=>{
    setPage((prev)=>prev+1)
  }
  const handleBack =()=>{
    if (page==0)return
    setPage((prev)=>prev-1)
  }
  return (
    <div className="min-h-screen px-5">
      <form>
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
        <h1 className="text-lg sm:text-3xl text-slate-500 font-bold mb-5">PhD CV</h1>
        <small className="font-medium text-blue-700">{page} <i className="text-slate-500">of 7</i></small>
      </div>

      {page==1&&<section className="relative z-10">
           <div onClick={()=>handleNext()} className="btn-primary text-center place-self-center">
              <button className="text-white rounded" >Save & Continue</button>
          </div>
        </section>}

      {page==2 && <section className="relative z-10">
         <div className="flex justify-center-safe gap-x-5 mt-10">
              <button onClick={()=>handleBack()} className="btn-tertiary" >Back</button>
              <button onClick={()=>handleNext()}  className="btn-primary" >Save & Continue</button>
            </div>
        </section>}

      {page==3 && <section className="relative z-10">
         <div className="flex justify-center-safe gap-x-5 mt-10">
              <button onClick={()=>handleBack()} className="btn-tertiary" >Back</button>
              <button onClick={()=>handleNext()}  className="btn-primary" >Save & Continue</button>
            </div>
        </section>}

      {page==4 && <section className="relative z-10">
         <div className="flex justify-center-safe gap-x-5 mt-10">
              <button onClick={()=>handleBack()} className="btn-tertiary" >Back</button>
              <button onClick={()=>handleNext()}  className="btn-primary" >Save & Continue</button>
            </div>
        </section>}

      {page==5 && <section className="relative z-10">
         <div className="flex justify-center-safe gap-x-5 mt-10">
              <button onClick={()=>handleBack()} className="btn-tertiary" >Back</button>
              <button onClick={()=>handleNext()}  className="btn-primary" >Save & Continue</button>
            </div>
        </section>}

      {page==6 && <section className="relative z-10">
         <div className="flex justify-center-safe gap-x-5 mt-10">
              <button onClick={()=>handleBack()} className="btn-tertiary" >Back</button>
              <button onClick={()=>handleNext()}  className="btn-primary" >Save & Continue</button>
            </div>
        </section>}

      {page==7 && <section className="relative z-10">
          <div className="flex justify-center-safe gap-x-5">
              <button onClick={()=>handleBack()} className="btn-tertiary" >Back</button>
        </div>
          </section>}

      </form>
    </div>
  )
}

export default Phd