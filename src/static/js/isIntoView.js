export default function isInViewport(target) {
    // if (!target) return false;
    // const top = target.getBoundingClientRect().top;
    // return ((top + offset) >= 0 && (top - offset) <= window.innerHeight);
    const { top, bottom } = target.getBoundingClientRect();
    const vHeight = (window.innerHeight || document.documentElement.clientHeight);

    return (
        (top > 0 || bottom > 0) &&
        top < vHeight
    );

}