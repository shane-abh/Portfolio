import TaxRAGPreview from '../ui/TaxRAGPreview';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string | null;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="w-full max-w-[1030px] mx-auto px-8 py-10 flex flex-col items-start space-y-3 bg-gradient-to-b from-white to-[rgba(5,0,255,0.7)] hover:from-white hover:to-blue-400 rounded-lg shadow-lg hover:shadow-[0_0_10px_5px_rgba(255,0,255,0.5)] transition-all duration-300 ease-in-out">
      <div className="w-full space-y-[30px]">
        <h2 className="text-2xl md:text-3xl font-bold text-black font-title">
          {title}
        </h2>
        <p className="text-lg text-black w-full md:max-w-[620px] font-body">
          {description}
        </p>

        <div>
          <span className="text-black font-semibold hover:text-blue-600 transition-colors cursor-pointer">
            Click to explore more →
          </span>
        </div>
        <div className="w-full rounded-md overflow-hidden">
          {title === "Budget 2025 Navigator" || title === "RAG Chat API" ? (
            <div className="w-full h-[400px] flex items-center justify-center bg-transparent">
              <TaxRAGPreview compact={true} className="w-full max-w-full" />
            </div>
          ) : (
            <div className="w-full bg-black rounded-md overflow-hidden">
              <div className="w-full h-[30px] bg-[#474747] px-4 py-0 flex items-center">
                <div className="flex space-x-1">
                  <div className="w-[5px] h-[5px] rounded-full bg-[#CA0000]"></div>
                  <div className="w-[5px] h-[5px] rounded-full bg-[#F9E000]"></div>
                  <div className="w-[5px] h-[5px] rounded-full bg-[#00DD16]"></div>
                </div>
              </div>
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={`Screenshot of ${title}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
