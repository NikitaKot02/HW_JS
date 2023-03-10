const tooltips = selector => {
    const tooltips = document.querySelectorAll(selector);
    let tooltipDescription = null;

    const createTooltip = (event) => {
        if (event.target.tagName !== 'SPAN') return;
        const elem = event.target;
        const text = elem.dataset.text;
        console.log(elem.dataset);

        let y = elem.offsetHeight;
        let x = elem.offsetWidth;

        console.log(x);

        tooltipDescription = document.createElement('div');
        tooltipDescription.classList.add('tool-tip-element');
        tooltipDescription.innerText = text;

        tooltipDescription.style.top = y + 'px';
        tooltipDescription.style.left = - (x / 2)+ 'px';

        elem.append(tooltipDescription);
    }

    const removeTooltip = event => {
        const elem = event.target;

        [...elem.children].forEach(child => {
            if (child.classList.contains('tool-tip-element')){
                child.remove();
                tooltipDescription = null;
            }
        })
    }

    tooltips.forEach(tolltip => {
        tolltip.addEventListener('mouseover', function(event) {
            createTooltip(event);
        });
        tolltip.addEventListener('mouseout', event => removeTooltip(event));
    });
}

tooltips('.tool-tip');