import React, { useEffect, useRef, useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { FiSearch } from 'react-icons/fi';
import cn from 'classnames';

interface IInputPlaces {
    cbSuccess: () => void;
    type: 'from' | 'to'
}

const InputPlaces: React.FC<IInputPlaces> = ({ cbSuccess, type }) => {

    const [address, setAddress] = useState('');
    const isFrom = type === 'from';
    const inputRef = useRef<HTMLInputElement>(null);

    const setFocus = () => inputRef?.current?.focus()

    useEffect(() => {
        if (isFrom) setFocus()
    }, [isFrom])

    return (
        <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            // onSelect={handleSelect}
            onError={err => console.log('Err', err)
            }>
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div
                    className={cn('shadow-lg', {
                        'mb-5': isFrom
                    })}>
                    <div
                        className='py-4 px-5 bg-white rounded-lg flex items-center'
                        style={suggestions.length ?
                            {
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0
                            } : {}}>
                        <FiSearch
                            onClick={setFocus}
                            color={isFrom ? '#ffbc00' : '#615f5d'}
                            className='mr-3'
                            size={26} />
                        <input {...getInputProps({
                            placeholder: isFrom ? 'Where from?' : 'Where to',
                            className: 'outline-none w-full text-gray-800',
                            ref: inputRef
                        })} />

                        {!isFrom && (
                            <div className='absolute right-5 text-sm text-gray-400'> - min.</div>
                        )}
                    </div>
                </div>
            )}
        </PlacesAutocomplete >
    );
};

export default InputPlaces;