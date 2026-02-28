

type forminputfields = {
    label:string,
    type:string,
    classname?:string,
    placeholder?:string,
    options?:string[]
}

const formInput = ({label,type,classname,placeholder,options}:forminputfields) => {
if(type === 'button')return(
    <div className={`${classname} bg-slate-500 text-center border-2 p-2  rounded-2xl my-2 w-1/3 place-self-center`}>
    <button className="text-white dark:text-neutral-600">{label}</button>
    </div>
  )
if(type == 'select')return(
        <select className = {`${classname} text-neutral-500 border-y-2 px-2 py-4 rounded-2xl my-2 w-full h-full`} >
            <option>{label}</option>
            if(options) && {options?.map((value)=><option value={value}>{value.charAt(0).toUpperCase().concat(value.slice(1,value.length))}</option>)}
        </select>
  )
  return (
    <div className = {`${classname} grid grid-rows-2 border-y-2 p-2 rounded-2xl my-2`}>
        <label className="text-neutral-500 font-bold">{label||'No label'}</label>
        <input type={type} placeholder={placeholder} className="outline-none"/>
    </div>
  )
}

export default formInput