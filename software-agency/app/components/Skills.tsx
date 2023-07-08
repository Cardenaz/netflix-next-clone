'use client'; 

import s from './Skills.module.css'; 

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
    const progress = sectionProgress - blockNo

    if(progress >=0 && progress < 1) return 1; 
    return 0.2; 

}



const Skills: React.FC = () => {
    return <div className="bg-black text-white ">


        <div className="min-h-screen max-w-5xl
         mx-auto px-10 lg:px-20 
         py-24 md:py-28 lg:py-36
          flex flexcol justify-center items-center text-4xl

          md:text-6xl lg:text-7xl
          tracking-tight
           font-semibold
          
          
          "> 

          <div className="leading-[1.15]">

          <div className={s.skillText}>  We know our tools inside and out. </div>
         <span className={`${s.skillText} inline-block after:content-['_']`}>Our team has contributed 123 commits to Flutter, powering thousands of apps worldwide.</span>
         <span className={`${s.skillText} inline-block`}> We&apos;re maintaining some of the most popular open-source projects, with over <strong>1,234</strong> downloads</span>
          </div>
          
          
          </div>
    </div>
}

export default Skills; 