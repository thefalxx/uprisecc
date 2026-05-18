// "use client"

// import { AnimatePresence, motion, usePresenceData, wrap } from "motion/react"
// import { forwardRef, SVGProps, useState } from "react"
// import SectionTitle from "../Common/SectionTitle"
// import { scData } from "./scData";


// export default function UsePresenceData() {
//   const [selectedIndex, setSelectedIndex] = useState(0)
//   const [direction, setDirection] = useState<1 | -1>(1)
//   if (!scData || !scData.length) {
//   return <div>⚠️ scData is empty or undefined</div>;
// }

  
//   console.log("✅ scData loaded:", scData);
//   console.log("✅ selectedIndex:", selectedIndex);

//   const selectedItem = scData[selectedIndex];

//   function setSlide(newDirection: 1 | -1) {
//     const nextIndex = wrap(0, scData.length, selectedIndex + newDirection)
//     setSelectedIndex(nextIndex)
//     setDirection(newDirection)
//   }

//   return (
//     <div style={wrapper}>
//       <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
//         <div className="container">
//           <SectionTitle
//             subtitle="Safety First!"
//             title="Our Commitment to Safety"
//             paragraph="At Uprise Cranes and Contractors, safety isn&apos;t just a box to tick—it&apos;s the foundation of everything we do. We are committed to ensuring the highest safety standards for our crew, clients, and every job site we work on. Through strict compliance, continuous training, and proactive risk management, we create a work environment that prioritises efficiency, reliability, and above all, safety.
// "
//             center
//           />
//         </div>

//       </section>

//       <div style={container}>
//         <motion.button
//           initial={false}
//           animate={{ backgroundColor: "#ffffff" }}
//           aria-label="Previous"
//           style={button}
//           onClick={() => setSlide(-1)}
//           whileFocus={{ outline: `2px solid #000000` }}
//           whileTap={{ scale: 0.9 }}
//         >
//           <ArrowLeft />
//         </motion.button>

//         <AnimatePresence custom={direction} initial={false} mode="popLayout">
//           <Slide
//             key={selectedIndex}
//             title={selectedItem.title}
//             description={selectedItem.description}
//           />
//         </AnimatePresence>

//         <motion.button
//           initial={false}
//           animate={{ backgroundColor: "#ffffff" }}
//           aria-label="Next"
//           style={button}
//           onClick={() => setSlide(1)}
//           whileFocus={{ outline: `2px solid #000000` }}
//           whileTap={{ scale: 0.9 }}
//         >
//           <ArrowRight />
//         </motion.button>
//       </div>
//        By choosing Uprise Cranes and Contractors, you&apos;re working with a safety-focused, fully compliant rigging team that protects your project, your people, and your peace of mind.
//     </div>
    
//   )
// }

// const Slide = forwardRef(function Slide(
//   { title, description }: { title: string; description: string },
//   ref: React.Ref<HTMLDivElement>
// ) {
//   const direction = usePresenceData()
//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, x: direction * 100 }}
//       animate={{
//         opacity: 1,
//         x: 0,
//         transition: {
//           delay: 0.1,
//           type: "spring",
//           bounce: 0.3,
//           duration: 0.5,
//         },
//       }}
//       exit={{ opacity: 0, x: direction * -100 }}
//       style={box}
//     >
//       <div style={content}>
//         <h2 style={{ margin: 0, fontSize: "1.5rem", color: "#111827", fontWeight: 700 }}>{title}</h2>
//         <p style={{ margin: 0, marginTop: "0.5rem", color: "#4B5563" }}>{description}</p>
//       </div>
//     </motion.div>
//   )
// })

// /**
//  * ==============   Icons   ================
//  */
// const iconsProps: SVGProps<SVGSVGElement> = {
//   xmlns: "http://www.w3.org/2000/svg",
//   width: "24",
//   height: "24",
//   viewBox: "0 0 24 24",
//   fill: "none",
//   stroke: "currentColor",
//   strokeWidth: "2",
//   strokeLinecap: "round",
//   strokeLinejoin: "round",
// }

// function ArrowLeft() {
//   return (
//     <svg {...iconsProps}>
//       <path d="m12 19-7-7 7-7" />
//       <path d="M19 12H5" />
//     </svg>
//   )
// }

// function ArrowRight() {
//   return (
//     <svg {...iconsProps}>
//       <path d="M5 12h14" />
//       <path d="m12 5 7 7-7 7" />
//     </svg>
//   )
// }

// /**
//  * ==============   Styles   ================
//  */

// const wrapper: React.CSSProperties = {
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   padding: "3rem 1rem",
// }

// const container: React.CSSProperties = {
//   display: "flex",
//   position: "relative",
//   justifyContent: "center",
//   alignItems: "center",
//   gap: 20,
//   flexWrap: "wrap",
//   minHeight: "300px",
// }

// // const box: React.CSSProperties = {
// //   width: "80vw",
// //   maxWidth: "500px",
// //   height: "40vw",
// //   maxHeight: "250px",
// //   backgroundColor: "#ffffff",
// //   borderRadius: "16px",
// //   flexShrink: 0,
// //   display: "flex",
// //   justifyContent: "center",
// //   alignItems: "center",
// //   textAlign: "center",
// //   padding: "1.5rem",
// //   boxSizing: "border-box",
// //   boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
// //   border: "1px solid #e5e7eb",
// // }

