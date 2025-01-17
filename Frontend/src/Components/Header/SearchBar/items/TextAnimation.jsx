// TextAnimation.jsx
import { TypeAnimation } from 'react-type-animation';

const TextAnimation = () => {
    return (
        <TypeAnimation
            sequence={[
                'Search "Milk"',
                1500,
                'Search "Eggs"',
                1500,
                'Search "Bread"',
                1500,
                'Search "Atta"',
                1500,
                'Search "Moida"',
                1500,
                'Search "Rice"',
                1500,
                'Search "Sugar"',
                1500,
                'Search "Salt"',
                1500,
                'Search "Butter"',
                1500,
                'Search "Paneer"',
                1500,
                'Search "Cheese"',
                1500,
                'Search "Fruits"',
                1500,
                'Search "Vegetables"',
                1500,
                'Search "Snacks"',
                1500,
                'Search "Juice"',
                1500,
                'Search "Tea"',
                1500,
                'Search "Coffee"',
                1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor={true}
            style={{ fontSize: '1rem', paddingLeft: '10px' }}
        />
    );
};

export default TextAnimation;
