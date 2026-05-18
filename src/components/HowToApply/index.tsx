// const HTApply = () => {
//   return (
//     <section id="contact" className="relative py-20 md:py-[120px]">
//       <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"></div>
//       <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#a1c5ff] dark:bg-dark-700 lg:h-[45%] xl:h-1/2"></div>
//       <div className="container px-4">
//         <div className="-mx-4 flex flex-wrap items-center">
//           <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
//             <div className="ud-contact-content-wrapper">
//               <div className="ud-contact-title mb-12 lg:mb-[150px]">
//                 <span className="mb-6 block text-base font-medium text-dark dark:text-white">
//                   APPLY NOW!
//                 </span>
//                 <h2 className="max-w-[260px] text-[35px] font-semibold leading-[1.14] text-dark dark:text-white">
//                   Send us your resume!
//                 </h2>
//               </div>
//               <div className="mb-12 flex flex-wrap justify-between lg:mb-0">
//                 <div className="mb-8 flex w-[330px] max-w-full">
//                   <div className="mr-6 text-[32px] text-primary">
//                     <svg
//                       width="29"
//                       height="35"
//                       viewBox="0 0 29 35"
//                       className="fill-current"
//                     >
//                       <path d="M14.5 0.710938C6.89844 0.710938 0.664062 6.72656 0.664062 14.0547C0.664062 19.9062 9.03125 29.5859 12.6406 33.5234C13.1328 34.0703 13.7891 34.3437 14.5 34.3437C15.2109 34.3437 15.8672 34.0703 16.3594 33.5234C19.9688 29.6406 28.3359 19.9062 28.3359 14.0547C28.3359 6.67188 22.1016 0.710938 14.5 0.710938ZM14.9375 32.2109C14.6641 32.4844 14.2812 32.4844 14.0625 32.2109C11.3828 29.3125 2.57812 19.3594 2.57812 14.0547C2.57812 7.71094 7.9375 2.625 14.5 2.625C21.0625 2.625 26.4219 7.76562 26.4219 14.0547C26.4219 19.3594 17.6172 29.2578 14.9375 32.2109Z" />
//                       <path d="M14.5 8.58594C11.2734 8.58594 8.59375 11.2109 8.59375 14.4922C8.59375 17.7188 11.2187 20.3984 14.5 20.3984C17.7812 20.3984 20.4062 17.7734 20.4062 14.4922C20.4062 11.2109 17.7266 8.58594 14.5 8.58594ZM14.5 18.4297C12.3125 18.4297 10.5078 16.625 10.5078 14.4375C10.5078 12.25 12.3125 10.4453 14.5 10.4453C16.6875 10.4453 18.4922 12.25 18.4922 14.4375C18.4922 16.625 16.6875 18.4297 14.5 18.4297Z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
//                       Our Location
//                     </h3>
//                     <p className="text-base text-body-color dark:text-dark-6">
//                       Melbourne Vic 3000 Australia
//                     </p>
//                   </div>
//                 </div>
//                 <div className="mb-8 flex w-[330px] max-w-full">
//                   <div className="mr-6 text-[32px] text-primary">
//                     <svg
//                       width="34"
//                       height="34"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <path d="M16 4H18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
//                       <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
//                       <path d="M9 12l2 2l4-4" />
//                     </svg>

//                   </div>
//                   <div>
//                     <h3 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
//                       Requirement Checklist
//                     </h3>
//                     <p className="text-base text-body-color dark:text-dark-6">
//                       Name, Email & Phone Number
//                     </p>
//                     <p className="mt-1 text-base text-body-color dark:text-dark-6">
//                       License Type & Qualifications
//                     </p>
//                     <p className="text-base text-body-color dark:text-dark-6">
//                       Brief Summary of Work Experience
//                     </p>
//                     <p className="mt-1 text-base text-body-color dark:text-dark-6">
//                       Upload Resume
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
//             <div
//               className="wow fadeInUp rounded-lg bg-white px-8 py-10 shadow-testimonial dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]"
//               data-wow-delay=".2s
//               "
//             >
//               <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white md:text-[28px] md:leading-[1.42]">
//                 Send us your Application
//               </h3>
//               <form>
//                 <div className="mb-[22px]">
//                   <label
//                     htmlFor="fullName"
//                     className="mb-4 block text-sm text-body-color dark:text-dark-6"
//                   >
//                     Full Name*
//                   </label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     placeholder="Adam Gelius"
//                     className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
//                   />
//                 </div>
//                 <div className="mb-[22px]">
//                   <label
//                     htmlFor="email"
//                     className="mb-4 block text-sm text-body-color dark:text-dark-6"
//                   >
//                     Email*
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="example@yourmail.com"
//                     className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
//                   />
//                 </div>
//                 <div className="mb-[22px]">
//                   <label
//                     htmlFor="phone"
//                     className="mb-4 block text-sm text-body-color dark:text-dark-6"
//                   >
//                     Phone*
//                   </label>
//                   <input
//                     type="text"
//                     name="phone"
//                     placeholder="+885 1254 5211 552"
//                     className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
//                   />
//                 </div>
//                 <div className="mb-[30px]">
//                   <label
//                     htmlFor="resume"
//                     className="mb-4 block text-sm text-body-color dark:text-dark-6"
//                   >
//                     Upload Resume & License Type*
//                   </label>
//                   <div className="relative flex h-32 w-full items-center justify-center rounded-md border border-dashed border-primary bg-white p-4 dark:bg-dark-2">
//                     <input
//                       type="file"
//                       name="resume"
//                       id="resume"
//                       accept=".pdf,.doc,.docx"
//                       className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
//                     />
//                     <div className="text-center">
//                       <p className="mb-2 text-sm text-body-color dark:text-dark-6">
//                         Drag & drop or click to upload
//                       </p>
//                       <button
//                         type="button"
//                         className="rounded bg-primary px-4 py-2 text-sm font-medium text-white transition duration-300 hover:bg-primary/90"
//                       >
//                         Choose File
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mb-0">
//                   <button
//                     type="submit"
//                     className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary/90"
//                   >
//                     Send
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HTApply;