// const box: React.CSSProperties = {
//   width: "100%",
//   maxWidth: "1000px",
//   height: "auto",
//   minHeight: "220px", // Ensures consistent minimum height
//   backgroundColor: "#ffffff",
//   borderRadius: "16px",
//   flexShrink: 0,
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   textAlign: "center",
//   padding: "2rem",
//   boxSizing: "border-box",
//   boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
//   border: "1px solid #e5e7eb",
// };


// const content: React.CSSProperties = {
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   width: "100%",
// }

// const button: React.CSSProperties = {
//   backgroundColor: "#ffffff",
//   width: 40,
//   height: 40,
//   borderRadius: "50%",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   position: "relative",
//   zIndex: 1,
//   outlineOffset: 2,
//   boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//   border: "1px solid #e5e7eb",
// }


"use client"

import { AnimatePresence, motion, usePresenceData, wrap } from "motion/react"
import { forwardRef, useEffect, useState } from "react"
import SectionTitle from "../Common/SectionTitle"
import { scData } from "./scData";

export default function UsePresenceData() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)

    // Auto-rotate every 5s
  useEffect(() => {
  const interval = setInterval(() => {
    const nextIndex = wrap(0, scData.length, selectedIndex + 1)
    setSelectedIndex(nextIndex)
    setDirection(1)
  }, 2000)
  return () => clearInterval(interval)
}, [selectedIndex, scData.length])

  if (!scData || !scData.length) {
    return <div>scData is empty or undefined</div>
  }

  const selectedItem = scData[selectedIndex]

  function setSlide(newDirection: 1 | -1) {
    const nextIndex = wrap(0, scData.length, selectedIndex + newDirection)
    setSelectedIndex(nextIndex)
    setDirection(newDirection)
  }

  return (
    <div style={wrapper}>
      <section className="relative z-20 overflow-hidden bg-white pb-8 pt-8 dark:bg-dark lg:pb-[40px] lg:pt-[50px]">
        <div className="container">
          <SectionTitle
            subtitle="Safety First!"
            title="Our Commitment to Safety"
            paragraph="At Uprise Cranes and Contractors, safety isn&apos;t just a box to tick—it&apos;s the foundation of everything we do. We are committed to ensuring the highest safety standards for our crew, clients, and every job site we work on. Through strict compliance, continuous training, and proactive risk management, we create a work environment that prioritises efficiency, reliability, and above all, safety."
            center
            width="900px"
          />
        </div>
      </section>

      <div style={container}>
        {/* Slides */}
        <AnimatePresence custom={direction} initial={false} mode="popLayout">
          <Slide
            key={selectedIndex}
            title={selectedItem.title}
            description={selectedItem.description}
          />
        </AnimatePresence>
      </div>

      {/* Indicators */}
      <div style={indicators}>
        {scData.map((_, i) => (
          <motion.div
            key={i}
            onClick={() => setSelectedIndex(i)}
            style={{
              ...dot,
              backgroundColor: i === selectedIndex ? "#111827" : "#D1D5DB",
            }}
            whileHover={{ scale: 1.15 }}
          />
        ))}
      </div>

      <p className="mt-8 max-w-2xl text-center text-gray-600 leading-relaxed">
        By choosing Uprise Cranes and Contractors, you’re working with a safety-focused, fully
        compliant rigging team that protects your project, your people, and
        your peace of mind.
      </p>
    </div>
  )
}

/* Slide Component */
const Slide = forwardRef(function Slide(
  { title, description }: { title: string; description: string },
  ref: React.Ref<HTMLDivElement>
) {
  const direction = usePresenceData()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction * 80 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { type: "spring", stiffness: 100, damping: 20 },
      }}
      exit={{ opacity: 0, x: direction * -80 }}
      style={box}
    >
      <div style={content}>
        <h2 style={heading}>{title}</h2>
        <p style={paragraph}>{description}</p>
      </div>
    </motion.div>
  )
})

/* ============== Styles ============== */
const wrapper: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "3rem 1rem",
}

const container: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "260px",
  position: "relative",
}

const box: React.CSSProperties = {
  width: "100%",
  maxWidth: "680px",
  minHeight: "200px",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  border: "1px solid #E5E7EB",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "2rem 2.5rem",
  boxSizing: "border-box",
  boxShadow: "0 6px 16px rgba(0,0,0,0.05)",
}

const content: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}

const heading: React.CSSProperties = {
  margin: 0,
  fontSize: "1.5rem",
  fontWeight: 600,
  color: "#111827",
}

const paragraph: React.CSSProperties = {
  margin: 0,
  marginTop: "0.75rem",
  fontSize: "1rem",
  lineHeight: 1.7,
  color: "#4B5563",
}

const indicators: React.CSSProperties = {
  display: "flex",
  gap: 10,
  marginTop: "1.75rem",
}

const dot: React.CSSProperties = {
  width: 10,
  height: 10,
  borderRadius: "50%",
  cursor: "pointer",
}
