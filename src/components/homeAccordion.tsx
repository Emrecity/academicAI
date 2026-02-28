import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"

export default function AccordionDemo() {
  return (
    <div className="w-[75vw] mx-auto mt-10">
        <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 ,scale:1.3 }}
      transition={{delay:0.4, duration: 1, ease: "easeInOut" }}
      className="mb-16 scroll-m-20 text-lg sm:text-3xl font-bold  text-slate-600 tracking-tight lg:text-4xl text-center"
    >
        Frequently asked questions
      </motion.h2>
    <Accordion
      type="single"
      collapsible
      className="w-full my-10"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Do I need a different CV for each application</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Every time you apply for a new job, 
            you should make sure the curriculum vitae speaks directly to the colleage description. 
            That means, your cv may not need to be entirely different, 
            but you’ll likely want to make at least a few minor updates. 
            If you’re applying for a different type of colleage, you may want a completely different cv, from the content all the way to the format. 
            With all the different templates to choose from, take advantage of our cv builder and create a variety of resumes to fit both your personality and your different school applications.
          </p>
         
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How do I choose the right template</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Choosing the right template mostly comes down to type of colleage application. Granted, if you’re applying for an admission for bachelors degree, you may not want an abstract-leaning format . So, as you browse through all the cv templates while you build your cv, think about what potential school administration board may expect to see, then pick the cv that fits both your personality and educational goals
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can I have my CV reviewed when I've finished building</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Not only can you, you should! It’s always a great idea to get another set of eyes on your resume to check for typos, mistakes, or areas for improvement. Our resume builder will provide tips and advice throughout and when you’re done, you can run through our automated resume reviewer
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
  )
}
