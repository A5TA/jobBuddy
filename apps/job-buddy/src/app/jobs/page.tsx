'use client'
import { useState, useEffect } from 'react';
import SkeletonLoader from '../components/SkeletonLoader'; // For search results loading
import withLoading from '../components/withLoading';
import { JobCard } from '@job-buddy/job-card';
import { JobCardObject } from '@job-buddy/job';

const fetchJobs = async (searchTerm: string): Promise<JobCardObject[]> => {
  // Simulated API fetch with delay
  const jobs = [
    {
        id: 1,
        jobTitle: 'Frontend Developer',
        company: 'Tech Innovations',
        location: 'New York, NY',
        isRemote: true,
        jobType: 'Full-time'
    },
    {
        id: 2,
        jobTitle: 'Backend Developer',
        company: 'Tech Innovations',
        location: 'New York, NY',
        isRemote: true,
        jobType: 'Part-time'
      },
      {
        id: 3,
        jobTitle: 'Software Developer',
        company: 'Tech Innovations',
        location: 'New York, NY',
        isRemote: false,
        jobType: 'Full-time'
      }
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredJobs = jobs.filter(job =>
        job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
      resolve(filteredJobs);
    }, 300); //delay can be modified here
  });
};

function JobsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState<JobCardObject[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);


  useEffect(() => {
    setSearchLoading(true); // Set search loading state when searching
    fetchJobs(searchTerm).then((data) => {
    setJobs(data);
    setSearchLoading(false); // Turn off search loading after fetching jobs
    })
  }, [searchTerm]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
      <div className="container mx-auto p-4">
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={handleSearch}
          className="border p-2 rounded w-full mb-4"
        />

        {searchLoading ? (
          <SkeletonLoader />  // Skeleton loader for search results
        ) : (
          <ul>
            {jobs.map((job) => (
              <JobCard {...job}/>
            ))}
          </ul>
        )}
      </div>
  );
}
export default withLoading(JobsPage);