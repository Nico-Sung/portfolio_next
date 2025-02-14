const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        const offset = window.innerHeight / 2 - targetElement.offsetHeight / 2;
        window.scrollTo({
            top: targetElement.offsetTop - offset,
            behavior: "smooth",
        });
    }
};

export default handleScroll;
