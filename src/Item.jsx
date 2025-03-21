import React, { useState } from "react"
import Color from "./Color.jsx"
import Size from "./Size.jsx"
import outfit1 from './assets/outfit1.png'
import outfit2 from './assets/outfit2.png'
import outfit3 from './assets/outfit3.png'
import outfit4 from './assets/outfit4.png'

export default function Item() {
    const [selectedColorId, setSelectedColorId] = useState('Black');
    const [selectedSize, setSelectedSize] = useState('M');

    const handleColorSelection = (colorId) => {
        setSelectedColorId(colorId);
    };

    const handleSizeSelection = (sizeId) => {
        setSelectedSize(sizeId);
    };

    const colors = [
        {id: 'Black', fill: 'bg-black'},
        {id: 'Beige', fill: 'bg-beige'},
        {id: 'Cyan', fill: 'bg-cyan'},
        {id: 'Light-blue', fill: 'bg-light-blue'},
    ]

    const sizes = ['XS', 'SM', 'M', 'L', 'XL', 'XXL', '3XL', '4XL']

    return (
        <div className="flex flex-col items-center pt-[34px] px-[21px] gap-5 lg:flex-row lg:p-0">
            
            <div className="w-[330.73px] h-[484px] flex flex-col justify-between items-center 
                lg:w-[725px] lg:h-[960px]">
      
                <div className="w-full h-auto flex justify-center p-[5.04px] gap-[5.04px] 
                    lg:p-[10px] lg:gap-[10px]">
                    <img 
                        src={outfit1} 
                        alt="Outfit 1" 
                        className="w-[320.65px] h-[360.98px] rounded-[8.07px] 
                        object-cover cursor-pointer lg:w-[636px] lg:h-[716px] lg:rounded-2xl"
                    />
                </div>

                <div className="w-full flex justify-center gap-[10.59px] 
                    lg:w-[636px] lg:h-[198px] lg:gap-[21px]">
                    <img
                        src={outfit2}
                        alt="Outfit 2"
                        className="thumbnail"
                    />
                    <img
                        src={outfit3}
                        alt="Outfit 3"
                        className="thumbnail"
                    />
                    <img
                        src={outfit4}
                        alt="Outfit 4"
                        className="thumbnail"
                    />
                </div>
            </div>

            <div className="w-full flex flex-col gap-[20px] 
                lg:w-[725px] lg:h-[960px] lg:gap-[30px] lg:justify-center">
                <h2 className="text-h4 font-[600] text-black lg:text-h1">
                    Long Sleeve Overshirt Hoodie
                </h2>
                
                <div className="flex gap-[10px] items-center">
                    <span className="text-h5 font-[600] line-through text-gray lg:font-normal lg:text-h3">$535.00</span> 
                    <span className="text-h4 font-[600] text-black lg:font-bold lg:text-h2">489.00</span>
                </div>

                <section className="flex flex-col gap-[15px]">
                    <h4 className="text-h6 font-bold text-black lg:text-h4 lg:font-[600]">Description</h4>
                    <p className="text-p text-gray">
                        Effortlessly stylish and versatile, this Long Sleeve Overshirt 
                        in perfect for layering or wearing solo. Crafted for comfort and durability, 
                        it offers a timeless look that complements any wardrobe. Ideal for casual 
                        outings or smart-casual occasions, this overshirt is a must-have staple.
                    </p>
                </section>

                <div className="flex flex-col gap-[15px]">
                    <div className="flex gap-[10px] items-center">
                        <span className="text-p text-gray lg:text-h5">Color:</span> 
                        <span className="text-h6 font-bold text-black lg:text-h4 lg:font-[600]">{selectedColorId} Color</span>
                    </div>
                    <div className="flex gap-[7.21px] lg:gap-[10px]">
                        {colors.map((color) => (
                            <Color 
                                key={color.id}
                                colorId={color.id}
                                fill={color.fill}
                                onSelect={handleColorSelection}
                                selectedColorId={selectedColorId}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-[15px]">
                    <div className="flex gap-[10px] items-center">
                        <span className="text-base text-gray lg:text-h5">Size:</span>
                        <span className="text-lg font-[600] text-black lg:text-h4">{selectedSize}</span>
                    </div>
                    <div className="flex gap-[10px] pb-1 overflow-x-auto lg:pb-0 lg:overflow-visible">
                        {sizes.map((size) => (
                            <Size
                                key={size}
                                size={size}
                                onSelect={handleSizeSelection}
                                selectedSize={selectedSize}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex gap-5 w-full">
                    <button className="bg-violet rounded-xl 
                            pt-[16px] pb-[16px] flex gap-[10px] 
                            justify-center w-full hover:bg-violet-800 cursor-pointer">
                        <span className="text-p font-bold lg:text-h5 lg:font-[600] text-white">Add To Cart</span>
                    </button>
                    <button className="bg-white border border-gray rounded-xl 
                            pt-[16px] pb-[16px] flex gap-[10px] 
                            justify-center w-full hover:bg-gray-200 cursor-pointer">
                        <span className="text-p lg:text-h5 font-[600] text-gray">Buy Now</span>
                    </button>
                </div>
            </div>
        </div>
    )
}