import img1 from '../../../assets/images/options/1.png';
import img2 from '../../../assets/images/options/2.png';
import img3 from '../../../assets/images/options/3.png';
import img4 from '../../../assets/images/options/4.png';
import img5 from '../../../assets/images/options/5.png';


interface IList {
    _id: number,
    title: string,
    img: string,
    multiplier: number
}

export const optionList: IList[] = [
    {
        _id: 1,
        title: 'Economy',
        img: img1.src,
        multiplier: 46
    },
    {
        _id: 2,
        title: 'Comfort',
        img: img2.src,
        multiplier: 64
    },
    {
        _id: 3,
        title: 'Comfort+',
        img: img3.src,
        multiplier: 72
    },
    {
        _id: 4,
        title: 'Business',
        img: img4.src,
        multiplier: 117
    },
    {
        _id: 5,
        title: 'Premier',
        img: img5.src,
        multiplier: 196
    },
]