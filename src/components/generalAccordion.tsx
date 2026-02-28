import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import FormInput from "./formInput"

type dataType = {
    title:string,
    fields:{
        label:string,
        type:string,
        placeholder?:string,
        options?:string[],
        classname?:string,
    }[]
}[]

const generalAccordion = () => {
   const data:dataType =[
     {
        title:'Personal Details',
        fields:[
            {label:'Full name', type:'text',placeholder:'name here'},
            {label:'Address', type:'text', placeholder:'Ak-233-456 Meduma,Ghana'},
            {label:'Telphone', type:'telephone', placeholder:'+233 xx-xxxx-xxxx'},
            {label:'Email', type:'email', placeholder:'example@gmail.com'},
        ]
     },
     {
        title:'Research Interest',
        fields:[
            {label:'Title', type:'text',placeholder:'Global Health'},
            {label:'Add', type:'button', classname:'bg-slate-800'}
        ]
     },
     {
        title:'Education',
        fields:[
            {label:'Certificate title', type:'text',placeholder:'Master of Philosophy,Nursing'},
            {label:'School Name', type:'text',placeholder:'Wisconsin International University College'},
            {label:'location', type:'text',placeholder:'Accra - Ghana'},
            {label:'Start Date', type:'date'},
            {label:'End Date', type:'date'},
            {label:'Add', type:'button', classname:'bg-slate-800'}
        ]
     },
     {
        title:'Research Experience',
        fields:[
            {label:'Your Position', type:'text',placeholder:'Master of Philosophy,Nursing'},
            {label:'Project Title', type:'text',placeholder:'Human-AI Collaboration In Mental Health'},
            {label:'Start Date', type:'date'},
            {label:'End Date', type:'date'},
            {label:'Project roles',type:'text',placeholder:"conducted an extensive lite..."},
            {label:'Add role', type:'button', classname:'bg-slate-800'}
        ]
     },
     {
        title:'Publications',
        fields:[
            {label:'Title',type:'text',placeholder:"conducted an extensive lite..."},
            {label:'Add Publication', type:'button', classname:'bg-slate-800'}
        ]
     },
     {
        title:'Professional Service',
        fields:[
            {label:'Your Position', type:'text',placeholder:'Master of Philosophy,Nursing'},
            {label:'Location', type:'text',placeholder:'St. Patricks Hospital'},
            {label:'Start Date', type:'date'},
            {label:'End Date', type:'date'},
            {label:'Roles',type:'text',placeholder:"conducted an extensive lite..."},
            {label:'Add role', type:'button', classname:'bg-slate-800'}
        ]
     },
     {
        title:'Teaching Experience',
        fields:[
          
            {label:'Your Position', type:'text',placeholder:'Master of Philosophy,Nursing'},
            {label:'Location', type:'text',placeholder:'St. Patricks Hospital'},
            {label:'Start Date', type:'date'},
            {label:'End Date', type:'date'},
            {label:'Roles',type:'text',placeholder:"conducted an extensive lite..."},
            {label:'Add role', type:'button', classname:'bg-slate-800'}
        
        ]
     },
     {
        title:'Service | Membership',
        fields:[
            {label:'Title',type:'text',placeholder:"conducted an extensive lite..."},
            {label:'Start Date', type:'date'},
            {label:'End Date', type:'date'},
            {label:'Add Service', type:'button', classname:'bg-slate-800'}
        ]
     },
     {
        title:'Professional Development Training',
        fields:[
            {label:'Title',type:'text',placeholder:"conducted an extensive lite..."},
            {label:'Start Date', type:'date'},
            {label:'End Date', type:'date'},
            {label:'Add', type:'button', classname:'bg-slate-800'}
        ]
     },
     {
        title:'Fellowships & Honors',
        fields:[
            {label:'Title',type:'text',placeholder:"conducted an extensive lite..."},
            {label:'Date', type:'date'},
            {label:'Add', type:'button', classname:'bg-slate-800'}
        ]
     },
     {
        title:'Equity, Diversity & Inclusion Activities',
        fields:[
            {label:'Your Position', type:'text',placeholder:'Master of Philosophy,Nursing'},
            {label:'Location', type:'text',placeholder:'St. Patricks Hospital'},
            {label:'Start Date', type:'date'},
            {label:'End Date', type:'date'},
            {label:'Roles',type:'text',placeholder:"conducted an extensive lite..."},
            {label:'Add role', type:'button', classname:'bg-slate-800'}
        ]
     },
     {
        title:'Language',
        fields:[
            {label:'Title', type:'text',placeholder:'English'},
            {label:'Type', type:'select', options:['Native Language','Secondary Language']},
            {label:'Level', type:'select', options:['Distinguished','A level','B level','C level','Beginner level']},
            {label:'Add', type:'button', classname:'bg-slate-800'}
        ]
     },
    ]
    let position = 0
   return (
    <div className=" mx-auto mt-10">
    <Accordion
      type="single"
      collapsible
      className="w-full my-10"
      defaultValue="item-1"
    >
        {
            data?.map((item)=>{
                position ++
                return(
                    <AccordionItem value={`item-${position.toString()}`}>
                        <AccordionTrigger>{item.title}</AccordionTrigger>
                        <AccordionContent>
                            {
                                item?.fields?.map((field)=>{
                                    return(
                                        <FormInput label={field.label} type={field.type} placeholder={field.placeholder} options={field?.options}/>
                                    )
                                })
                            }
                        </AccordionContent>
                    </AccordionItem>
                )
            })
        }
    </Accordion>
    </div>
  )
}

export default generalAccordion