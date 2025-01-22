export default function ProjectCardSkeleton() {
  return (
    <div className="w-[811px] h-[161px] bg-white rounded-[10px] p-6 flex gap-6 shadow-[0px_0px_10px_rgba(0,0,0,0.1)]">
      <div className="w-[200px] h-[129px] bg-gray-200 rounded-[10px] animate-pulse" />
      <div className="flex-1 flex flex-col">
        <div className="w-3/4 h-[18px] bg-gray-200 rounded animate-pulse mb-2" />
        <div className="w-full h-[12px] bg-gray-200 rounded animate-pulse" />
        <div className="mt-auto flex justify-between items-center">
          <div className="flex gap-2">
            <div className="w-[80px] h-[24px] bg-gray-200 rounded animate-pulse" />
            <div className="w-[120px] h-[24px] bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="w-[98px] h-[39px] bg-gray-200 rounded-[6px] animate-pulse" />
        </div>
      </div>
    </div>
  );
} 