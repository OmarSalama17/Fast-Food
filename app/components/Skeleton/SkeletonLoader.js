import React from "react";

const SkeletonLoader = () => {
  const renderSkeletonList = (count) => {
    return Array.from({ length: count }).map((_, index) => (
      <div
        key={index}
        className="h-6 w-full bg-gray-300 animate-pulse rounded mb-2"
      ></div>
    ));
  };

  return (
    <div className="p-4 space-y-6">
      {/* Hero Banner */}
      <div className="h-40 w-full bg-gray-300 animate-pulse rounded"></div>

      {/* Exclusive List */}
      <div>
        <div className="h-6 w-48 bg-gray-300 animate-pulse rounded mb-4"></div>
        <div>{renderSkeletonList(5)}</div>
      </div>

      {/* Explore List */}
      <div>
        <div className="h-6 w-48 bg-gray-300 animate-pulse rounded mb-4"></div>
        <div>{renderSkeletonList(5)}</div>
      </div>

      {/* Bestseller List */}
      <div>
        <div className="h-6 w-48 bg-gray-300 animate-pulse rounded mb-4"></div>
        <div>{renderSkeletonList(5)}</div>
      </div>

      {/* Deals List */}
      <div>
        <div className="h-6 w-48 bg-gray-300 animate-pulse rounded mb-4"></div>
        <div>{renderSkeletonList(5)}</div>
      </div>

      {/* Banners */}
      <div>{renderSkeletonList(2)}</div>

      {/* Another Explore List */}
      <div>
        <div className="h-6 w-48 bg-gray-300 animate-pulse rounded mb-4"></div>
        <div>{renderSkeletonList(5)}</div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
