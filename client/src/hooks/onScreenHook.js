import { useEffect, useState } from 'react';

// this hook is borrowed from Creaforge on Stackoverflow
// https://stackoverflow.com/questions/45514676/react-check-if-element-is-visible-in-dom

export default function useOnScreen(ref) {
    const [isIntersecting, setIntersecting] = useState(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const observer = new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
    );

    useEffect(() => {
        observer.observe(ref.current);
        // Remove the observer as soon as the component is unmounted
        return () => {
            observer.disconnect();
        };
    }, [observer, ref]);

    return isIntersecting;
}
