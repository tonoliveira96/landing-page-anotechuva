export const RainCloud = ({ animationClass = "" }: { animationClass?: string; }) => {
  const drops = ["", "", "", "", "", "", "", "", "", "", ""];
  
  return (
    <div
      className={"w-40 h-36 border-b-[1px] " + animationClass}
      style={{
        borderBottomColor: "#2563EB",
      }}
    >
      <div className="
        relative
        w-40 
        h-12 
        bg-slate-50
        rounded-full 
        z-10
        before:absolute 
        before:bg-slate-50 
        before:rounded-full
        before:w-12 before:h-12
        before:top-[-1.5rem]
        before:left-6
        before:shadow-[50px_0_0_16px_rgba(248,250,252,1)]
        ">
      </div>
      <div className="flex justify-center gap-2 mt-[-1rem]">
        {drops.map((drop, index) => (
          <span
            key={index.toString()}
            className="
            border-l-2
            border-l-transparent
            border-r-2
            border-r-transparent
            border-b-8
            border-b-blue-600
            animate-rainfall
          "
            style={{ animationDelay: `${index * Math.random() * 0.2}s` }}
          >
          </span>
        ))}
      </div>
    </div>
  );
};