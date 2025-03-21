import Item from './Item.jsx'

export default function Products () {

    return (
        <div id='products' className='flex flex-col gap-10 lg:gap-20 lg:my-10'>
            <Item />
            {/* <Item />
            <Item /> */}
        </div>
    ) 
}