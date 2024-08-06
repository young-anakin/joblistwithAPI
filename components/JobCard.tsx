import React from 'react';
import { Job } from '../types/index'

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="border border-solid border-gray rounded-3xl p-6 flex gap-4">
       <img className="h-12 w-12" src={job.image ? job.image : "/image1.jpg"} alt={`${job.company} logo`} />
      <div>
        <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
        <div className="flex items-center text-gray-500 mb-4">
          <span>{job.company}</span>
          <span className="mx-2">•</span>
          <span>{job.about.location}</span>
        </div>
        <p className="text-gray-700 mb-4">{job.description}</p>
        
        <div className="flex gap-3 mt-2">
                <button className="bg-green-100 w-auto rounded-full text-green-400 border border-green h-8 px-4">
                  In person
                </button>
                <button className="w-auto rounded-full text-orange-400 border border-orange-400 h-8 px-4">
                  Education
                </button>
                <button className="w-auto rounded-full text-Slate-Blue border border-Slate-Blue h-8 px-4">
                  IT
                </button>
      </div>
        
      </div>
    </div>
  );
};

export default JobCard;
