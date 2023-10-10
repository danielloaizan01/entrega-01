interface ProgressBarProps {
    percentage: number;
    text: string;
  }

const ProgressBar = ({ percentage, text }:ProgressBarProps) => {
  return (
    <div className=" flex-col gap-2">
      <div className="justify-between items-center flex">
          <span className="text-xs text-gray-500">{text}</span>
          <span className="text-xs text-gray-500">{percentage}%</span>
      </div>
      <div className="barra rounded-full">
        
        <div className="porcentaje" style={{ width: `${percentage}%`,borderRadius: "inherit" }}></div>
      
      </div>
    </div>
  );
};

export {ProgressBar};
