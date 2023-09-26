var Progress_Steps;
(function (Progress_Steps) {
    const state = [{ id: 0, icon: '1' }, { id: 1, icon: '2' }, { id: 2, icon: '3' }, { id: 3, icon: '4' }, { id: 4, icon: '5' }];
    const progress = document.querySelector('.progress-container');
    const progressBar = document.querySelector('.bar');
    const btnPrev = document.querySelector('#prev');
    const btnNext = document.querySelector('#next');
    function useCreateElement(targetElement, data) {
        const fragme = document.createDocumentFragment();
        data.forEach((item, index) => {
            const element = document.createElement('div');
            if (index === 0) {
                element.classList.add('active');
            }
            element.classList.add('circle');
            element.textContent = item.icon;
            fragme.append(element);
        });
        targetElement.append(fragme);
    }
    useCreateElement(progress, state);
    const circles = document.querySelectorAll('.circle');
    let clickCount = 0, length = state.length - 1;
    btnNext.addEventListener('click', () => {
        clickCount++;
        progressBar.style.width = 100 / length * clickCount + '%';
        circles.item(clickCount).classList.add('active');
        if (clickCount >= length) {
            btnNext.disabled = true;
        }
        else if (clickCount <= 0) {
            btnPrev.disabled = true;
        }
        else {
            btnNext.disabled = false;
            btnPrev.disabled = false;
        }
    });
    btnPrev.addEventListener('click', () => {
        circles.item(clickCount).classList.remove('active');
        clickCount--;
        progressBar.style.width = 100 / length * clickCount + '%';
        if (clickCount >= length) {
            btnNext.disabled = true;
        }
        else if (clickCount <= 0) {
            btnPrev.disabled = true;
        }
        else {
            btnNext.disabled = false;
            btnPrev.disabled = false;
        }
    });
})(Progress_Steps || (Progress_Steps = {}));
