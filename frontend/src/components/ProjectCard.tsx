import { Project } from '@/types/project';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const description = project?.Description?.[0]?.children?.[0]?.text || '';

  return (
    <>
      {/* Mobile Card Layout */}
      <div className="block md:hidden bg-white rounded-[10px] overflow-hidden shadow-sm">
        <div className="flex gap-3 p-3">
          {/* Project Image */}
          <div className="w-[100px] h-[100px] flex-shrink-0 rounded-lg overflow-hidden">
            <img
              src={project?.Image?.url 
                ? project.Image.url.startsWith('http')
                  ? project.Image.url
                  : `${process.env.NEXT_PUBLIC_STRAPI_URL}${project.Image.url}`
                : '/placeholder-image.jpg'
              }
              alt={project?.Title || 'Project image'}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Info */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-[16px] font-medium text-[#303030] mb-1">
                {project?.Title}
              </h3>
              <div className="flex flex-col gap-0.5">
                <span className="text-[12px] font-medium text-[#303030]">
                  {project?.Language}
                </span>
                <div className="flex items-center gap-1">
                  <span className="text-[12px] text-[#8D8D8D]">Oleh</span>
                  <span className="text-[12px] text-[#8D8D8D]">
                    {project?.Author}
                  </span>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            {project?.isPublished && (
              <div className="self-end">
                <button className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-[#F39519] to-[#FFCD67] rounded-lg">
                  <span className="text-white font-bold">A</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Desktop Card Layout */}
      <div className="hidden md:flex group w-[811px] h-[161px] bg-white rounded-[10px] overflow-hidden shadow-[0px_0px_10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[0px_0px_20px_rgba(0,0,0,0.15)] hover:scale-[1.01] cursor-pointer">
        {/* Project Image */}
        <div className="w-[200px] h-[161px] flex-shrink-0 overflow-hidden">
          <img
            src={project?.Image?.url 
              ? project.Image.url.startsWith('http')
                ? project.Image.url
                : `${process.env.NEXT_PUBLIC_STRAPI_URL}${project.Image.url}`
              : '/placeholder-image.jpg'
            }
            alt={project?.Title || 'Project image'}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Project Info */}
        <div className="flex-1 p-6">
          <div className="flex flex-col font-roboto">
            <h3 className="text-[18px] font-bold leading-[11px] text-[#303030] mb-2 transition-colors duration-300 group-hover:text-[#DF5532]">
              {project?.Title}
            </h3>
            <p className="font-roboto text-[12px] weight-500 leading-[21px] text-[#9E95A2]">
              {description}
            </p>
          </div>

          <div className="flex justify-between items-center mt-6">
            <div className="flex flex-col gap-1">
              <span className="font-roboto text-[12px] leading-[11px] text-[#303030] rounded-[4px] w-fit transition-colors duration-300 group-hover:text-[#DF5532]">
                {project?.Language}
              </span>
              <div className="flex items-center gap-1">
                <span className="font-roboto text-[12px] leading-[16px] text-[#8D8D8D]">Oleh</span>
                <span className="font-roboto text-[12px] font-bold leading-[16px] text-[#9E95A2] transition-colors duration-300 group-hover:text-[#303030]">
                  {project?.Author}
                </span>
              </div>
            </div>
            {project?.isPublished && (
              <button className="font-roboto px-4 py-2 bg-gradient-to-br from-[#F39519] to-[#FFCD67] leading-[16px] rounded-[6px] w-[98px] h-[39px] transition-all duration-300 hover:shadow-[0px_4px_12px_rgba(243,149,25,0.3)] hover:scale-105 active:scale-95">
                <span className="w-[72px] h-[16px] text-white text-[13px] weight-500">
                  Add to Cart
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
} 
