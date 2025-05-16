export default function JobDetails({ job }: { job: any }) {
  return (
    <div className="rounded-lg bg-white p-8 shadow-md">
      {/* Job Summary */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">Job Summary</h2>
        <div className="prose prose-gray max-w-none" dangerouslySetInnerHTML={{ __html: job.description }}></div>
      </div>

      {/* Key Details */}
      <div className="mb-8 grid grid-cols-1 gap-4 rounded-lg bg-gray-50 p-4 sm:grid-cols-2">
        <div>
          <h3 className="text-sm font-medium text-gray-500">Job Type</h3>
          <p className="text-base font-medium text-gray-900">{job.employmentType}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500">Experience</h3>
          <p className="text-base font-medium text-gray-900">{job.experience}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500">Location</h3>
          <p className="text-base font-medium text-gray-900">{job.location}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500">Salary Range</h3>
          <p className="text-base font-medium text-gray-900">{job.salary}</p>
        </div>
      </div>

      {/* Responsibilities */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Key Responsibilities</h2>
        <ul className="list-inside list-disc space-y-2 text-gray-700">
          {job.responsibilities.map((responsibility: string, index: number) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>

      {/* Requirements */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Requirements</h2>
        <ul className="list-inside list-disc space-y-2 text-gray-700">
          {job.requirements.map((requirement: string, index: number) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      </div>

      {/* Skills */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {job.skills.map((skill: string, index: number) => (
            <span key={index} className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-600">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-gray-900">Benefits</h2>
        <ul className="list-inside list-disc space-y-2 text-gray-700">
          {job.benefits.map((benefit: string, index: number) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

