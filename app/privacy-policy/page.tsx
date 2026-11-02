import { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { ShieldCheck, Mail, Phone, MapPin, Calendar, Lock, Eye, FileText, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | Saavik Solutions",
  description: "Learn how Saavik Solutions collects, protects, and manages your personal and business data across our IT and software development services.",
}

export default function PrivacyPolicyPage() {
  const lastUpdated = "November 2, 2026"

  const sections = [
    {
      id: "introduction",
      title: "1. Introduction & Scope",
      icon: <FileText className="h-5 w-5 text-purple-400" />,
      content: (
        <>
          <p className="text-gray-300 leading-relaxed mb-4">
            Saavik Solutions (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to safeguarding your privacy and ensuring your personal information is protected. This Privacy Policy outlines the types of information we collect when you visit our website (
            <Link href="/" className="text-purple-400 hover:text-purple-300 underline underline-offset-4">
              saaviksolutions.com
            </Link>
            ), engage with our software development, IT consulting, cloud engineering, or staffing services, and how that information is utilized, stored, and protected.
          </p>
          <p className="text-gray-300 leading-relaxed">
            By accessing our website or utilizing our services, you acknowledge the terms described in this Privacy Policy. If you do not agree with this policy, please discontinue use of our site and services.
          </p>
        </>
      ),
    },
    {
      id: "information-collected",
      title: "2. Information We Collect",
      icon: <Eye className="h-5 w-5 text-purple-400" />,
      content: (
        <>
          <p className="text-gray-300 leading-relaxed mb-4">
            We collect information directly from you when you submit contact inquiries, request quotes, apply for career openings, or collaborate with us on technical projects:
          </p>
          <ul className="space-y-3 mb-4 text-gray-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-purple-400 shrink-0 mt-0.5" />
              <span>
                <strong>Contact Data:</strong> Full name, corporate email address, telephone number, job title, and company name.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-purple-400 shrink-0 mt-0.5" />
              <span>
                <strong>Project & Technical Details:</strong> Specifications, scope requirements, project budgets, and technical architectures shared during consultations.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-purple-400 shrink-0 mt-0.5" />
              <span>
                <strong>Automated Device & Usage Information:</strong> IP addresses, browser specifications, operating system versions, referral URLs, and interactions with page elements via industry-standard analytics tools.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-purple-400 shrink-0 mt-0.5" />
              <span>
                <strong>Job Applicants:</strong> Resumes, portfolios, employment history, and educational background submitted through our Careers page.
              </span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "usage",
      title: "3. How We Use Your Information",
      icon: <ShieldCheck className="h-5 w-5 text-purple-400" />,
      content: (
        <>
          <p className="text-gray-300 leading-relaxed mb-4">
            We process your information strictly for legitimate commercial and technical purposes, including:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4 text-gray-300">
            <li className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="font-semibold text-white block mb-1">Service Delivery</span>
              Executing customized software development, enterprise integrations, and IT infrastructure operations.
            </li>
            <li className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="font-semibold text-white block mb-1">Inquiry Responses</span>
              Preparing project proposals, scoping estimates, schedules, and technological assessments.
            </li>
            <li className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="font-semibold text-white block mb-1">Security & Integrity</span>
              Monitoring platform performance, mitigating cybersecurity threats, and preventing unauthorized access.
            </li>
            <li className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="font-semibold text-white block mb-1">Legal Compliance</span>
              Fulfilling statutory obligations, regulatory requirements, tax audits, and dispute resolutions.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "data-sharing",
      title: "4. Information Sharing & Third Parties",
      icon: <Lock className="h-5 w-5 text-purple-400" />,
      content: (
        <>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>Saavik Solutions does not sell, rent, or trade your personal information.</strong> We only share data under the following defined parameters:
          </p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-purple-400 font-bold">&bull;</span>
              <span>
                <strong>Vetted Infrastructure Providers:</strong> Trusted third-party cloud hosting and database systems (such as AWS, Google Cloud, and Vercel) operating under strict data processing agreements.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 font-bold">&bull;</span>
              <span>
                <strong>Legal & Regulatory Mandates:</strong> Where disclosure is required by subpoena, judicial proceeding, or applicable governmental statute.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 font-bold">&bull;</span>
              <span>
                <strong>Corporate Restructuring:</strong> In the event of a merger, acquisition, or sale of assets, with immediate written notification to affected parties.
              </span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "security",
      title: "5. Data Security & Storage",
      icon: <ShieldCheck className="h-5 w-5 text-purple-400" />,
      content: (
        <>
          <p className="text-gray-300 leading-relaxed mb-4">
            We enforce robust technical and organizational security protocols, including TLS/SSL encryption for data in transit, encrypted storage protocols, role-based access controls (RBAC), and regular vulnerability assessments.
          </p>
          <p className="text-gray-300 leading-relaxed">
            While no transmission over the public internet can be guaranteed as 100% impenetrable, we continually refine our security architecture in line with global cybersecurity standards.
          </p>
        </>
      ),
    },
    {
      id: "your-rights",
      title: "6. Your Privacy Rights",
      icon: <FileText className="h-5 w-5 text-purple-400" />,
      content: (
        <>
          <p className="text-gray-300 leading-relaxed mb-4">
            Depending on your jurisdiction (such as under GDPR, CCPA, or Indian IT Act guidelines), you may hold the following statutory rights:
          </p>
          <ul className="space-y-2 mb-4 text-gray-300">
            <li>&bull; The right to request access to personal data held by us.</li>
            <li>&bull; The right to rectify inaccurate, obsolete, or incomplete information.</li>
            <li>&bull; The right to request deletion (&ldquo;Right to be Forgotten&rdquo;) of your data.</li>
            <li>&bull; The right to restrict or object to automated data processing.</li>
            <li>&bull; The right to obtain your data in a structured, machine-readable format.</li>
          </ul>
          <p className="text-gray-300 leading-relaxed">
            To exercise any of these privileges, please send a written request to{" "}
            <a href="mailto:info@saaviksolutions.com" className="text-purple-400 hover:text-purple-300 underline">
              info@saaviksolutions.com
            </a>
            . We process valid requests within 30 calendar days.
          </p>
        </>
      ),
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="bg-black text-white">
        <Navbar />
      </div>

      {/* Hero Header Section */}
      <section className="relative w-full pt-32 pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24 overflow-hidden border-b border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <ShieldCheck className="h-3.5 w-3.5 text-purple-400" />
              <span>LEGAL DOCUMENTATION</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Privacy{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
              Learn how Saavik Solutions protects, processes, and respects your privacy across our IT consulting, enterprise software, and staffing operations.
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-gray-400 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
              <Calendar className="h-3.5 w-3.5 text-purple-400" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 backdrop-blur-sm shadow-xl"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="h-10 w-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-white tracking-tight">{section.title}</h2>
                </div>
                {section.content}
              </div>
            ))}

            {/* Contact Box */}
            <div className="rounded-2xl bg-gradient-to-br from-indigo-950/40 via-purple-950/30 to-black border border-purple-500/30 p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-3">7. Privacy Inquiries & Contact</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                If you have questions, feedback, or concerns regarding this policy or our data management protocols, our privacy team can be reached through:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-purple-400 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white text-sm">Email Address</h3>
                    <a href="mailto:info@saaviksolutions.com" className="text-gray-400 text-sm hover:text-white transition-colors">
                      info@saaviksolutions.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-purple-400 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white text-sm">Telephone</h3>
                    <a href="tel:+14087416166" className="text-gray-400 text-sm hover:text-white transition-colors block">
                      +1 408 741 6166
                    </a>
                    <a href="tel:+919701563362" className="text-gray-400 text-sm hover:text-white transition-colors block">
                      +91 97015 63362
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-purple-400 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white text-sm">Office Location</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Office no: 605 6th Floor,<br />
                      110, Saifabad, Khairtabad,<br />
                      Hyderabad, Telangana 500004
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

