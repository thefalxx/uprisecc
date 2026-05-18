import Link from "next/link";

// const SkilledCrewAction = () => {
//   return (
//     <section className="relative z-10 overflow-hidden bg-primary py-20 lg:py-[115px]">
//       <div className="container mx-auto">
//         <div className="relative overflow-hidden">
//           <div className="-mx-4 flex flex-wrap items-stretch">
//             <div className="w-full px-4">
//               <div className="mx-auto max-w-[570px] text-center">
//                 <h2 className="mb-2.5 text-3xl font-bold text-white md:text-[38px] md:leading-[1.44]">
//                   <span>Need a Skilled Crane Crew?</span><br />  
//                   <span className="text-3xl font-normal md:text-[40px]">
//                     {" "}
//                     Let&apos;s Talk!{" "}
                    
//                   </span>
//                 </h2>
//                 <p className="mx-auto mb-6 max-w-[515px] text-base leading-[1.5] text-white">
//                   When you hire Uprise Cranes and Contractors, you&apos;re not just getting a service—you&apos;re gaining a trusted partner who looks for ways to improve efficiency, reduce costs, and keep your project moving.
//                 </p>
//                 <Link
//                   href="/contact"
//                   className="inline-block rounded-md border border-transparent bg-secondary px-7 py-3 text-base font-medium text-white transition hover:bg-[#0BB489]"
//                 >
//                   Contact Us Today!
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <span className="absolute left-0 top-0">
//           <svg
//             width="495"
//             height="470"
//             viewBox="0 0 495 470"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <circle
//               cx="55"
//               cy="442"
//               r="138"
//               stroke="white"
//               strokeOpacity="0.04"
//               strokeWidth="50"
//             />
//             <circle
//               cx="446"
//               r="39"
//               stroke="white"
//               strokeOpacity="0.04"
//               strokeWidth="20"
//             />
//             <path
//               d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z"
//               stroke="white"
//               strokeOpacity="0.08"
//               strokeWidth="12"
//             />
//           </svg>
//         </span>
//         <span className="absolute bottom-0 right-0">
//           <svg
//             width="493"
//             height="470"
//             viewBox="0 0 493 470"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <circle
//               cx="462"
//               cy="5"
//               r="138"
//               stroke="white"
//               strokeOpacity="0.04"
//               strokeWidth="50"
//             />
//             <circle
//               cx="49"
//               cy="470"
//               r="39"
//               stroke="white"
//               strokeOpacity="0.04"
//               strokeWidth="20"
//             />
//             <path
//               d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z"
//               stroke="white"
//               strokeOpacity="0.06"
//               strokeWidth="13"
//             />
//           </svg>
//         </span>
//       </div>
//     </section>
//   );
// };


const SkilledCrewAction = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-white py-20 lg:py-[115px]">
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-amber-400" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Corner marks */}
      <span className="absolute top-4 left-4 w-9 h-9 border-t-2 border-l-2 border-blue-600 opacity-15" />
      <span className="absolute top-4 right-4 w-9 h-9 border-t-2 border-r-2 border-blue-600 opacity-15" />
      <span className="absolute bottom-4 left-4 w-9 h-9 border-b-2 border-l-2 border-blue-600 opacity-15" />
      <span className="absolute bottom-4 right-4 w-9 h-9 border-b-2 border-r-2 border-blue-600 opacity-15" />

      <div className="container mx-auto relative z-10">
        <div className="mx-auto max-w-[560px] text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 rounded px-3.5 py-1.5 text-[11px] font-semibold tracking-widest uppercase text-blue-700 bg-blue-50 border border-blue-200">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            Certified Crane Operators
          </div>

          <p className="mb-2.5 text-xs font-semibold tracking-[0.2em] uppercase text-blue-600">
            Uprise Cranes & Contractors
          </p>

          <h2 className="mb-1.5 text-5xl font-bold uppercase tracking-tight text-slate-900 leading-none font-condensed">
            Need a Skilled<br />Crane Crew?
          </h2>
          <p className="mb-5 text-[44px] font-normal text-blue-600 leading-tight font-condensed">
            Let&apos;s Talk.
          </p>

          {/* Amber divider */}
          <div className="mx-auto mb-5 h-0.5 w-12 rounded bg-amber-400" />

          <p className="mx-auto mb-9 max-w-[480px] text-[15px] leading-relaxed text-slate-500">
            When you hire Uprise Cranes, you&apos;re not just getting a service—you&apos;re gaining a trusted partner who improves efficiency, reduces costs, and keeps your project moving.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded px-7 py-3.5 text-[15px] font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 transition-colors font-condensed"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkilledCrewAction;
