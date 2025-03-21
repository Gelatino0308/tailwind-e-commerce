
export default function Size ({size, onSelect, selectedSize}) {
    const isSelected = selectedSize === size;

    return (
        <button
            className={`
                border border-gray min-w-[53.41px] rounded-[4.01px] p-[6.68px] flex gap-[6.68px] 
                justify-center flex-grow cursor-pointer hover:bg-violet-grayish
                lg:p-4 lg:border-[0.67px] lg:min-w-20 lg:rounded-[6px] lg:gap-[10px]
                ${isSelected ? 'bg-violet-grayish' : 'bg-white'}
            `}
            onClick={() => onSelect(size)}
        >
            <span>{size}</span>
        </button>    
    );
}