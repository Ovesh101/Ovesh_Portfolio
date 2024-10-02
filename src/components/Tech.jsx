import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-6 sm:gap-10">
      {technologies.map((technology) => (
        <div 
          className="w-16 h-16 sm:w-24 sm:h-28" // Adjust for responsiveness
          key={technology.name}
        >
          <img 
            src={technology.icon} 
            alt={technology.name} 
            className="w-full h-full object-contain" 
          />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "")
