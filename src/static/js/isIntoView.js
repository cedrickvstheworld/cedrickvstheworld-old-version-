export default function isInViewport(target) {
    // in viewport
    let { top, bottom } = target.getBoundingClientRect();
    let vHeight = (window.innerHeight || document.documentElement.clientHeight);


    return (
        (top > 0 || bottom > 0) &&
        top < vHeight
    );

    //reached top
    // let top = target.getBoundingClientRect().top;
    // return (
    //     top <= 0
    // );

}