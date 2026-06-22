interface ICardInfo {
  label: string;
  onClick?: () => void;
}

const ResumeCard = (props: ICardInfo) => {
  return (
    <div onClick={props.onClick} className="w-full border-2 border-dashed border-slate-800 hover:border-slate-500 bg-gray-900 transition-all duration-0 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer group">
      <div className="flex items-center gap-2.5 text-slate-500 group-hover:text-slate-300 transition-colors duration-0">
        <span className="text-md font-medium font-mono tracking-wide text-slate-300">
          {props.label}
        </span>
      </div>
    </div>
  )
};

export default ResumeCard