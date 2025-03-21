export default function Color({ colorId, fill, onSelect, selectedColorId }) {
    const isSelected = selectedColorId === colorId;
  
    return (
      <div className="w-[28.84px] h-[28.84px] flex items-center justify-center lg:w-10 lg:h-10">
        {isSelected && (
          <div className="absolute w-[28.84px] h-[28.84px] p-[7.21px] flex gap-[7.21px]
               rounded-full border-[0.72px] border-gray bg-white pointer-events-none
               lg:w-10 lg:h-10 lg:p-2.5 lg:gap-2.5 lg:border"></div>
        )}
        <button
          className={`
            relative z-10 rounded-full ${fill} duration-200 cursor-pointer
            ${isSelected 
              ? 'w-[21.63px] h-[21.63px] lg:w-7.5 lg:h-7.5' 
              : 'w-[28.84px] h-[28.84px] lg:w-10 lg:h-10 hover:w-7.5 hover:h-7.5'}
          `}
          onClick={() => onSelect(colorId)}
        ></button>
      </div>
    );
  }