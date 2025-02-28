import { Link } from 'react-router-dom';

export default function ServiceCard({ title, description, items, url }) {
  // Convert title to slug for use in ID (for accessibility and SEO)
  const titleSlug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
  
  return (
    <div 
      className="bg-gray-800 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col"
      id={`service-${titleSlug}`}
    >
      <h3 className="text-xl font-semibold mb-4 text-white">
        <Link 
          to={url} 
          className="hover:text-blue-400 transition-colors"
          title={`Learn more about ${title}`}
        >
          {title}
        </Link>
      </h3>
      
      <p className="text-gray-300 mb-6">{description}</p>
      
      <ul className="space-y-3 mb-6">
        {items.map((item, index) => (
          <li key={index} className="flex items-start text-gray-300">
            <span className="mr-2 text-blue-400" aria-hidden="true">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      
      {/* Adding a "Read more" link improves SEO by providing more internal linking */}
      <div className="mt-auto">
        <Link 
          to={url} 
          className="inline-flex items-center text-blue-400 hover:text-blue-500"
          aria-label={`Read more about ${title}`}
        >
          Learn More
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}