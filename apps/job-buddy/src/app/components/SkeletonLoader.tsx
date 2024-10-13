export default function SkeletonLoader() {
    return (
      <div>
        {[...Array(5)].map((_, idx) => (
          <div key={idx} className="animate-pulse mb-4">
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }
  