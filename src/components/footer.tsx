import { routes } from "@/helpers/routes"

const footer = () => {
  return (
    <div className="mt-10">
    <div className="footerpath px-5 py-14 rounded min-h-fit">
        <div className="grid sm:grid-cols-4  sm:max-w-[85%] sm:mx-auto gap-5">
            <div className="grid gap-5 sm:gap-10">
               <div>
                    <h1 className="text-md sm:text-2xl text-white dark:text-slate-700">Deep Focus</h1>
                    <p>Academic excellence</p>
               </div><hr className="h-1 p-1"/>
               <div>
                <h2 className="sm:text-xl text-white font-semibold font-serif">Follow Us</h2>
                <p className="italic">facebook</p>
                <p className="italic">instagram</p>
                <p className="italic">youtube</p>
               </div>
            </div>
            <div className="sm:px-5 flex-row justify-between">
                <h1 className="text-md sm:text-2xl text-white dark:text-slate-700">Company</h1>
                <ul className="flex flex-col gap-5 sm:mt-10 font-semibold text-slate-700">
                    <li><a href={routes.about} className=" hover:text-white hover:underline transition-all">Who We Are</a></li>
                    <li><a href={routes.about} className=" hover:text-white hover:underline transition-all">Our Services</a></li>
                    <li><a href={routes.about} className=" hover:text-white hover:underline transition-all">Our Clients</a></li>
                    <li><a href={routes.about} className=" hover:text-white hover:underline transition-all">Pricing</a></li>
                    <li><a href={routes.about} className=" hover:text-white hover:underline transition-all">Careers</a></li>
                </ul>
            </div>
            <div>
                <h1 className="text-md sm:text-2xl text-white">Quick Links</h1>
                <ul className="flex flex-col gap-5 sm:mt-10 font-semibold text-slate-700">
                    <li><a href={routes.home} className=" hover:text-white hover:underline transition-all">Home</a></li>
                    <li><a href={routes.undergraduate} className=" hover:text-white hover:underline transition-all">Undergraduate</a></li>
                    <li><a href={routes.masters} className=" hover:text-white hover:underline transition-all">Masters</a></li>
                    <li><a href={routes.phd} className=" hover:text-white hover:underline transition-all">Phd</a></li>
                    <li><a href={routes.general} className=" hover:text-white hover:underline transition-all">General</a></li>
                </ul>
            </div>
            <div>
                <h1 className="text-md sm:text-2xl text-white sm:mb-10">Contact Us</h1>
                <div>
                    <h2>Call:</h2>
                    <p className="font-semibold text-slate-700">+233 224 090 8912</p>
                </div>
                <div className="sm:my-10">
                    <h2>Email:</h2>
                    <p className="font-semibold text-slate-700">deepfocusconsult@gmail.com</p>
                </div>
            </div>
        </div>
        
    </div>
    <div className="sm:flex justify-between bg-slate-700 p-5 text-white mt-5 rounded">
            <small>copyright@2026 All rights reserved</small>
            <small>Powered by Emreald Technologies</small>
        </div>
    </div>
  )
}

export default footer