"use client";

import React, { useState, useEffect } from "react";

const HTApply = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    license: "",
    summary: "",
  });
  const [resume, setResume] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  useEffect(() => {
  if (submitted) {
    const timer = setTimeout(() => setSubmitted(false), 5000);
    return () => clearTimeout(timer);
  }
}, [submitted]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setResume(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const body = new FormData();
    body.append("fullName", formData.fullName);
    body.append("email", formData.email);
    body.append("phone", formData.phone);
    body.append("license", formData.license);
    body.append("summary", formData.summary);
    if (resume) body.append("resume", resume);

    const res = await fetch("https://api.upriserigging.com/api/apply_now", {
      method: "POST",
      body,
    });

    setLoading(false);
    if (res.ok) {
      setSubmitted(true);
      setFormData({ fullName: "", email: "", phone: "", license: "", summary: "" });
      setResume(null);
    } else {
      alert("Failed to send application.");
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-[120px]">
      <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"></div>
      <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#a1c5ff] dark:bg-dark-700 lg:h-[45%] xl:h-1/2"></div>
      <div className="container px-4">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
          <div className="ud-contact-content-wrapper">
               <div className="ud-contact-title mb-12 lg:mb-[150px]">
                 <span className="mb-6 block text-base font-medium text-dark dark:text-white">
                   APPLY NOW!
                 </span>
                 <h2 className="max-w-[260px] text-[35px] font-semibold leading-[1.14] text-dark dark:text-white">
                   Send us your resume!
                 </h2>
               </div>
               <div className="mb-12 flex flex-wrap justify-between lg:mb-0">
                 <div className="mb-8 flex w-[330px] max-w-full">
                   <div className="mr-6 text-[32px] text-primary">
                     <svg
                       width="29"
                       height="35"
                       viewBox="0 0 29 35"
                       className="fill-current"
                     >
                       <path d="M14.5 0.710938C6.89844 0.710938 0.664062 6.72656 0.664062 14.0547C0.664062 19.9062 9.03125 29.5859 12.6406 33.5234C13.1328 34.0703 13.7891 34.3437 14.5 34.3437C15.2109 34.3437 15.8672 34.0703 16.3594 33.5234C19.9688 29.6406 28.3359 19.9062 28.3359 14.0547C28.3359 6.67188 22.1016 0.710938 14.5 0.710938ZM14.9375 32.2109C14.6641 32.4844 14.2812 32.4844 14.0625 32.2109C11.3828 29.3125 2.57812 19.3594 2.57812 14.0547C2.57812 7.71094 7.9375 2.625 14.5 2.625C21.0625 2.625 26.4219 7.76562 26.4219 14.0547C26.4219 19.3594 17.6172 29.2578 14.9375 32.2109Z" />
                       <path d="M14.5 8.58594C11.2734 8.58594 8.59375 11.2109 8.59375 14.4922C8.59375 17.7188 11.2187 20.3984 14.5 20.3984C17.7812 20.3984 20.4062 17.7734 20.4062 14.4922C20.4062 11.2109 17.7266 8.58594 14.5 8.58594ZM14.5 18.4297C12.3125 18.4297 10.5078 16.625 10.5078 14.4375C10.5078 12.25 12.3125 10.4453 14.5 10.4453C16.6875 10.4453 18.4922 12.25 18.4922 14.4375C18.4922 16.625 16.6875 18.4297 14.5 18.4297Z" />
                     </svg>
                   </div>
                   <div>
                     <h3 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
                       Our Location
                     </h3>
                     <p className="text-base text-body-color dark:text-dark-6">
                       Doreen Victoria (VIC), Melbourne, Australia 3000
                     </p>
                   </div>
                 </div>
                 <div className="mb-8 flex w-[330px] max-w-full">
                   <div className="mr-6 text-[32px] text-primary">
                     <svg
                       width="34"
                       height="34"
                       viewBox="0 0 24 24"
                       fill="none"
                       stroke="currentColor"
                       strokeWidth="2"
                       strokeLinecap="round"
                       strokeLinejoin="round"
                     >
                       <path d="M16 4H18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                       <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                       <path d="M9 12l2 2l4-4" />
                     </svg>
                   </div>
                   <div>
                     <h3 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
                       Requirement Checklist
                     </h3>
                     <p className="text-base text-body-color dark:text-dark-6">
                       Name, Email & Phone Number
                     </p>
                     <p className="mt-1 text-base text-body-color dark:text-dark-6">
                       License Type & Qualifications
                     </p>
                     <p className="text-base text-body-color dark:text-dark-6">
                       Brief Summary of Work Experience
                     </p>
                     <p className="mt-1 text-base text-body-color dark:text-dark-6">
                       Upload Resume
                     </p>
                   </div>
                 </div>
               </div>
              </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div className="wow fadeInUp rounded-lg bg-white px-8 py-10 shadow-testimonial dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]" data-wow-delay=".2s">
              <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white md:text-[28px] md:leading-[1.42]">
                Send us your Application
              </h3>
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mb-[22px]">
                  <label htmlFor="fullName" className="mb-4 block text-sm text-body-color dark:text-dark-6">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full border border-gray-400 rounded-md px-4 py-2 bg-transparent text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  />
                </div>
                <div className="mb-[22px]">
                  <label htmlFor="email" className="mb-4 block text-sm text-body-color dark:text-dark-6">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@yourmail.com"
                    required
                    className="w-full border border-gray-400 rounded-md px-4 py-2 bg-transparent text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  />
                </div>
                <div className="mb-[22px]">
                  <label htmlFor="phone" className="mb-4 block text-sm text-body-color dark:text-dark-6">
                    Phone*
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+885 1254 5211 552"
                    required
                    className="w-full border border-gray-400 rounded-md px-4 py-2 bg-transparent text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  />
                </div>
                <div className="mb-[22px]">
                  <label htmlFor="license" className="mb-4 block text-sm text-body-color dark:text-dark-6">
                    License Type*
                  </label>
                  <input
                    type="text"
                    name="license"
                    value={formData.license}
                    onChange={handleChange}
                    placeholder="Enter License here"
                    required
                    className="w-full border border-gray-400 rounded-md px-4 py-2 bg-transparent text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  />
                </div>
                <div className="mb-[22px]">
                  <label htmlFor="summary" className="mb-4 block text-sm text-body-color dark:text-dark-6">
                    Brief Work Summary*
                  </label>
                  <textarea
                    name="summary"
                    value={formData.summary}
                    onChange={handleChange}
                    placeholder="Type your work background here"
                    required
                    className="w-full border border-gray-400 rounded-md px-4 py-2 resize-none bg-transparent text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  ></textarea>
                </div>
                <div className="mb-[30px]">
                  <label htmlFor="resume" className="mb-4 block text-sm text-body-color dark:text-dark-6">
                    Upload Resume (.pdf, .doc, .jpg, .png)*
                  </label>
                  <div className="relative flex h-32 w-full items-center justify-center rounded-md border-2 border-dashed border-primary bg-white p-4 dark:bg-dark-2">
                    <input
                      type="file"
                      name="resume"
                      id="resume"
                      accept=".pdf,.doc,.docx,.jpg,.png"
                      onChange={handleFileChange}
                      required
                      className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                    />
                    <div className="text-center">
                      <p className="mb-2 text-sm text-body-color dark:text-dark-6">Drag & drop or click to upload</p>
                      <button type="button" className="rounded bg-primary px-4 py-2 text-sm font-medium text-white transition duration-300 hover:bg-primary/90">
                        Choose File
                      </button>
                       {resume && (
                          <p className="mt-2 text-sm font-medium text-gray-700 dark:text-white">
                            📎 {resume.name}
                          </p>
                        )}
                    </div>
                  </div>
                </div>
                <div className="mb-0">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary/90"
                  >
                    {loading ? "Sending..." : "Send"}
                  </button>
                  {submitted && <p className="mt-4 text-green-600">✅ Application has been sent!</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HTApply;
