import { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { FileText, CheckCircle2, Shield, AlertTriangle, Scale, Mail, Phone, MapPin, Calendar, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service | Saavik Solutions",
  description: "Read the Terms of Service governing the use of Saavik Solutions' website, enterprise software development, IT consulting, and digital solutions.",
}

export default function TermsPage() {
  const lastUpdated = "November 2, 2026"

  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      icon: <CheckCircle2 className="h-5 w-5 text-purple-400" />,
      content: (
        <>
          <p className="text-gray-300 leading-relaxed mb-4">
            These Terms of Service (&ldquo;Terms&rdquo;) establish a legally binding agreement between you (&ldquo;Client,&rdquo; &ldquo;User,&rdquo; or &ldquo;you&rdquo;) and <strong>Saavik Solutions</strong> (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). By visiting our website (
            <Link href="/" className="text-purple-400 hover:text-purple-300 underline underline-offset-4">
              saaviksolutions.com
            </Link>
            ), subscribing to services, executing a Statement of Work (SOW), or engaging our IT professionals, you confirm your acceptance of these Terms.
          </p>
          <p className="text-gray-300 leading-relaxed">
            If you represent a corporate entity, you represent and warrant that you possess full legal authority to bind that organization to these terms.
          </p>
        </>
      ),
    },
    {
      id: "services",
      title: "2. Scope of Services",
      icon: <FileText className="h-5 w-5 text-purple-400" />,
      content: (
        <>
          <p className="text-gray-300 leading-relaxed mb-4">
            Saavik Solutions provides enterprise technology services, including custom software development, mobile & web application engineering, IT staffing solutions, ERP & CRM deployment, cloud architecture, and digital marketing consulting.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Specific project deliverables, milestones, pricing structures, and acceptance criteria will be formally documented in written Statements of Work (SOW) or master service agreements mutually signed by both parties.
          </p>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300">
            <strong className="text-white block mb-1">Service Modifications:</strong>
            We continually evolve our technological offerings. Saavik Solutions reserves the right to modify, optimize, or phase out features with reasonable notice where ongoing deliverables are unaffected.
          </div>
        </>
      ),
    },
    {
      id: "intellectual-property",
      title: "3. Intellectual Property Rights",
      icon: <Shield className="h-5 w-5 text-purple-400" />,
      content: (
        <>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>Client Deliverables:</strong> Upon receipt of full and final payment for services rendered, all custom source code, documentation, and tailored software created exclusively for the Client under an agreed SOW shall transfer to the Client.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>Pre-Existing & Proprietary IP:</strong> Saavik Solutions retains all ownership, rights, and title to its pre-existing code libraries, architectural frameworks, algorithmic toolkits, and proprietary workflows utilized during the development lifecycle.
          </p>
          <p className="text-gray-300 leading-relaxed">
            <strong>Website Content:</strong> All brand logos, trademarks, visual styling, illustrations, and textual content on this website are protected under copyright and intellectual property legislation.
          </p>
        </>
      ),
    },
    {
      id: "payment-terms",
      title: "4. Invoicing & Payment Terms",
      icon: <Clock className="h-5 w-5 text-purple-400" />,
      content: (
        <>
          <p className="text-gray-300 leading-relaxed mb-4">
            Billing models (including fixed-bid milestones, time-and-materials, and retainer-based staffing) are defined in your specific commercial agreement:
          </p>
          <ul className="space-y-2 mb-4 text-gray-300 text-sm">
            <li>&bull; Invoices are issued in accordance with milestone completions or monthly billing cycles.</li>
            <li>&bull; Standard payment terms are Net 15 or Net 30 from the invoice date unless otherwise negotiated.</li>
            <li>&bull; Overdue balances may accrue late fees at 1.5% per month or the highest rate permitted by statutory law.</li>
            <li>&bull; Applicable taxes, VAT, GST, or cross-border remittance fees are the responsibility of the client.</li>
          </ul>
        </>
      ),
    },
    {
      id: "confidentiality",
      title: "5. Confidentiality & Non-Disclosure",
      icon: <Shield className="h-5 w-5 text-purple-400" />,
      content: (
        <>
          <p className="text-gray-300 leading-relaxed mb-4">
            Both parties agree to treat all exchanged non-public business strategies, customer lists, proprietary source code, credentials, and technical data as strictly confidential.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Neither party shall disclose confidential information to any third party without explicit prior written consent, except to vetted personnel and contractors bound by equivalent non-disclosure obligations.
          </p>
        </>
      ),
    },
    {
      id: "liability",
      title: "6. Warranties & Limitation of Liability",
      icon: <AlertTriangle className="h-5 w-5 text-purple-400" />,
      content: (
        <>
          <p className="text-gray-300 leading-relaxed mb-4">
            Saavik Solutions guarantees that services will be performed in a professional, workmanlike manner compliant with industry standards.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>Except as expressly stated, our website and preliminary consultations are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind.</strong>
          </p>
          <p className="text-gray-300 leading-relaxed">
            To the maximum extent permissible by law, Saavik Solutions shall not be liable for indirect, incidental, punitive, or consequential damages (including loss of profits, downtime, or data corruption). Our total aggregate liability under any claim shall not exceed the aggregate fees paid by the client in the three (3) months preceding the incident.
          </p>
        </>
      ),
    },
    {
      id: "governing-law",
      title: "7. Governing Law & Dispute Resolution",
      icon: <Scale className="h-5 w-5 text-purple-400" />,
      content: (
        <>
          <p className="text-gray-300 leading-relaxed mb-4">
            These Terms shall be interpreted and governed in accordance with the substantive laws applicable in the jurisdiction specified in the definitive service contract, without regard to conflict of law principles.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Any disputes arising under these Terms shall first be resolved through good-faith executive mediation before proceeding to binding arbitration or court proceedings.
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
              <Scale className="h-3.5 w-3.5 text-purple-400" />
              <span>TERMS & CONDITIONS</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Terms of{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Service
              </span>
            </h1>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
              Please review the standard terms, obligations, and commercial frameworks governing engagements with Saavik Solutions.
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-gray-400 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
              <Calendar className="h-3.5 w-3.5 text-purple-400" />
              <span>Effective Date: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Terms Sections */}
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

            {/* Inquiries Card */}
            <div className="rounded-2xl bg-gradient-to-br from-indigo-950/40 via-purple-950/30 to-black border border-purple-500/30 p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-3">8. Questions Regarding Terms</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                For commercial contracts, custom enterprise service level agreements (SLAs), or general questions regarding these terms, reach our team directly:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-purple-400 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white text-sm">Contract Enquiries</h3>
                    <a href="mailto:info@saaviksolutions.com" className="text-gray-400 text-sm hover:text-white transition-colors">
                      info@saaviksolutions.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-purple-400 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white text-sm">Telephone Support</h3>
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
                    <h3 className="font-semibold text-white text-sm">Corporate Office</h3>
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

