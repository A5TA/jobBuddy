import { JobCardObject } from '@job-buddy/job';

// Use the function keyword to define the component
export function JobCard({
  jobTitle,
  company,
  location,
  isRemote,
  jobType,
}: JobCardObject) {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <h3 className="font-bold text-lg">{jobTitle}</h3>
      <p className="text-gray-600">{company}</p>
      <p className="text-gray-500">{isRemote ? 'Remote' : location}</p>
      <span
        className={`inline-block mt-2 px-3 py-1 text-sm font-semibold ${
          jobType === 'Full-time' ? 'bg-green-200 text-green-800' : 'bg-blue-200 text-blue-800'
        } rounded-full`}
      >
        {jobType}
      </span>
    </div>
  );
}

export default JobCard;