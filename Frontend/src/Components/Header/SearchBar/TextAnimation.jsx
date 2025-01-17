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
