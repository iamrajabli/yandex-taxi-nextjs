import React from 'react';
import Image from 'next/image';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelectors';
import { optionList } from './data';
import cn from 'classnames';


const Options: React.FC = () => {

    const { selectedOption, travelTime } = useTypedSelector(state => state.taxi)
    const { setSelectedOption } = useActions();


    return (
        <div className='flex overflow-x-scroll hide-scroll-bar my-5'>

            <div className='flex flex-nowrap gap-3'>
                {optionList.map(option => (
                    <button key={option._id}
                        onClick={() => travelTime && setSelectedOption(option._id)}
                        className='inline-block rounded-xl py-2 px-4 outline-none bg-white overflow-hidden'
                        style={{ minWidth: '105px' }}>
                        <div className={cn('opacity-30 text-left transition-opacity duration-300 ease-in-out', {
                            'opacity-100': String(option._id) === selectedOption
                        })}>
                            <Image src={option.img} alt={option.title} width={50} height={50} />
                            <div className='text-sm -mt-1' style={{color: '#222'}}>{option.title}</div>
                            <div className='text-md font-medium'>-$</div>
                        </div>
                    </button>
                ))}
            </div>

        </div>
    );
};

export default Options;